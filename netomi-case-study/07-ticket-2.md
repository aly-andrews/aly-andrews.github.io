---
layout: presentation-slide
title: Netomi case study ticket 2
permalink: /netomi-case-study/07-ticket-2/
presentation_title: Netomi technical writer case study
slide_title: "Applying the model: ticket 2"
slide_number: 7
total_slides: 14
prev_url: /netomi-case-study/06-ticket-1/
next_url: /netomi-case-study/08-ticket-3/
speaker_notes:
  - Now on ticket 2, the key variable is rollout visibility.
  - Proposed rollout scope tags from engineering make this triage decision faster and more consistent.
  - We classify this as medium risk because user impact depends on rollout visibility.
  - We publish what users need to act now: what changed and where they can find it.
  - We include explicit rollout caveat language so users are not confused if the setting is not yet visible.
  - We defer screenshots until the UI and access window are stable.
---

<div class="work-section-header">
  <div class="work-image-large">
    <div class="image-placeholder">
      <p>Settings UI placeholder</p>
      <p class="placeholder-hint">Add screenshot placeholder for failed job email toggle</p>
    </div>
  </div>
  <div class="work-section-intro">
    <p><strong>Ticket:</strong> Notification toggle (feature flagged)</p>
    <p>I treat this as medium risk with rollout sensitivity because visibility differs during rollout.</p>
  </div>
</div>

<h3>Customer release note draft</h3>
<p>A new setting lets you control email notifications for failed jobs. This feature is rolling out gradually and may not yet be visible in all accounts.</p>

<h3>Document now versus defer</h3>
<ul>
  <li><strong>Now:</strong> What the toggle does and rollout caveat language</li>
  <li><strong>Now:</strong> Targeted docs update for Settings section</li>
  <li><strong>Defer:</strong> Screenshots and edge case behavior until stable</li>
</ul>
