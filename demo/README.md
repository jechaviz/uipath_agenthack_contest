# Demo MVP

This is the local MVP used for the Agentic Incident Ops Devpost demo.

It is intentionally dependency-light:

- `index.html` contains the app surface.
- `styles.css` defines the command-center layout.
- `app.js` simulates the UiPath Maestro Case lifecycle.

Run:

```powershell
npm run demo
```

Use the UI to:

1. Start the case.
2. Watch agent and robot steps advance.
3. Approve the remediation gate.
4. Continue execution.
5. Export the evidence receipt.

For the final video, record this local MVP first, then replace the simulated stages with live UiPath Automation Cloud clips when Labs access is available.
