# Risks and Mitigations

## Risk: No UiPath Labs Access Yet

Impact: The final submission must show the solution running on UiPath Automation Cloud.

Mitigation:

- Request Labs access immediately.
- Use the local MVP to lock story, UX, and flow while waiting.
- Rebuild the same stages in Maestro Case once access arrives.

## Risk: Overclaiming Production Autonomy

Impact: Judges may penalize unsafe automation or unrealistic claims.

Mitigation:

- Present the system as governed agentic operations.
- Keep human approval for high-risk production changes.
- Show exception paths and confidence thresholds.

## Risk: External Integrations Need Credentials

Impact: Live connectors may be incomplete before deadline.

Mitigation:

- Use one real connector from each category if possible: alert, monitoring, ticket, remediation.
- Use sanitized mock connectors for the rest.
- Clearly label simulated connectors in docs and demo.

## Risk: Evidence Contains Sensitive Data

Impact: Public repo or video could leak private data.

Mitigation:

- Use synthetic incident IDs and generated data.
- Redact screenshots.
- Avoid raw logs.
- Review video frame by frame before upload.

## Risk: Devpost Form Changes

Impact: Automation selector guesses may fail.

Mitigation:

- Keep `automation/devpost_submission.json` as source copy.
- Use the assistant to prefill what it can.
- Manually review every field before final submission.

## Risk: Video Exceeds 5 Minutes

Impact: Submission may fail requirements.

Mitigation:

- Use `docs/VIDEO_OUTLINE.md` as a strict script.
- Record in sections.
- Cut architecture explanation if the live demo runs long.

## Risk: Coding Agent Bonus Evidence Is Weak

Impact: The project may miss up to 2 bonus points.

Mitigation:

- Keep README coding agent section.
- Keep `evidence/codex-agent-usage.md`.
- Show the section briefly in the video.
- Mention Codex generated artifacts are integrated into the runnable MVP and submission docs.
