# Web Command Center Validation Evidence

Date: 2026-05-29.

## Target

`C:\git\websites\uipath_agenthack`

URL:

```text
http://localhost:4273
```

## Local Server

Result:

- Server started at `http://localhost:4273`.
- HTTP check for `/` returned `200`.

## Checks

Command:

```powershell
npm run check
```

Result:

- `tools/static_server.mjs` syntax OK.
- `src/data.js` syntax OK.

Command:

```powershell
v run C:\git\v_projects\uipath_agenthack\cmd\uipath_agenthack lineguard --contest C:\git\v_projects\contests\worth_it\uipath_agenthack --web C:\git\websites\uipath_agenthack
```

Result:

- `lineguard ok`

## WAIBA QA Gate

Command:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File C:\Users\jecha\.codex\skills\waiba\scripts\invoke-waiba.ps1 action DesignQA.AutoNestedEvaluate --param mock true --param target http://localhost:4273
```

Result:

- `ok: true`
- `ux_score: 100`
- `critical_count: 0`
- `warning_count: 0`
- `visual_integrity_candidate: true`

Note: This was run in WAIBA safe/mock mode. Final Devpost video and screenshots should still be reviewed for secrets before upload.
