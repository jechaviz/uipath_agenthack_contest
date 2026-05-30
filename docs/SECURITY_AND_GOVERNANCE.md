# Security and Governance

## Production Guardrails

- No autonomous production rollback without approval.
- No external customer communication without approval.
- No raw secrets in prompts, logs, screenshots, repo files, or receipts.
- Low-confidence agent results route to human triage.
- Failed guardrails stop execution and open manual takeover.

## Data Handling

Public evidence uses synthetic incidents. Final UiPath screenshots should be reviewed before upload for:

- Tenant identifiers.
- User email addresses.
- Tokens or credentials.
- Real customer names.
- Internal hostnames.
- Raw logs containing sensitive payloads.

## Approval Model

Approval tasks capture:

- Approver role.
- Decision.
- Scope.
- Reason.
- Time window.
- Linked recommendation.
- Linked execution receipt.

## Audit Model

Each automation step stores:

- Actor type.
- Source evidence.
- Action taken.
- Confidence.
- Timestamp.
- Result.
- Exception path if any.

## Failure Mode Policy

When the system is uncertain, it narrows scope instead of escalating autonomy:

- Ask for more evidence.
- Route to incident commander.
- Choose read-only collection.
- Stop execution on guardrail failure.
- Create a manual takeover packet.
