# Presentation Deck Outline

Use the official UiPath template when available. Keep this as the content map.

## Slide 1 - Title

Agentic Incident Ops

Tagline: Governed UiPath agents for auditable production incident response.

## Slide 2 - Problem

Incident response is fragmented across alerts, tickets, dashboards, chat, runbooks, and approvals. The hard part is not only deciding what to do. It is coordinating who or what is allowed to act, proving what happened, and closing the loop.

## Slide 3 - Solution

UiPath Maestro Case coordinates the incident from alert to postmortem. Agents reason and draft. Robots and API Workflows execute deterministic actions. Humans approve risky steps. Every step creates a receipt.

## Slide 4 - Workflow

Stages:

1. Incident Intake
2. Evidence Collection
3. Root Cause Analysis
4. Remediation Approval
5. Remediation Execution
6. Stakeholder Communications
7. Closure and Postmortem

## Slide 5 - UiPath Architecture

Show:

- Maestro Case as central state and orchestration.
- Agent Builder agents.
- API Workflows.
- Robots.
- Coded Agent.
- Human Tasks.
- External tools.

## Slide 6 - Demo

Use screenshots from:

- Case timeline.
- Approval gate.
- Evidence receipt.

## Slide 7 - Business Impact

Metrics:

- 30% target reduction in time to acknowledge.
- 20% target reduction in time to mitigate.
- 100% approval evidence for high-risk actions.
- 100% postmortem packet creation.

## Slide 8 - Production Readiness

Controls:

- Human-in-the-loop gates.
- Confidence thresholds.
- Guardrail checks.
- Redaction policy.
- Exception paths.
- Audit receipts.

## Slide 9 - Coding Agent Usage

Codex contributed scaffold, demo, workflow blueprint, docs, and Devpost automation. Evidence is in the public README and `evidence/codex-agent-usage.md`.

## Slide 10 - Roadmap

Next:

- Build live UiPath Maestro Case in Labs.
- Connect one alert source, one monitoring source, one ticket system, and one safe remediation action.
- Add status communication approval.
- Record final Devpost video.
