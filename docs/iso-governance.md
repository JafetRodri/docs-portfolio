# Documentation Governance (ISO-Aligned)

Documentation that isn't governed decays. Versions drift, ownership blurs, and the knowledge base fills with contradictory or stale articles that erode trust. My approach applies the discipline of **ISO 9001:2015 document control** to operational documentation, so that every controlled document has a known owner, a defined lifecycle, and a verifiable history.

!!! note "Background"
    This page describes my methodology, informed by ISO 9001:2015 Lead Implementer and Lead Auditor training. It is a representative framework, not a copy of any employer's internal procedures.

## The principle: documents as controlled assets

In a governed system, a document is not just a file — it is a **controlled asset** with attributes that must be managed throughout its life:

- A unique identifier
- A named owner accountable for accuracy
- A version and revision history
- A classification (audience and sensitivity)
- A defined review cycle
- A lifecycle state (draft, in review, published, retired)

The goal is that anyone can answer, for any document: *Is this current? Who owns it? When was it last reviewed? Who approved it?*

## Document identification and naming

A consistent identifier scheme makes documents traceable and self-describing. A representative convention encodes the owning function, the subject, the document type, and a sequence number:

```
[ORG]-[FUNCTION]-[SUBJECT]-[TYPE]-[###]
```

For example, a security-team standard operating procedure might be identified as `ORG-SEC-ACCESS-SOP-014`. The identifier travels with the document across systems, surviving migrations and re-platforming.

## The documentation lifecycle

Every controlled document moves through defined states, and transitions between states require specific actions:

| State | Meaning | Transition requires |
|---|---|---|
| **Draft** | Authoring in progress | Author completes content |
| **In Review** | Under formal review | Reviewer and approver sign-off |
| **Published** | Current and authoritative | — |
| **Under Revision** | Being updated | New draft branched from published version |
| **Retired** | Superseded or obsolete | Replacement identified; archived, not deleted |

Retired documents are archived rather than deleted, preserving the audit trail — a core ISO principle.

## Review cycles and currency

Controlled documents carry a defined review interval (commonly annual, or triggered by a change event). A governance calendar surfaces documents approaching their review date, preventing silent decay. A document that passes its review date without re-validation is flagged as **potentially stale**, signaling reduced confidence until reviewed.

## Roles and accountability

Clear separation of duties underpins governance:

- **Author** — creates and maintains content
- **Reviewer** — verifies technical accuracy and completeness
- **Approver** — authorizes publication; accountable for the document being fit for use
- **Owner** — accountable for ongoing currency over the document's life

## Why this matters

A governed documentation system is **audit-ready by default**. When an auditor — or a new team member, or a client — asks "how do you know this procedure is current and correct?", the system answers with evidence: an owner, an approval record, a review date, and a version history. That is the difference between a pile of documents and a managed knowledge asset.
