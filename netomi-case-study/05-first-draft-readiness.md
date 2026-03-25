---
layout: presentation-slide
title: Netomi case study first draft readiness
permalink: /netomi-case-study/05-first-draft-readiness/
presentation_title: Netomi technical writer case study
slide_title: First draft readiness
slide_number: 5
total_slides: 13
prev_url: /netomi-case-study/04-triage-in-practice/
next_url: /netomi-case-study/06-ticket-1/
speaker_notes:
  - This is the next phase after triage. Engineers have added their tags. Writers have assessed tickets and applied an acuity label.
  - At this point we define minimum viable content for first draft readiness, enough to generate a publishable first pass without guessing.
  - The second part of automation runs here. The system pulls high acuity tickets only and produces a first draft of the release notes from ticket data.
  - Medium acuity and internal facing items go into their own funnels for the next pass, so we do not mix urgency or audience in one draft.
  - The draft follows a tight release note pattern we encode in prompts and templates: required fields, user impact first, plain language and explicit pending confirmations so output stays trustworthy.
  - This is not a redesign of how releases work. It is rules, automation and prompt engineering layered onto existing tickets and an existing weekly rhythm.
  - Next I will walk through the sample tickets as concrete examples of how triage and drafting decisions play out.
---

<p>Example style guide in Markdown (behind the scenes):</p>

```md
# Release Notes: [Short, Benefit-Focused Title]

**Date:** YYYY-MM-DD  
**Version:** [e.g. 2026-04 / v3.2.1 / Netomi Flow 2026-01] (optional)

## Summary
[1–2 sentence overview of the release’s main value. Example: “Users can now create advanced discount rules with conditional logic, while developers gain new API endpoints for bulk operations.”]

## What’s New

### New Features
- **[Feature Name]** – Clear description of what it does and the customer/developer benefit.  
  [Optional: Link to docs or screenshot]

- **[Another Feature]** – Description + benefit.

### Improvements
- **[Improvement Name]** – Description of the change and how it helps users.
- **[Another Improvement]** – Description + benefit.

### Bug Fixes
- **[Ticket/Issue ID]** – What was broken and is now fixed. (Who it affects / impact)
- **[Another Fix]** – Description of the fix.

## Breaking Changes & Deprecations
(Only include this section if there are any)

- **[Change Name]** – Exact impact on users/developers.  
  **Action required by:** [Date or version]  
  **Migration steps:**  
  - Step 1  
  - Step 2  
  - Link to full migration guide (if available)

- **[Deprecated Item]** is now deprecated and will be removed on [date]. Recommended replacement: [X].

## Known Issues
(Optional – only include if needed)
- Temporary limitation or known issue with workaround.

## How to Update / Get Started
- [Clear instructions, e.g. “Update your app in the Netomi Admin” or “Run `npm update your-package`”]
- [Link to full documentation or migration guide]

## Feedback & Questions
Share your thoughts in the [community forum](link) or reach out to support@yourcompany.com.

---
*Previous releases are available in our [changelog archive](link).*
```
