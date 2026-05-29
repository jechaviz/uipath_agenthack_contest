# Demo Validation Evidence

Date: 2026-05-29.

## Local Server

Command:

```powershell
npm run demo
```

Result:

- Server started at `http://localhost:4173`.
- HTTP check for `/` returned `200`.
- HTTP check for `/demo/app.js` returned `200`.

## Syntax and Data Checks

Command:

```powershell
npm run check
```

Result:

- `server.mjs` syntax OK.
- `demo/app.js` syntax OK.
- `automation/devpost_fill_draft.mjs` syntax OK.

Command:

```powershell
node -e "for (const f of ['uipath/agentic_incident_ops.case_blueprint.json','automation/devpost_submission.json','evidence/sample-case-receipt.json']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('json ok')"
```

Result:

- JSON validation OK.

## WAIBA QA Gate

Command:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File C:\Users\jecha\.codex\skills\waiba\scripts\invoke-waiba.ps1 action DesignQA.AutoNestedEvaluate --param mock true --param target http://localhost:4173
```

Result:

- `ok: true`
- `ux_score: 100`
- `critical_count: 0`
- `warning_count: 0`
- `visual_integrity_candidate: true`

Note: This was run in WAIBA safe/mock mode. Final Devpost screenshots should still be captured from the live browser and reviewed manually before submission.
