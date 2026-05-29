# Task: Ship Agentic Incident Ops to Devpost Prod 100

## Objective

Prepare `Agentic Incident Ops` as a production-ready UiPath AgentHack submission for Devpost. The submission should clearly fit Track 1, UiPath Maestro Case, and demonstrate a working end-to-end incident response case with agents, robots, API workflows, human approvals, evidence receipts, and a public repo.

## Definition of Prod 100

Prod 100 means the project can be reviewed by a judge without private explanation:

- Public GitHub repo is complete, licensed, and has setup instructions.
- Demo video is 5 minutes or less and shows the solution running.
- Devpost project page has title, tagline, description, screenshots, track selection, repo link, video link, and deck link.
- UiPath Automation Cloud workflow is real or represented by a faithful MVP with clear path to real connectors.
- README lists all UiPath components and coding agent usage.
- Evidence folder proves what was built, what was researched, and what remains external.
- Risks and limitations are disclosed without weakening the product story.

## Scope

In scope:

- UiPath Maestro Case workflow proposal.
- Local demo MVP.
- Public repo plan.
- Devpost submission copy and field mapping.
- Video outline and deck outline.
- Checklist, evidence log, and risk register.
- Form automation assistant for preparing Devpost drafts.

Out of scope until credentials and UiPath Labs access are available:

- Live UiPath tenant deployment.
- Final Devpost submission.
- Uploading YouTube/Vimeo/Youku video.
- Publishing repository visibility changes through GitHub if credentials are not available.

## Milestones

### 1. Submission Strategy

Status: complete

- Select Track 1, UiPath Maestro Case.
- Position incident operations as dynamic, exception-heavy case management.
- Align story to business impact, platform usage, technical execution, completeness, and creativity.

### 2. Workflow Design

Status: complete

- Define Maestro Case stages.
- Map each stage to agents, robots, API Workflows, and human tasks.
- Define evidence, handoffs, and exception paths.

### 3. Demo MVP

Status: complete

- Create local dashboard demo.
- Simulate case lifecycle.
- Include approval gate and evidence export.
- Provide run command.

### 4. Devpost Package

Status: complete

- Draft Devpost fields.
- Draft public repo plan.
- Draft video outline.
- Draft deck outline.
- Add automation assistant for filling the draft.

### 5. Production Activation

Status: pending external access

- Request or confirm UiPath Labs access.
- Recreate blueprint in UiPath Maestro Case.
- Replace simulated connectors with real API Workflows.
- Capture screenshots and video from Automation Cloud.
- Save Devpost draft, review, and submit before June 29, 2026 at 11:45pm PDT.

## Acceptance Criteria

- `npm run demo` serves the MVP locally.
- `npm run check` validates JavaScript syntax.
- README explains setup, UiPath components, and coding agent usage.
- `docs/DEVPOST_SUBMISSION_PACKET.md` can be pasted into Devpost.
- `automation/devpost_fill_draft.mjs` can prepare a draft after login.
- No secrets are committed.
- MIT license exists.

## Owner Notes

Use automation for repetitive preparation and form filling, but do not perform final external submission without explicit human confirmation and a logged-in authorized session.
