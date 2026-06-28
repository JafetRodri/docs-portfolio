# Document Showcase

This is the work. Below are fully styled, client-grade documents — the kind of published output I produce in a live knowledge base — each rendering **inline** exactly as it appears once published. Scroll through them, or jump to one:

<div class="grid cards" markdown>
- [Policy](#policy) · governance rules and decision rights
- [Multi-Team SOP](#multi-team-sop) · cross-team procedure with step ownership
- [Single-Owner SOP](#single-owner-sop) · linear procedure, one role
- [Standard](#standard) · technical spec with control mappings
- [Markdown](#markdown) · the same rigor in lightweight docs-as-code
</div>

!!! note "About these samples"
    Every styled document is built on a **fictional organization** ("Meridian Managed Services"). The brand, scenarios, and content are invented — what's representative is the structure, component design, and information architecture. No real client or company information appears.

## What's inside these documents — and why

Each document is built from deliberate components. These aren't decoration; each one solves a specific problem for the reader:

- **Quick Answer** — an answer-first summary for the *impatient expert*: the technician who already knows most of it and needs to confirm one thing without reading the whole document.
- **Before You Begin / Prerequisites** — front-loads the stop conditions, so no one gets halfway through and discovers they lack access or a credential.
- **TLP classification** — the Traffic Light Protocol (RED / AMBER / GREEN / CLEAR) as a metadata pill, making the sharing boundary unambiguous at a glance.
- **Document metadata & Document Control** — ID, version, owner, dates, review frequency: every document is a *controlled asset* with a known history.
- **Version History** — a verifiable record of what changed, when, and by whom — the backbone of document governance.
- **ISO / control mappings** — requirements traced to ISO 27001 and NIST CSF controls, turning a document into audit evidence.
- **Confidentiality Notice** — explicit handling rules, so classification is enforced rather than assumed.

---

## Policy

A governance policy defining approval authority, escalation, exception handling, and closure across client engagements — with a definitions table, roles and decision rights, and a workflow strip. Policies set the *rules*; note how the structure makes each rule and its owner unambiguous.

<iframe class="doc-embed" src="../showcase/engagement-governance-policy.html" title="Client Engagement Governance Policy" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/engagement-governance-policy.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Multi-Team SOP

A Standard Operating Procedure coordinating three teams through a sequenced onboarding. Each step carries **Responsible role, Expected Time, and Success Criteria** — because when work crosses team boundaries, every handoff needs an unambiguous owner and a defined completion gate. This is the heavier of the two SOP patterns, and the metadata is what makes a cross-team procedure run without stalling.

<iframe class="doc-embed" src="../showcase/endpoint-onboarding-sop.html" title="Multi-Team SOP — Managed Endpoint Onboarding" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/endpoint-onboarding-sop.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Single-Owner SOP

The same house style applied to a procedure performed end-to-end by **one role**. Notice what's deliberately *absent*: no per-step ownership metadata, because a single owner makes it unnecessary. Choosing the lighter structure when accountability isn't distributed is part of the craft — more structure is only better when it earns its place. This is the contrast to the multi-team SOP above.

<iframe class="doc-embed" src="../showcase/workstation-provisioning-sop.html" title="Single-Owner SOP — New Workstation Provisioning" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/workstation-provisioning-sop.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Standard

A technical standard defining mandatory specifications, each requirement carrying an ID, evidence requirement, and a mapping to an ISO 27001 or NIST CSF control — plus a control traceability matrix. This is the most governance-grade document type: it turns "label the equipment" into auditable, traceable requirements.

<iframe class="doc-embed" src="../showcase/network-labeling-standard.html" title="Network Equipment Labeling Standard" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/network-labeling-standard.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Markdown

The styled documents above are one format. Modern documentation also lives as **Markdown** — the docs-as-code format used in Git-based workflows (this entire portfolio is authored in it). The same structural discipline applies in a lightweight, version-controllable form:

!!! note "Sample — VPN Access Request (Markdown)"
    **Quick Answer:** Submit the access request form, obtain manager approval, and the Service Desk provisions VPN access within one business day.

**Prerequisites**

- An active company account in good standing
- Manager approval on file

**Procedure**

1. Submit the VPN Access Request form in the service portal.
2. The system routes the request to your manager for approval.
3. On approval, the Service Desk provisions access and enrolls your device in multi-factor authentication.
4. You receive confirmation with connection instructions.

| Field | Value |
|---|---|
| Document ID | MMS-SD-SOP-018 |
| TLP Classification | TLP:GREEN |
| Owner | Service Desk |

The point: whether rendered as a styled knowledge base article or as plain Markdown, the *structure* — quick answer, prerequisites, numbered steps, controlled metadata — stays consistent. Format follows the platform; the discipline doesn't change.
