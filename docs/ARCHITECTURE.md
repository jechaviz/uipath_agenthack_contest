# Architecture

## System Shape

```text
Alert or ticket
  -> UiPath Maestro Case
  -> Intake Agent
  -> Evidence API Workflows and Robots
  -> Root Cause Coded Agent
  -> Human Approval Task
  -> Remediation Robot or API Workflow
  -> Communications Agent
  -> Postmortem Agent
  -> Evidence Receipt
```

## Responsibility Split

| Layer | Responsibility |
| --- | --- |
| UiPath Maestro Case | Durable state, stages, handoffs, exceptions, approvals. |
| Agent Builder | Intake, communications, postmortem drafting. |
| Coded Agent | Evidence-based hypothesis ranking and runbook recommendation. |
| Robots | Deterministic UI or system actions. |
| API Workflows | Monitoring, ticketing, chat, deployment, and feature flag integrations. |
| Human Tasks | Approval and accountability for risky changes. |
| V Core | Readiness validation, fixture generation, evidence pack generation. |
| Vue Command Center | Judge-facing demo and narrative cockpit. |

## Data Contracts

Incident case:

- `case_id`
- `service`
- `severity`
- `business_impact`
- `evidence_refs`
- `ranked_hypotheses`
- `recommended_runbook`
- `approval_decision`
- `execution_receipt`
- `postmortem_packet`

Evidence receipt:

- `actor`
- `action`
- `input_hash`
- `output_hash`
- `timestamp`
- `approval_id`
- `redaction_status`

## Design Principles

- Separate reasoning from execution.
- Use Maestro as the source of truth.
- Keep robots deterministic.
- Make humans approve risky actions.
- Store receipts instead of raw secrets.
- Keep demos synthetic until sanitized tenant evidence is available.
