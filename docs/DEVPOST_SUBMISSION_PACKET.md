# Devpost Submission Packet

Use this as the source of truth when filling the Devpost project page.

## Project Title

Agentic Incident Ops

## Tagline

Governed UiPath agents that turn production incidents into auditable, human-approved remediation cases.

## Track

Track 1: UiPath Maestro Case

## Elevator Pitch

Production incidents are chaotic, high stakes, and full of exceptions. Agentic Incident Ops uses UiPath Maestro Case to coordinate alerts, evidence, root-cause reasoning, human approvals, remediation robots, stakeholder communications, and postmortem receipts in one governed workflow.

## Inspiration

Engineering teams often respond to incidents across PagerDuty, Jira, Slack, monitoring dashboards, runbooks, and deployment tools. The incident commander has to reconstruct what happened, decide what is safe, approve actions, update stakeholders, and prove the response later. Agentic automation is valuable here only if it stays governed. That is why this project uses UiPath as the orchestration and control layer.

## What It Does

Agentic Incident Ops creates a Maestro Case for each incident. Agents classify the incident, gather evidence, rank root-cause hypotheses, propose a reversible remediation, and draft communications. Humans approve high-risk production actions and customer-facing messages. UiPath robots and API Workflows execute approved runbook steps and write evidence receipts back to the case timeline.

## How We Built It

The solution is designed around UiPath Automation Cloud:

- Maestro Case coordinates the dynamic incident lifecycle.
- Agent Builder powers intake, communications, and postmortem agents.
- API Workflows connect alerting, ticketing, monitoring, deployment, chat, and feature flag tools.
- Robots execute deterministic runbook steps and capture receipts.
- A coded agent ranks hypotheses and recommends runbooks from evidence.
- Human Tasks gate production changes and external communications.
- Codex helped scaffold the demo, workflow blueprint, documentation, and submission package.

The local MVP simulates the end-to-end flow and exports a receipt. The production plan replaces simulated connectors with UiPath API Workflows and robots in the AgentHack Labs tenant.

## UiPath Components Used

- UiPath Maestro Case
- UiPath Agent Builder
- UiPath API Workflows
- UiPath Robots
- UiPath Coded Agent
- UiPath Human Tasks
- UiPath Automation Cloud
- UiPath for Coding Agents, documented through Codex usage evidence

## Business Impact

Incident response improves when the response path is coordinated, auditable, and safe:

- Faster triage through normalized case intake and automated evidence collection.
- Safer mitigation through confidence scoring, runbook ranking, and human approval gates.
- Lower post-incident toil through automatic timelines, receipts, and RCA drafts.
- Better adoption because teams can integrate existing tools instead of replacing them.

## Technical Execution

The architecture separates reasoning from action. Agents can analyze and recommend, but UiPath Maestro controls handoffs, state, approvals, and exceptions. Robots and API Workflows perform deterministic actions only after guardrails pass. Every step records evidence for audit and postmortem review.

## What Is New

Most incident tools either collect signals or coordinate people. Agentic Incident Ops uses a case-based orchestration pattern where agents, robots, APIs, and humans share a single governed state machine. The output is not only mitigation. It is an evidence-backed incident receipt.

## Challenges

- Designing autonomy without unsafe production action.
- Representing dynamic incident paths while staying understandable for judges.
- Keeping external integrations realistic without committing secrets or private tenant details.

## Accomplishments

- Complete UiPath Maestro Case workflow blueprint.
- Local MVP that demonstrates the lifecycle, human approval gate, and evidence export.
- Public repo package with setup, risk register, checklist, video outline, deck outline, and Devpost copy.
- Coding agent evidence for AgentHack bonus criteria.

## What We Learned

Agentic systems need visible control points. The best product story is not "the agent fixes everything." It is "UiPath coordinates the right agent, robot, API, or person at the right time, with receipts."

## What Is Next

- Recreate the case stages in UiPath Maestro Case.
- Connect one live alert source, one monitoring source, one ticket source, and one safe remediation action.
- Record Automation Cloud execution for the final 5-minute video.
- Publish the repo and submit Devpost before the deadline.

## Repository URL

Placeholder:

```text
https://github.com/jechaviz/contests-worth-it-uipath_agenthack
```

## Demo Video URL

Placeholder:

```text
TBD YouTube, Vimeo, or Youku link
```

## Presentation Deck URL

Placeholder:

```text
TBD public Google Drive, OneDrive, or Dropbox link
```

## Screenshots To Upload

1. MVP command center showing Maestro Case timeline.
2. Human approval gate.
3. Evidence receipt export.
4. UiPath Automation Cloud Maestro Case once live.
5. Architecture slide from deck.

## Submission Notes

- Video must be 5 minutes maximum.
- README must list UiPath components and coding agent usage.
- Repository must be public and licensed MIT or Apache 2.0.
- Final submission should not include secrets, private customer data, or internal logs.
