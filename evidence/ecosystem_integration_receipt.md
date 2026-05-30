# Ecosystem Integration Receipt

Date: 2026-05-30.

## VImport

Used for profile-aware submission hardening:

- Initialized local vault profile `uipath_agenthack_2026`.
- Generated private env profile outside the public repo.
- Generated redacted profile manifest.
- Generated secure-input checklist for the opportunity.

Artifacts:

- `evidence/profile/yo_profile_manifest.redacted.json`
- `evidence/profile/uipath_agenthack_secure_inputs.yml`
- `C:\git\customers\yo\profile\private\uipath_agenthack_2026.env`
- `%APPDATA%\vimport\vault\profiles\uipath_agenthack_2026.env`

## Veloclaw

Used as targeted ecosystem validation for the VImport vault bridge.

Command:

```powershell
v test vimport_common_test.v
```

Result:

- Passed.

Note:

- Full `v test .` in Veloclaw exceeded the local command timeout, so the focused bridge test was used for this release receipt.

## WAIBAv

Used for safe/mock visual QA of the command-center demo.

Target:

```text
http://localhost:4273
```

Result:

- `ok: true`
- `ux_score: 100`
- `critical_count: 0`
- `warning_count: 0`

## Account Automation Boundary

The operator profile now authorizes the following surfaces through `jesus.cgalaviz@gmail.com`:

- Devpost UiPath AgentHack.
- UiPath Automation Cloud / AgentHack Labs.
- YouTube demo upload.
- Google Drive deck sharing.

No final external submission, video upload, deck creation, or tenant mutation was performed in this slice because those require the final video/deck/live tenant asset or interactive external gates.
