import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./", import.meta.url));
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function resolveRequestPath(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const requested = clean === "/" ? "/demo/index.html" : clean;
  const full = resolve(root, `.${requested}`);
  if (!full.startsWith(resolve(root))) {
    return null;
  }
  if (existsSync(full)) {
    return full;
  }
  return resolve(root, "demo/index.html");
}

const server = createServer(async (req, res) => {
  const filePath = resolveRequestPath(req.url || "/");
  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(normalize(filePath));
    res.writeHead(200, {
      "content-type": types[extname(filePath)] || "application/octet-stream",
      "cache-control": "no-store"
    });
    res.end(body);
  } catch {
    const fallback = await readFile(join(root, "demo/index.html"));
    res.writeHead(200, { "content-type": types[".html"], "cache-control": "no-store" });
    res.end(fallback);
  }
});

server.listen(port, () => {
  console.log(`Agentic Incident Ops demo: http://localhost:${port}`);
});
