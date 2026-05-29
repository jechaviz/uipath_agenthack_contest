# Agentic Incident Ops

UiPath AgentHack submission package for the `agentic_incident_ops` track idea.

Agentic Incident Ops turns a noisy production incident into a governed UiPath Maestro Case. It coordinates intake, evidence collection, root-cause analysis, human approval, remediation execution, status communications, and postmortem receipts in one auditable flow.

## Hackathon Fit

- Hackathon: UiPath AgentHack
- Chosen challenge track: Track 1, UiPath Maestro Case
- Product name: Agentic Incident Ops
- Core use case: enterprise incident response for dynamic, exception-heavy work
- Current target date: Devpost deadline is listed as June 29, 2026 at 11:45pm PDT

This project is designed for the Maestro Case track because incidents do not follow a fixed path. Signals arrive out of order, remediation can be blocked by risk, humans must approve customer-impacting changes, and the workflow needs a durable audit trail.

## What It Does

When an incident opens, Agentic Incident Ops:

1. Creates a UiPath Maestro Case from an alert, ticket, or manual intake.
2. Classifies severity, service, blast radius, and confidence.
3. Collects evidence from monitoring, logs, ticketing, and runbook systems.
4. Uses agents to propose root cause hypotheses and remediation options.
5. Requires human approval for high-risk actions.
6. Executes approved remediation through UiPath robots and API Workflows.
7. Drafts stakeholder updates and an incident timeline.
8. Produces a signed evidence receipt for review and postmortem.

## UiPath Components

Planned UiPath implementation:

- UiPath Maestro Case for long-running case stages, handoffs, exceptions, and auditability.
- UiPath Agent Builder for intake, communications, and postmortem agents.
- UiPath API Workflows for ServiceNow/Jira, PagerDuty/Opsgenie, Datadog/New Relic/Grafana, Slack/Teams, GitHub, and feature flag APIs.
- UiPath Robots for deterministic runbook execution and legacy console or portal steps.
- Coded Agent in Python for incident reasoning, runbook ranking, and evidence receipt assembly.
- Human Tasks in Maestro for risk approval, customer communications, and closure signoff.
- UiPath for Coding Agents plus Codex for scaffolding, documentation, testable demo logic, and submission artifacts.

See [docs/UIPATH_WORKFLOW_PROPOSAL.md](docs/UIPATH_WORKFLOW_PROPOSAL.md) and [uipath/agentic_incident_ops.case_blueprint.json](uipath/agentic_incident_ops.case_blueprint.json).

## Demo MVP

The included demo is a local command-center prototype that simulates the UiPath case lifecycle, human approval gate, and evidence receipt export.

Run it:

```powershell
npm run demo
```

Then open:

```text
http://localhost:4173
```

No external credentials are required for the MVP. The production build will replace the simulated connectors with UiPath API Workflows and robots.

## Devpost Materials

- Task plan: [docs/TASK_AGENTIC_INCIDENT_OPS_PROD100.md](docs/TASK_AGENTIC_INCIDENT_OPS_PROD100.md)
- Submission packet: [docs/DEVPOST_SUBMISSION_PACKET.md](docs/DEVPOST_SUBMISSION_PACKET.md)
- Public repo plan: [docs/PUBLIC_REPO_PLAN.md](docs/PUBLIC_REPO_PLAN.md)
- Video outline: [docs/VIDEO_OUTLINE.md](docs/VIDEO_OUTLINE.md)
- Presentation deck outline: [docs/PRESENTATION_DECK_OUTLINE.md](docs/PRESENTATION_DECK_OUTLINE.md)
- Prod 100 checklist: [docs/PROD100_CHECKLIST.md](docs/PROD100_CHECKLIST.md)
- Evidence folder: [evidence](evidence)
- Risks: [docs/RISKS.md](docs/RISKS.md)
- Devpost draft automation: [automation/README.md](automation/README.md)

## Coding Agent Usage

This project uses OpenAI Codex as an AI-assisted coding agent. Codex contributed:

- Repo structure and production-readiness task decomposition.
- UiPath Maestro Case workflow proposal.
- MVP demo implementation.
- Devpost submission copy, checklist, and risk register.
- Draft automation script for preparing external submissions.

Evidence is documented in [evidence/codex-agent-usage.md](evidence/codex-agent-usage.md). The generated artifacts are meaningfully integrated into the submission because they define the workflow, run the demo, and provide the Devpost-ready materials.

## Setup

Prerequisites:

- Node.js 20 or newer.
- UiPath Automation Cloud and AgentHack Labs access for the production workflow.
- A public GitHub repository before final Devpost submission.
- A demo video link from YouTube, Vimeo, or Youku.
- A public deck link.

Install optional automation dependencies only if you want to use the Devpost draft assistant:

```powershell
npm install
```

## License

MIT. See [LICENSE](LICENSE).
