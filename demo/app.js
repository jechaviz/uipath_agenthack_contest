const steps = [
  {
    id: "intake",
    actor: "Agent",
    title: "Normalize incident intake",
    note: "Classifies alert, links PagerDuty, Jira, Datadog, and current deployment.",
    output: {
      confidence: 72,
      hypothesis: "Checkout API error spike started after deployment checkout-api@8f31c9.",
      recommendation: "Collect deploy diff, error traces, and customer impact metrics."
    }
  },
  {
    id: "evidence",
    actor: "Robot/API",
    title: "Collect evidence receipts",
    note: "Captures log snippets, metric windows, deployment metadata, and screenshot references.",
    output: {
      confidence: 81,
      hypothesis: "Payment-adapter timeout rate increased from 0.4% to 8.7%.",
      recommendation: "Compare payment-adapter dependency changes against the last release."
    }
  },
  {
    id: "analysis",
    actor: "Coded Agent",
    title: "Rank root-cause hypotheses",
    note: "Scores hypotheses against evidence and selects a reversible runbook path.",
    output: {
      confidence: 88,
      hypothesis: "New retry policy saturates payment-adapter threads under peak checkout load.",
      recommendation: "Rollback feature flag checkout.retryPolicy.v2 and observe 5xx rate for 10 minutes."
    }
  },
  {
    id: "approval",
    actor: "Human",
    title: "Approve remediation gate",
    note: "Maestro pauses because rollback changes production behavior and customer communications.",
    gate: true,
    output: {
      confidence: 88,
      hypothesis: "Rollback is low risk and reversible, but requires incident commander approval.",
      recommendation: "Approve rollback, then publish a brief status update."
    }
  },
  {
    id: "execute",
    actor: "Robot/API",
    title: "Execute approved runbook",
    note: "Runs feature flag rollback, posts Slack/Teams update, and monitors recovery metrics.",
    output: {
      confidence: 94,
      hypothesis: "Rollback completed and 5xx rate is returning to baseline.",
      recommendation: "Keep monitoring until recovery threshold holds for 10 minutes."
    }
  },
  {
    id: "close",
    actor: "Agent",
    title: "Close with postmortem packet",
    note: "Generates timeline, RCA draft, evidence receipt, and follow-up action items.",
    output: {
      confidence: 96,
      hypothesis: "Incident mitigated. Root cause is linked to unsafe retry policy rollout.",
      recommendation: "Create guardrail test for retry saturation before future production rollout."
    }
  }
];

const receipt = {
  case_id: "INC-2026-0529-API",
  service: "Checkout API",
  severity: "SEV-2",
  track: "UiPath Maestro Case",
  orchestration: "UiPath Maestro Case with Agent Builder, API Workflows, Robots, Coded Agent, and Human Tasks",
  status: "not_started",
  approvals: [],
  evidence: [],
  timeline: []
};

let currentIndex = -1;
let blockedForApproval = false;
let runInProgress = false;

const timeline = document.querySelector("#timeline");
const runButton = document.querySelector("#run-case");
const approveButton = document.querySelector("#approve-action");
const exportButton = document.querySelector("#export-evidence");
const resetButton = document.querySelector("#reset-case");
const caseState = document.querySelector("#case-state");
const caseDot = document.querySelector("#case-state-dot");
const confidencePill = document.querySelector("#confidence-pill");
const hypothesis = document.querySelector("#hypothesis");
const recommendation = document.querySelector("#recommendation");
const humanGate = document.querySelector("#human-gate");
const receiptPreview = document.querySelector("#receipt-preview");

function renderTimeline() {
  timeline.innerHTML = "";
  steps.forEach((step, index) => {
    const status = statusFor(index);
    const item = document.createElement("li");
    item.className = "timeline-step";
    item.innerHTML = `
      <span class="actor">${step.actor}</span>
      <span>
        <span class="step-title">${step.title}</span>
        <p class="step-note">${step.note}</p>
      </span>
      <span class="badge ${status}">${status}</span>
    `;
    timeline.appendChild(item);
  });
}

function statusFor(index) {
  if (blockedForApproval && index === currentIndex) return "blocked";
  if (index < currentIndex) return "done";
  if (index === currentIndex) return "running";
  return "pending";
}

function setState(label, stateClass) {
  caseState.textContent = label;
  caseDot.className = `state-dot ${stateClass || ""}`.trim();
}

function updateOutput(step) {
  const output = step?.output || {};
  confidencePill.textContent = `${output.confidence || 0}%`;
  hypothesis.textContent = output.hypothesis || "Waiting for evidence.";
  recommendation.textContent = output.recommendation || "No action yet.";
  humanGate.textContent = step?.gate
    ? "Approval required before production rollback."
    : "No approval required for this step.";
}

function addReceiptEvent(step, status) {
  const entry = {
    at: new Date().toISOString(),
    step: step.id,
    actor: step.actor,
    title: step.title,
    status,
    confidence: step.output.confidence
  };
  receipt.timeline.push(entry);
  if (step.id === "evidence") {
    receipt.evidence.push(
      "datadog.checkout.5xx.window",
      "pagerduty.incident.link",
      "jira.deploy.change",
      "grafana.payment-adapter.pool"
    );
  }
}

function updateReceipt(status = receipt.status) {
  receipt.status = status;
  receiptPreview.textContent = JSON.stringify(receipt, null, 2);
}

async function runCase() {
  if (runInProgress || blockedForApproval) return;
  runInProgress = true;
  runButton.disabled = true;
  exportButton.disabled = true;
  setState("Running", "running");

  for (let index = currentIndex + 1; index < steps.length; index += 1) {
    currentIndex = index;
    const step = steps[index];
    updateOutput(step);
    addReceiptEvent(step, step.gate ? "waiting_for_approval" : "completed");
    renderTimeline();
    updateReceipt(step.gate ? "waiting_for_approval" : "running");
    await wait(700);

    if (step.gate) {
      blockedForApproval = true;
      approveButton.disabled = false;
      runInProgress = false;
      setState("Waiting for approval", "blocked");
      renderTimeline();
      return;
    }
  }

  runInProgress = false;
  setState("Closed", "closed");
  runButton.disabled = true;
  approveButton.disabled = true;
  exportButton.disabled = false;
  updateReceipt("closed");
  renderTimeline();
}

function approveAction() {
  if (!blockedForApproval) return;
  blockedForApproval = false;
  approveButton.disabled = true;
  receipt.approvals.push({
    at: new Date().toISOString(),
    approver_role: "Incident Commander",
    decision: "approved",
    reason: "Rollback is reversible and has a clear recovery metric."
  });
  addReceiptEvent(steps[currentIndex], "approved");
  updateReceipt("approved");
  setState("Approved", "running");
  runButton.disabled = false;
  renderTimeline();
}

function resetCase() {
  currentIndex = -1;
  blockedForApproval = false;
  runInProgress = false;
  receipt.status = "not_started";
  receipt.approvals = [];
  receipt.evidence = [];
  receipt.timeline = [];
  runButton.disabled = false;
  approveButton.disabled = true;
  exportButton.disabled = true;
  setState("Ready", "");
  updateOutput(null);
  updateReceipt("not_started");
  renderTimeline();
}

function exportEvidence() {
  const blob = new Blob([JSON.stringify(receipt, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${receipt.case_id.toLowerCase()}-evidence-receipt.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

runButton.addEventListener("click", runCase);
approveButton.addEventListener("click", approveAction);
resetButton.addEventListener("click", resetCase);
exportButton.addEventListener("click", exportEvidence);

resetCase();
