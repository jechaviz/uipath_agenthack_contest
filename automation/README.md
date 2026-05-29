# Devpost Draft Automation

This folder prepares the external submission flow.

The assistant can open the UiPath AgentHack Devpost submission page, wait for you to log in, and attempt to fill a draft from `devpost_submission.json`. It does not click final submit unless you pass explicit flags.

## Install

```powershell
npm install
```

## Fill Draft

```powershell
node automation/devpost_fill_draft.mjs --save-draft
```

The browser profile is stored locally under `.browser/devpost-profile` so you can log in once and continue. Do not commit `.browser/`.

## Final Submit Gate

Final submission is blocked by default. Only run it after reviewing every field:

```powershell
node automation/devpost_fill_draft.mjs --submit --i-understand
```

If Devpost changes form labels, the script may only partially fill the page. In that case, use `devpost_submission.json` as the copy source and finish manually.
