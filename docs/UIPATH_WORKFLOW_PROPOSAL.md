# UiPath Workflow Proposal

## Track

Track 1: UiPath Maestro Case.

Incident response is a case management problem because each incident evolves differently. The system needs dynamic stages, agent handoffs, exception branches, approvals, and auditability rather than one fixed BPMN path.

## Case Lifecycle

### 1. Incident Intake

UiPath component: Agent Builder

Inputs:

- PagerDuty or Opsgenie alert.
- ServiceNow or Jira incident.
- Service catalog and deployment metadata.

Actions:

- Normalize alert text.
- Detect duplicate incidents.
- Assign severity and service.
- Create Maestro Case.

Outputs:

- Case summary.
- Initial severity.
- Impact hypothesis.
- Required evidence checklist.

### 2. Evidence Collection

UiPath component: API Workflow plus Robot

Actions:

- Pull metrics from Datadog, New Relic, or Grafana.
- Pull logs and traces.
- Capture deployment diff.
- Capture screenshots or links for the case record.

Human control:

- No production changes happen in this stage.
- Robot only gathers evidence with read-only permissions.

### 3. Root Cause Analysis

UiPath component: Coded Agent

Actions:

- Rank hypotheses against evidence.
- Match symptoms to known runbooks.
- Explain confidence and uncertainty.
- Recommend reversible remediation.

Guardrails:

- If confidence is low, Maestro routes to human triage.
- If evidence conflicts, Maestro requests additional data.

### 4. Remediation Approval

UiPath component: Maestro Human Task

Actions:

- Present recommended action, risk, expected blast radius, and rollback plan.
- Require Incident Commander approval for production actions.
- Require Communications Owner approval for customer-facing updates.

Approval fields:

- Decision.
- Reason.
- Scope.
- Expiration window.
- Manual override notes.

### 5. Remediation Execution

UiPath component: Robot plus API Workflow

Actions:

- Run approved feature flag rollback, config revert, cache purge, or scaling action.
- Verify preflight guardrails.
- Monitor recovery threshold.
- Escalate to manual takeover if guardrails fail.

Outputs:

- Execution receipt.
- Before and after metric snapshot.
- Recovery assessment.

### 6. Stakeholder Communications

UiPath component: Agent Builder plus Human Task

Actions:

- Draft Slack or Teams update.
- Draft status page copy when required.
- Draft executive summary.
- Route external messages through human approval.

### 7. Closure and Postmortem

UiPath component: Agent Builder plus API Workflow

Actions:

- Generate incident timeline.
- Generate RCA draft.
- Create Jira follow-up tasks.
- Export final evidence receipt.

## Agents

| Agent | Type | Purpose |
| --- | --- | --- |
| Intake Classifier | Agent Builder | Converts noisy alerts into a normalized case. |
| Evidence Collector | Robot/API Workflow | Retrieves metrics, logs, screenshots, deployment metadata, and ticket context. |
| Root Cause Analyst | Coded Agent | Ranks hypotheses and recommends a reversible runbook. |
| Remediation Planner | Agent Builder or Coded Agent | Builds the proposed action plan and risk summary. |
| Communications Agent | Agent Builder | Drafts stakeholder updates with approved tone and factual limits. |
| Postmortem Agent | Agent Builder | Produces RCA, timeline, and action item drafts. |

## Exception Handling

- Missing service mapping: route to human resolver and update catalog.
- Monitoring API timeout: retry, then attach partial evidence and mark confidence lower.
- Conflicting signals: request additional evidence and pause remediation.
- Approval rejected: ask planner for alternative or mark manual takeover.
- Rollback failed: escalate to incident commander and attach failure receipt.
- Customer impact unclear: block external communications until approved.

## Production Controls

- No autonomous high-risk production change without human approval.
- All external updates require approved message policy.
- All receipts redact secrets and personal data.
- Every agent output stores confidence, source evidence, and next action.
- Every robot/API action stores request metadata, result summary, and timestamp.

## Demo Mapping

The MVP in `demo/` mirrors this lifecycle:

- Run Case: intake, evidence, and root cause analysis.
- Approve: Maestro Human Task gate.
- Continue: robot/API execution and closure.
- Export Evidence: final evidence receipt.
