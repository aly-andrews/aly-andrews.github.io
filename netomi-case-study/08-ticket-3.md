---
layout: presentation-slide
title: Netomi case study ticket 3
permalink: /netomi-case-study/08-ticket-3/
presentation_title: Netomi technical writer case study
slide_title: "Applying the model: ticket 3"
slide_number: 8
total_slides: 14
prev_url: /netomi-case-study/07-ticket-2/
next_url: /netomi-case-study/09-standardize-flexible/
speaker_notes:
  - For ticket 3, we apply the same model to an internal engineering change.
  - Internal change tags help this route quickly to low customer impact unless reliability signals say otherwise.
  - We classify this as low customer impact based on the current ticket language.
  - We do not publish a customer facing release note unless user visible behavior is confirmed.
  - We still document this internally and verify with engineering to avoid blind spots.
  - If reliability or behavior changes in a user visible way, we immediately promote this to customer facing documentation.
---

<div class="work-section-header">
  <div class="work-image-large">
    <div class="image-placeholder">
      <p>Internal change placeholder</p>
      <p class="placeholder-hint">Add internal-only callout mockup</p>
    </div>
  </div>
  <div class="work-section-intro">
    <p><strong>Ticket:</strong> Tech: Job runner refactor</p>
    <p>I treat this as low customer impact based on current details because it is framed as internal with no functional changes.</p>
  </div>
</div>

<h3>Customer release note draft</h3>
<p>No customer facing release note at this time. This remains internal unless user visible reliability or behavior changes are confirmed.</p>

<h3>Document now versus defer</h3>
<ul>
  <li><strong>Now:</strong> Internal changelog note and support heads up</li>
  <li><strong>Now:</strong> Engineering confirmation check for user visible impact</li>
  <li><strong>Defer:</strong> Public docs unless user impact is confirmed</li>
</ul>
