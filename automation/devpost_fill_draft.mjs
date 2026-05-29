import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(here, "devpost_submission.json");
const args = new Set(process.argv.slice(2));
const shouldSaveDraft = args.has("--save-draft");
const shouldSubmit = args.has("--submit") && args.has("--i-understand");
const headless = args.has("--headless");
const data = JSON.parse(await readFile(dataPath, "utf8"));

const profileDir = resolve(here, "..", ".browser", "devpost-profile");
const browser = await chromium.launchPersistentContext(profileDir, {
  headless,
  viewport: { width: 1440, height: 1000 }
});

const page = await browser.newPage();
await page.goto(data.submission_url, { waitUntil: "domcontentloaded" });

console.log("If Devpost asks for login, complete it in the opened browser.");
console.log("The script will continue after the submission page is visible.");

await page.waitForLoadState("networkidle", { timeout: 120000 }).catch(() => {});

await fillByLabel(page, /project title|title/i, data.title);
await fillByLabel(page, /tagline|short description/i, data.tagline);
await fillByLabel(page, /repository|github|source code/i, data.repo_url);
await fillByLabel(page, /video|demo/i, data.video_url);
await fillByLabel(page, /presentation|deck|slides/i, data.deck_url);
await fillByLabel(page, /description|about/i, composeLongDescription(data));
await fillByLabel(page, /inspiration/i, data.inspiration);
await fillByLabel(page, /what it does/i, data.what_it_does);
await fillByLabel(page, /how we built/i, data.how_we_built_it);
await fillByLabel(page, /challenges/i, data.challenges);
await fillByLabel(page, /accomplishments/i, data.accomplishments);
await fillByLabel(page, /what we learned|learned/i, data.learned);
await fillByLabel(page, /what.?s next|next/i, data.whats_next);
await chooseText(page, data.track);

const builtWith = data.built_with.join(", ");
await fillByLabel(page, /built with|technologies|tools/i, builtWith);

if (shouldSaveDraft) {
  await clickByText(page, /save draft|save/i);
  console.log("Attempted to save draft. Review the page manually.");
}

if (args.has("--submit") && !shouldSubmit) {
  console.log("Final submit blocked. Re-run with --submit --i-understand after human review.");
}

if (shouldSubmit) {
  await clickByText(page, /submit project|submit/i);
  console.log("Attempted final submit. Confirm Devpost status manually.");
}

if (!shouldSaveDraft && !shouldSubmit) {
  console.log("Draft filled where selectors matched. Browser remains open for review.");
}

async function fillByLabel(page, label, value) {
  if (!value || value === "TBD") return false;
  const locators = [
    page.getByLabel(label),
    page.getByPlaceholder(label),
    page.locator("textarea").filter({ hasText: label }),
    page.locator("input").filter({ hasText: label })
  ];

  for (const locator of locators) {
    try {
      const target = locator.first();
      await target.waitFor({ state: "visible", timeout: 1500 });
      await target.fill(value);
      return true;
    } catch {
      // Keep trying other likely Devpost field surfaces.
    }
  }
  return false;
}

async function chooseText(page, text) {
  try {
    await page.getByText(text, { exact: false }).first().click({ timeout: 1500 });
    return true;
  } catch {
    return false;
  }
}

async function clickByText(page, pattern) {
  const button = page.getByRole("button", { name: pattern }).first();
  await button.waitFor({ state: "visible", timeout: 5000 });
  await button.click();
}

function composeLongDescription(packet) {
  return [
    packet.description,
    "",
    "UiPath components:",
    ...packet.built_with.map((item) => `- ${item}`),
    "",
    "Coding agent usage:",
    "OpenAI Codex helped scaffold the demo MVP, workflow blueprint, documentation, submission packet, and draft automation script. The output is integrated into the public repo and runnable demo."
  ].join("\n");
}
