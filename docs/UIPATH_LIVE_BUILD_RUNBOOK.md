# UiPath Live Build Runbook

## Goal

Create a live UiPath Automation Cloud demo that mirrors the local command center and proves platform usage for Devpost.

## Minimum Winning Build

1. Create `Agentic Incident Ops` Maestro Case.
2. Add stages:
   - Intake
   - Evidence Collection
   - Root Cause Analysis
   - Remediation Approval
   - Remediation Execution
   - Communications
   - Closure
3. Add one Human Task for remediation approval.
4. Add one API Workflow using synthetic monitoring or ticketing data.
5. Add one robot/API remediation step that changes a safe mock feature flag.
6. Add one agent/coded-agent step that ranks hypotheses from fixture evidence.
7. Attach receipt JSON to the case timeline.

## Fixture Inputs

Use `evidence/generated/checkout_fixture_receipt.json` as the safe incident payload.

## Recording Checklist

- Show case creation.
- Show evidence collection.
- Show agent hypothesis.
- Show approval screen.
- Show approved remediation execution.
- Show final receipt.
- Keep video under 5 minutes.

## Fallback If Tenant Access Is Delayed

Use the command center demo plus the Maestro case blueprint. State clearly that simulated connectors are placeholders for the listed UiPath API Workflows. Do not claim a live tenant run without screenshots or video evidence.
