# How I Work

Here's how I actually think about documentation. My resume covers what I've done; this page is more about the *how* and the *why* behind it — basically me walking you through my approach.

## Documentation governance

I treat documents as controlled assets, not just files sitting in a folder. That sounds formal, but the idea is simple: every document should have an owner, an ID, a version history, a classification, and a review date. So when someone asks "is this still accurate, and who's responsible for it?", the system answers instantly instead of leaving people guessing. I lean on ISO 9001 document-control principles here, since that's the discipline I've put the most into — and the nice side effect is that a system built this way is audit-ready by default.

## Knowledge base architecture

A knowledge base is an information architecture, not a pile of articles. When I design one, I'm thinking about a few things at once: every article type should have a predictable shape, names should tell you where an article fits, classification (audience plus sensitivity) should be built in rather than bolted on, and there should be exactly one authoritative article per topic. That last one matters more than it sounds — the moment you have two articles saying slightly different things, people stop trusting both. Good structure, not heroic manual effort, is what keeps a KB trustworthy as it grows.

## Classification with TLP

I use the Traffic Light Protocol to make sharing boundaries obvious — RED, AMBER, GREEN, CLEAR. The whole thing only works because everyone agrees on what the labels mean ahead of time, so a single tag tells you exactly who's allowed to see something. The part people get wrong is treating classification as an afterthought. I treat it as real, enforceable metadata, because a label nobody acts on isn't protecting anything.

## Process modeling

I map out workflows to find the handoffs, decision points, and bottlenecks that prose tends to hide. I like authoring diagrams as text with Mermaid rather than dragging boxes around in a drawing tool, because then the diagram is version-controlled and lives right next to the documentation it describes. Here's a document review and approval flow as an example:

```mermaid
flowchart TD
    A([Author drafts]) --> B{Content complete?}
    B -->|No| A
    B -->|Yes| C[Submit for review]
    C --> D{Technical review}
    D -->|Changes| E[Author revises]
    E --> C
    D -->|Approved| F{Final approval}
    F -->|Rejected| E
    F -->|Approved| G[Publish]
```

The feedback loops are the whole point — they make it obvious that a rejection at either gate sends the work back to the author, which is exactly the kind of detail a paragraph would gloss over.

## Migrations and consolidation

When I run a documentation migration, I treat it as a consolidation and governance project, not a file transfer. The move that makes or breaks it is designing the target structure — types, naming, classification, lifecycle — *before* anything moves. Get that right and the new home is clean and governed from day one. Skip it and you've just copied four systems' worth of mess into a fifth. (There's a full write-up of one of these in the [Case Study](case-study.md).)

## Technical & API documentation

It's not all governed operational docs. I also write developer-facing material — endpoint references, request and response examples, structured API docs — and I hold that content to the same bar for clarity and consistency.
