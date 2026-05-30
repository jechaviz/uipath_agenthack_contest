# Judge Guide

## 90-Second Read

Agentic Incident Ops is a UiPath Maestro Case solution for production incidents. It does not ask judges to believe that an agent should freely change production. It shows a stronger enterprise pattern: agents reason, Maestro governs, humans approve, robots execute, and every action leaves a receipt.

## What To Open First

1. README for project fit and setup.
2. `docs/UIPATH_WORKFLOW_PROPOSAL.md` for UiPath architecture.
3. `C:\git\websites\uipath_agenthack` command center for the visual demo.
4. `evidence/generated/readiness_report.json` for automated readiness checks.
5. `docs/DEVPOST_SUBMISSION_PACKET.md` for final submission copy.

## Why It Fits UiPath

- Maestro Case is central, not decorative.
- Agent Builder handles reasoning-heavy intake, comms, and postmortem steps.
- API Workflows and robots execute deterministic tasks.
- Human Tasks gate risky decisions.
- The coded agent is used for hypothesis ranking where procedural automation is too rigid.

## What Makes It Competitive

- Focused enterprise use case with real operational pain.
- Dynamic case flow instead of a linear toy workflow.
- Safety story that matches enterprise buying expectations.
- Evidence receipts as a memorable differentiator.
- Automation package that prepares Devpost, evidence, and readiness reports.

## Remaining Live Demo Upgrade

Replace simulated connectors with a UiPath Labs tenant run for:

- One alert source.
- One monitoring source.
- One ticketing source.
- One safe remediation action.
- One human approval task.
