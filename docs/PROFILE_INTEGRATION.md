# Profile Integration

## Operator Profile

Profile file:

```text
C:\git\customers\yo\profile\jecha_profile.yml
```

Account authorization key:

```yaml
external_account_creation_authorizations:
  uipath_agenthack_2026:
```

Default login identity:

```text
jesus.cgalaviz@gmail.com
```

## Account Surfaces

- Devpost UiPath AgentHack
- UiPath Automation Cloud / AgentHack Labs
- YouTube demo video upload
- Google Drive public deck link

## Credential Boundary

This project uses VImport vault refs. It does not require raw passwords in the public repository.

Relevant refs:

```text
VAULT:uipath_agenthack_2026:DEVPOST_PASSWORD_RESERVED
VAULT:uipath_agenthack_2026:UIPATH_PASSWORD_RESERVED
```

Private env profile:

```text
C:\git\customers\yo\profile\private\uipath_agenthack_2026.env
```

Local VImport vault profile:

```text
C:\Users\jecha\AppData\Roaming\vimport\vault\profiles\uipath_agenthack_2026.env
```

## Generated Evidence

- `evidence/profile/yo_profile_manifest.redacted.json`
- `evidence/profile/uipath_agenthack_secure_inputs.yml`

## Validation

Run:

```powershell
v run C:\git\v_projects\uipath_agenthack\cmd\uipath_agenthack validate --contest C:\git\v_projects\contests\worth_it\uipath_agenthack --web C:\git\websites\uipath_agenthack --profile C:\git\customers\yo\profile
```

The v1.1.0 gate verifies profile evidence, account authorization, Devpost vault ref, UiPath vault ref, and line limits.
