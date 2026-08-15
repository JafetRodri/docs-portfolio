# Developer Documentation

User guides, installation guides, API references, tutorials, and technical writing — the product-facing side of the job.

<div class="grid cards" markdown>
- [Installation Guide](#installation-guide) · get it running
- [User Guide](#user-guide) · task-oriented, for the person using it
- [API Reference](#api-reference) · precise, complete, lookup-optimized
- [Tutorial](#tutorial) · learning-oriented, first success in ten minutes
- [Technical Writing](#technical-writing) · explaining a decision, not a procedure
</div>

!!! note "Why these look plain — and that's the point"
    The knowledge base articles in the [previous section](document-showcase.md) are richly styled, because I generate them with a tool that applies an organization's branding and governance scaffolding automatically.

    **These are deliberately not.** Developer documentation belongs in **Markdown, version-controlled in Git**, living next to the code it describes — so it can be reviewed in pull requests, versioned with releases, and published through a CI/CD pipeline. That's the docs-as-code model, and it's the format the whole developer tooling ecosystem is built around.

    Choosing the format that fits the content and its workflow — rather than applying the fanciest one everywhere — is the actual skill. A branded HTML policy makes sense for a governed knowledge base. It would be the wrong answer for an API reference that needs to ship with every release.

    This entire site is authored the same way: Markdown, in Git, auto-deployed. What you're reading *is* the demonstration.

    Samples below use a fictional product, **Meridian Pulse**, an endpoint monitoring agent. Invented for demonstration.

---

## Installation Guide

*Goal-oriented: get the reader from nothing to working, with the failure modes handled.*

### Install the Pulse Agent (Linux)

**Before you begin**

- A supported host: Ubuntu 22.04+, RHEL 8+, or Debian 12+
- `sudo` access on the target machine
- Your workspace API key (Settings → Workspace → API Keys)
- Outbound HTTPS (443) to `ingest.meridianpulse.example`

**1. Add the package repository**

```bash
curl -fsSL https://pkg.meridianpulse.example/gpg | sudo gpg --dearmor -o /usr/share/keyrings/pulse.gpg
echo "deb [signed-by=/usr/share/keyrings/pulse.gpg] https://pkg.meridianpulse.example/apt stable main" \
  | sudo tee /etc/apt/sources.list.d/pulse.list
```

**2. Install the agent**

```bash
sudo apt update && sudo apt install pulse-agent
```

**3. Register the agent with your workspace**

```bash
sudo pulse-agent register --key "$PULSE_API_KEY" --site "hq-primary"
```

Replace `hq-primary` with the site label you want this host grouped under.

**4. Start the service and enable it at boot**

```bash
sudo systemctl enable --now pulse-agent
```

**5. Verify**

```bash
pulse-agent status
```

A healthy agent reports `Status: connected` and a recent heartbeat. The host should appear in your dashboard within about 60 seconds.

**Troubleshooting**

| Symptom | Likely cause | Fix |
|---|---|---|
| `Status: unregistered` | Registration didn't complete | Re-run step 3 and confirm the API key has *Agent Enroll* scope |
| `Status: connected`, host missing from dashboard | Site label doesn't exist | Create the site, or re-register with an existing label |
| `connection refused` in logs | Egress blocked | Allow outbound 443 to `ingest.meridianpulse.example` |
| Service won't start after upgrade | Stale config schema | Run `pulse-agent config --migrate`, then restart |

**Uninstall**

```bash
sudo pulse-agent deregister
sudo apt remove --purge pulse-agent
```

Deregistering first releases the license seat. Removing the package without deregistering leaves an orphaned host record you'll have to clear from the dashboard.

---

## User Guide

*Task-oriented: organized around what the reader wants to accomplish, not around the product's menu structure.*

### Working with alert rules

An **alert rule** watches one metric on a group of hosts and notifies a channel when a threshold is crossed. Rules are evaluated every 60 seconds.

**Create a rule**

1. Go to **Alerts → Rules** and select **New rule**.
2. Choose the metric to watch (for example, `disk.used.percent`).
3. Set the scope — a site, a tag, or specific hosts. Scoping by **tag** is usually the better choice, because new hosts inherit the rule automatically instead of needing to be added by hand.
4. Set the threshold and the duration it must hold. Duration is what separates a real problem from a momentary spike.
5. Pick a notification channel and save.

**Choosing a sensible duration**

A threshold with no duration will page you for every transient blip. As a starting point:

| Metric type | Suggested duration | Reasoning |
|---|---|---|
| Disk usage | 15 minutes | Moves slowly; no value in fast alerts |
| CPU / memory | 5 minutes | Spikes are normal; sustained load isn't |
| Service down | 1 minute | You want to know immediately |
| Certificate expiry | Once daily | Time-based, not load-based |

**Muting during maintenance**

Before planned work, create a **maintenance window** (Alerts → Maintenance) scoped to the affected hosts. Muting the *rule* instead silences it everywhere, including hosts that aren't part of your maintenance — a common and expensive mistake.

**Why a rule might not fire**

- The host is inside an active maintenance window.
- The threshold was crossed but not for the full duration.
- The rule's scope doesn't match the host's current tags.
- The notification channel failed — check **Alerts → Delivery log**, which records attempts separately from rule evaluation.

---

## API Reference

*Lookup-optimized: complete, precise, skimmable. Nobody reads a reference start to finish — they land on one endpoint and need everything about it right there.*

### `GET /v1/hosts`

Returns a paginated list of hosts in the workspace.

**Authentication:** Bearer token in the `Authorization` header. Requires the `hosts:read` scope.

**Query parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `site` | string | No | — | Filter by site label. Exact match. |
| `status` | string | No | — | One of `connected`, `stale`, `unregistered`. |
| `tag` | string | No | — | Repeatable. Multiple tags are ANDed. |
| `limit` | integer | No | `50` | Results per page. Max `200`. |
| `cursor` | string | No | — | Pagination cursor from a previous response. |

**Example request**

```bash
curl -X GET "https://api.meridianpulse.example/v1/hosts?site=hq-primary&status=connected&limit=2" \
  -H "Authorization: Bearer $PULSE_API_TOKEN"
```

**Example response — `200 OK`**

```json
{
  "data": [
    {
      "id": "hst_8f2a91c4",
      "hostname": "web-01.hq.internal",
      "site": "hq-primary",
      "status": "connected",
      "agent_version": "3.4.1",
      "tags": ["production", "web"],
      "last_heartbeat": "2026-05-12T14:22:07Z"
    },
    {
      "id": "hst_1b77de30",
      "hostname": "db-01.hq.internal",
      "site": "hq-primary",
      "status": "connected",
      "agent_version": "3.4.1",
      "tags": ["production", "database"],
      "last_heartbeat": "2026-05-12T14:22:11Z"
    }
  ],
  "next_cursor": "eyJvIjoyfQ",
  "has_more": true
}
```

**Response fields**

| Field | Type | Description |
|---|---|---|
| `data[].id` | string | Immutable host identifier. Use this, not `hostname`, as a foreign key. |
| `data[].status` | string | `stale` means the agent registered but hasn't sent a heartbeat in over 5 minutes. |
| `data[].last_heartbeat` | string | ISO 8601, UTC. Null if the agent has never reported. |
| `next_cursor` | string | Pass as `cursor` to fetch the next page. Null when `has_more` is false. |

**Errors**

| Status | Code | Meaning |
|---|---|---|
| `401` | `invalid_token` | Token missing, malformed, or revoked. |
| `403` | `insufficient_scope` | Token lacks `hosts:read`. |
| `422` | `invalid_parameter` | A parameter failed validation — the response body names the field. |
| `429` | `rate_limited` | Over the limit. Retry after the `Retry-After` header. |

**Notes**

- Pagination is cursor-based, not offset-based. Cursors are opaque; don't construct them.
- Rate limit is 120 requests per minute per token.
- `hostname` is not unique across sites. Deduplicate on `id`.

---

## Tutorial

*Learning-oriented: one guaranteed path to a first success. A tutorial is not a user guide — it makes choices for the reader so they finish, rather than presenting every option.*

### Get your first alert working in 10 minutes

By the end of this tutorial you'll have an agent installed, a rule watching disk space, and a test notification in Slack. We'll use one host and one metric — you can generalize afterward.

**What you'll need:** one Linux host with `sudo`, a Pulse workspace, and permission to add a Slack app.

**Step 1 — Install the agent (3 minutes)**

Follow the [installation guide](#installation-guide) through step 5. Stop once `pulse-agent status` reports `connected`.

**Step 2 — Connect Slack (2 minutes)**

In Pulse, go to **Settings → Channels → Add channel → Slack**, authorize, and pick a channel. Use a test channel — you're about to send a deliberate alert to it.

**Step 3 — Create the rule (3 minutes)**

Go to **Alerts → Rules → New rule** and set:

- **Metric:** `disk.used.percent`
- **Scope:** your single host, by hostname
- **Condition:** above `10`
- **Duration:** 1 minute
- **Channel:** the Slack channel from step 2

A 10% threshold is deliberately low — almost any host already exceeds it, so the rule fires immediately instead of leaving you waiting to find out whether it worked. You'll fix this in step 5.

**Step 4 — Watch it fire (1 minute)**

Within about two minutes, the notification arrives in Slack. If nothing shows up, check **Alerts → Delivery log** — it distinguishes "rule never fired" from "rule fired but delivery failed," which are very different problems.

**Step 5 — Make it realistic (1 minute)**

Edit the rule: raise the threshold to `85` and the duration to `15 minutes`. Now it reflects a real disk-pressure condition rather than a guaranteed trigger.

**What you just built:** an agent reporting metrics, a scoped rule with a threshold and duration, and a working delivery path. Everything else in Pulse is a variation on these three pieces.

**Next:** scope rules by **tag** instead of hostname so new machines inherit coverage automatically — covered in the [user guide](#user-guide).

---

## Technical Writing

*Explaining a decision and its tradeoffs — the format for the "why" that procedures can't carry.*

### Why we version documentation with the product, not separately

**The problem.** Our docs used to live in a wiki with its own edit history, entirely disconnected from the product's release cycle. When a customer on version 3.2 opened the documentation, they got whatever had been written most recently — often describing 3.4 behavior. The docs weren't wrong, exactly. They were right about a version the reader wasn't running, which is worse, because it's confidently wrong.

**What we changed.** Documentation moved into the product repository. A doc change ships in the same pull request as the code change it describes, gets reviewed by the same reviewer, and is tagged with the same release. Publishing runs from CI: merge to main, docs rebuild automatically.

**What it cost.** This isn't free, and it's dishonest to pretend otherwise.

- Writers need Git fluency — branches, pull requests, resolving conflicts. That's a real learning curve for a team used to a WYSIWYG editor.
- Non-technical contributors lost the ability to fix a typo in ten seconds. Now it's a pull request.
- Review latency went up. A doc fix that used to publish instantly now waits for a reviewer.

**What it bought.** Documentation stopped drifting. The version selector genuinely reflects behavior, because docs physically cannot ship ahead of the code. Reviewers began catching undocumented changes during code review rather than after release — the highest-value change, because it moves the fix upstream of the customer. Rollbacks now include their documentation, which used to be a manual scramble.

**Would I recommend it?** For product documentation, yes — the version-drift problem is fatal and this solves it structurally rather than through diligence. For internal knowledge bases, no. Governance content is edited by people across the business who shouldn't need Git to update a policy, and it isn't tied to a release cycle in the first place. Different content, different constraints, different tool.

The mistake isn't picking either model. It's picking one and applying it everywhere.
