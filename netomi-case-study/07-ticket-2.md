---
layout: presentation-slide
title: Netomi case study ticket 2
permalink: /netomi-case-study/07-ticket-2/
presentation_title: Netomi technical writer case study
slide_title: "Applying the model: ticket 2"
slide_number: 7
total_slides: 13
prev_url: /netomi-case-study/06-ticket-1/
next_url: /netomi-case-study/08-ticket-3/
speaker_notes:
  - Now on ticket 2, the key variable is rollout visibility.
  - Proposed rollout scope tags from engineering make this triage decision faster and more consistent.
  - I classify this as medium risk because user impact depends on rollout visibility.
  - I publish what users need to act now: what changed and where they can find it.
  - I include explicit rollout caveat language so users are not confused if the setting is not yet visible.
  - I defer screenshots until the UI and access window are stable.
---

```md
# Release Notes: Notification Toggle for Failed Jobs

**Date:** 2026-03-25
**Version:** Platform v2026.03

## Summary
You can now control email notifications for failed jobs directly from Settings using a simple toggle. This feature is currently available behind a feature flag.

## What’s New

### New Features
- **Notification Toggle** – Added a toggle in Settings → Notifications to enable or disable email alerts when background jobs fail.
  This gives you more control over notification preferences and helps reduce alert fatigue.

## How to Update / Get Started
- The feature is behind a feature flag. Contact your Netomi account manager or support to enable it for your workspace.
- Once enabled, go to **Settings > Notifications** to configure the toggle.

## Feedback & Questions
Let us know how this toggle works for your team! Share feedback at support@netomi.com or in the customer portal.

---
*Previous releases are available in our [changelog archive](link).*
```
