# Public Repo Plan

## Target Repository

`https://github.com/jechaviz/uipath_agenthack_contest`

Supporting public repositories:

- `https://github.com/jechaviz/uipath_agenthack_core`
- `https://github.com/jechaviz/uipath_agenthack_web`

## Required Public Contents

- `README.md`: project overview, setup, UiPath components, coding agent evidence.
- `LICENSE`: MIT.
- `demo/`: local MVP.
- `uipath/`: workflow blueprint.
- `docs/`: task, workflow, Devpost packet, video outline, deck outline, checklist, risks.
- `automation/`: Devpost draft assistant and field data.
- `evidence/`: research notes, coding agent usage, sample receipt, screenshots directory.

## Before Making Public

- Confirm no secrets, access tokens, tenant URLs with private identifiers, customer names, or proprietary logs are committed.
- Confirm screenshots are sanitized.
- Confirm final demo video does not expose credentials, hidden browser tabs, personal email, or private tenant IDs.
- Confirm README links point to public assets.
- Confirm repository license is MIT.

## Branching

Recommended:

- `main`: public Devpost-ready branch.
- `uipath-live-build`: optional working branch for tenant-specific assets if screenshots or exports need cleanup before public release.

## Release Tag

Create a tag after final Devpost submission:

```powershell
git tag devpost-final-2026
git push origin devpost-final-2026
```

## Public README Checks

- Title and tagline match Devpost.
- Includes exact track: UiPath Maestro Case.
- Lists all UiPath components.
- Includes setup instructions.
- Includes demo video link.
- Includes deck link.
- Includes coding agent usage and evidence link.

## Evidence Policy

Public evidence should prove capability without leaking private data:

- Use synthetic incident IDs.
- Redact tokens and hostnames.
- Avoid real customer names.
- Prefer generated receipts over raw production logs.
- Store only links or sanitized screenshots for external tools.
