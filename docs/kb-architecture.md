# Knowledge Base Architecture

A knowledge base is not a folder of articles — it is an information architecture. The difference between a KB people trust and one they abandon is structural: predictable types, consistent naming, deliberate classification, and a lifecycle that keeps content current. This page describes how I architect a knowledge base so that content is **findable, trustworthy, and scalable**.

!!! note "Background"
    This describes my approach to KB architecture, drawn from enterprise knowledge base restructuring and governance work. It is a representative model with no confidential detail.

## Article typing

Every article belongs to a defined type, and each type has an expected structure. Typing sets reader expectations and enforces consistency:

| Type | Purpose | Reader |
|---|---|---|
| **SOP** | Step-by-step operational procedure | Technicians performing a task |
| **Policy (POL)** | Rules and requirements | Anyone bound by the policy |
| **Standard (STD)** | Mandatory technical specifications | Implementers and reviewers |
| **User Guide** | End-user task instructions | Customers / end users |
| **Admin Guide** | Configuration and administration | System administrators |
| **KB Article** | Troubleshooting / reference | Support staff and self-service users |

A reader who opens an SOP knows to expect prerequisites, numbered steps, and verification — because every SOP is built the same way.

## Naming and identification

Consistent naming makes a KB navigable and migration-resilient. Identifiers encode function, subject, type, and sequence, so an article's name describes its place in the system before it's even opened. Predictable naming also enables reliable cross-referencing between articles, which is what turns a collection of pages into a connected knowledge network.

## Classification: audience and sensitivity

Every article carries two classifications that drive how it's handled:

**Audience** — *internal* versus *client-facing*. This determines tone, the level of internal detail exposed, and footer/disclaimer rules. The same underlying procedure may exist in two governed variants.

**Sensitivity** — using the **Traffic Light Protocol** (TLP:RED / AMBER / GREEN / CLEAR) to signal how widely an article may be shared. Classification is structural metadata, not a note in the body, so it can be enforced and filtered systematically.

[See the TLP explainer →](tlp.md)

## Lifecycle and currency

KB articles inherit the same lifecycle discipline as governed documents: draft, in review, published, under revision, retired. Crucially, **retirement is managed, not deletion** — superseded articles are archived and their replacements linked, so historical context and audit trails survive.

## Discoverability principles

Architecture exists to serve findability. The principles I design around:

- **Single-sourcing** — one authoritative article per topic; no duplicates to drift apart.
- **Predictable structure** — consistent typing and naming so readers learn the system once.
- **Deliberate cross-linking** — related articles connected intentionally, not randomly.
- **Metadata-driven navigation** — type, audience, and owner as filterable attributes, not buried text.

## The outcome

A well-architected KB scales without becoming chaos. New content has an obvious place. Readers find what they need without asking. And the system stays trustworthy because its structure — not heroic manual effort — keeps it consistent.
