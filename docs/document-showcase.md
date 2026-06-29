# Document Showcase

This is the part I'm most proud of. Below are real, fully styled documents — the kind of thing I publish into a live knowledge base — and they render right here on the page, exactly as they'd look once they're live. Have a scroll, or jump straight to one:

<div class="grid cards" markdown>
- [Policy](#policy) · a TLP:RED security policy
- [Multi-Team SOP](#multi-team-sop) · cross-team procedure with step ownership
- [Single-Owner SOP](#single-owner-sop) · linear procedure, one role
- [Standard](#standard) · technical spec with control mappings
- [Markdown](#markdown) · the same thinking, in lightweight docs-as-code
</div>

!!! note "Quick heads-up on these samples"
    I built all of these around a made-up company, "Meridian Managed Services." The brand and scenarios are invented so I'm not exposing anyone's real information — but the structure, the components, and the way the information is organized are exactly how I do it for real.

## What's in these documents, and why I put it there

None of the pieces in these documents are decoration. Each one earns its place by solving a specific problem for whoever's reading:

- **Quick Answer** — an answer-first summary for the person who already knows most of this and just needs to confirm one thing. They shouldn't have to read the whole document to get unstuck.
- **Before You Begin / Prerequisites** — I put the stop conditions up front so nobody gets halfway through a procedure before realizing they're missing access or a credential.
- **TLP classification** — the [Traffic Light Protocol](https://www.cisa.gov/news-events/news/traffic-light-protocol-tlp-definitions-and-usage) (the standard CISA and FIRST use) tells you how far a document can travel. The four levels are **RED** (named people only, don't pass it on), **AMBER** (your own organization and its clients, need-to-know), **GREEN** (your wider community, but nothing public), and **CLEAR** (share freely). The trick isn't slapping a label on — it's picking the *right* one. Each document below explains why it's classified the way it is, and I've used the official TLP colors on a black background, the way the standard actually specifies.
- **Document metadata & Document Control** — ID, version, owner, dates, review cadence. Every document is something I can account for, not just a file floating around.
- **Version History** — what changed, when, and who changed it. This is the backbone of keeping a knowledge base trustworthy over time.
- **Control mappings** — on the standard, I tie each requirement back to an ISO 27001 or NIST control, so the document doubles as audit evidence.
- **Confidentiality Notice** — spells out the handling rules, color-matched to the TLP level, so the classification actually means something instead of being ignored.

---

## Policy

This one's a **TLP:RED** security incident escalation policy — who gets called when something's on fire, how fast, and who's allowed to pull the trigger on containment. I deliberately made this the RED example because it's the kind of content that genuinely earns it: it lays out our response capability and includes the on-call escalation tree, so in a real org you'd keep it to named responders and leadership and nowhere else.

*Why TLP:RED — it exposes how and how fast we detect and respond, plus the escalation contacts. That's not something you circulate, even internally. RED means named recipients only, full stop.*

<iframe class="doc-embed" src="../showcase/incident-escalation-policy.html" title="Security Incident Escalation Policy (TLP:RED)" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/incident-escalation-policy.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Multi-Team SOP

A procedure that runs across three teams — Provisioning, Security Operations, and Service Desk — through a sequenced client onboarding. Every step carries a **Responsible role, Expected Time, and Success Criteria**, because the second work crosses a team boundary, you need to know exactly who owns each handoff and what "done" looks like. This is the heavier of my two SOP patterns, and that per-step detail is what keeps a multi-team process from stalling at the seams.

*Why TLP:AMBER — it references internal security tooling and how we operate, so I'd keep it inside the organization and its clients on a need-to-know basis.*

<iframe class="doc-embed" src="../showcase/endpoint-onboarding-sop.html" title="Multi-Team SOP — Managed Endpoint Onboarding" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/endpoint-onboarding-sop.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Single-Owner SOP

Same house style, but this one's done start-to-finish by a single person. Notice what I left *out*: there's no per-step ownership metadata, because when one role owns everything, that detail is just noise. Knowing when to use the lighter structure is as much a part of the job as knowing when to use the heavy one — more structure is only better when it actually pays for itself. This is the deliberate contrast to the multi-team SOP above.

*Why TLP:GREEN — it's a routine provisioning procedure with nothing sensitive in it, so it's fine to share across the wider community, just not posted publicly.*

<iframe class="doc-embed" src="../showcase/workstation-provisioning-sop.html" title="Single-Owner SOP — New Workstation Provisioning" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/workstation-provisioning-sop.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Standard

A technical standard, and the most governance-heavy document of the bunch. Each requirement gets its own ID, an evidence requirement, and a mapping to an ISO 27001 or NIST control, plus a traceability matrix at the end. This is how you turn something as mundane as "label the equipment" into requirements an auditor can actually check.

*Why TLP:AMBER — it spells out naming and addressing conventions that reveal how an environment is built, so it stays inside the organization.*

<iframe class="doc-embed" src="../showcase/network-labeling-standard.html" title="Network Equipment Labeling Standard" loading="lazy" style="width:100%;border:1px solid #d8e1ec;border-radius:12px;box-shadow:0 2px 14px rgba(20,68,63,0.10);background:#F4F8F7;"></iframe>

<a href="../showcase/network-labeling-standard.html" target="_blank" rel="noopener">Open full-screen &#8599;</a>

---

## Markdown

Everything above is polished HTML, but a lot of real documentation lives as **Markdown** — the docs-as-code format you use in Git-based workflows. (This whole portfolio is written in it.) The format is lighter, but I keep the same discipline:

!!! note "Sample — VPN Access Request (Markdown)"
    **Quick Answer:** Submit the access request form, get your manager's approval, and the Service Desk sets up VPN access within one business day.

**Prerequisites**

- An active company account in good standing
- Manager approval on file

**Procedure**

1. Submit the VPN Access Request form in the service portal.
2. The system routes it to your manager for approval.
3. Once approved, the Service Desk provisions access and enrolls your device in multi-factor authentication.
4. You get a confirmation with connection instructions.

| Field | Value |
|---|---|
| Document ID | MMS-SD-SOP-018 |
| TLP Classification | TLP:GREEN |
| Owner | Service Desk |

Whether it ends up as a styled knowledge base article or plain Markdown, the bones stay the same: quick answer, prerequisites, clear steps, controlled metadata. The format follows wherever the content needs to live — the discipline doesn't budge.
