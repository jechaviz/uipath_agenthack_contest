# Demo Video Outline

Maximum length: 5 minutes.

## 0:00 to 0:20 - Hook

Show the command center.

Script:

"Production incidents are not a fixed workflow. Agentic Incident Ops uses UiPath Maestro Case to coordinate agents, robots, APIs, and humans from alert to postmortem with evidence receipts."

## 0:20 to 0:55 - Problem and Business Impact

Show a noisy incident queue and summary.

Mention:

- Alerts, tickets, dashboards, chat, runbooks, and approvals are fragmented.
- Teams need speed, but production changes need control.
- The goal is lower time to mitigate and stronger auditability.

## 0:55 to 1:40 - UiPath Architecture

Show architecture slide or docs.

Mention:

- Maestro Case is the orchestration layer.
- Agent Builder handles intake, communications, and postmortem drafts.
- API Workflows connect external systems.
- Robots execute deterministic runbook steps.
- Coded Agent ranks hypotheses.
- Human Tasks approve high-risk actions.

## 1:40 to 3:35 - Live Demo

Use the local MVP first, then replace with live UiPath clips when ready.

Steps:

1. Click `Run Case`.
2. Show intake classification.
3. Show evidence collection.
4. Show hypothesis ranking and recommended rollback.
5. Pause at the human approval gate.
6. Click `Approve`.
7. Continue execution and closure.
8. Export evidence receipt.

Call out:

- The agent recommends.
- Maestro governs.
- Human approves.
- Robot/API executes.
- Evidence is captured.

## 3:35 to 4:25 - Production Path

Show UiPath workflow blueprint or Automation Cloud.

Mention:

- Current MVP is wired to the intended Maestro Case stages.
- Production connectors replace simulated data.
- Guardrails block low-confidence or risky actions.

## 4:25 to 4:50 - Coding Agent Bonus Evidence

Show README section or evidence file.

Mention:

- Codex generated the demo, workflow docs, submission packet, and automation script.
- Output is integrated into the runnable MVP and Devpost package.

## 4:50 to 5:00 - Close

Script:

"Agentic Incident Ops makes incident response faster without removing human control. UiPath becomes the governed execution layer from alert to receipt."

## Shot List

- MVP dashboard before run.
- Timeline while running.
- Human approval gate.
- Evidence receipt JSON.
- UiPath workflow or blueprint.
- README coding agent evidence.
