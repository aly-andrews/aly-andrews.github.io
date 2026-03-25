---
layout: presentation-slide
title: Netomi case study triage decision model
permalink: /netomi-case-study/04-triage-in-practice/
presentation_title: Netomi technical writer case study
slide_title: Triage decision model
slide_number: 4
total_slides: 14
prev_url: /netomi-case-study/03-decision-model/
next_url: /netomi-case-study/05-first-draft-readiness/
speaker_notes:
 - The tags engineers apply act as a signal to the writers for ticket accuity. 
 - Writers assess user impact, external content visibility like internal or external, support debt risk and business risk. 
  - Some example tags engineers could add include Customer facing versus Internal facing - with customer facing being higher accuity. 
  - Other examples include Behavior change versus Cosmetic only, with behaviour being prioritized. 
  - Or Global rollout versus Feature flag rollout - signalling how wide the user audience spans. 

  - Today this triage process can be done manually. In the future, when there are enough Jira tickets labelled with the defining tags, we can create a set of rules to train the LLM system to triage for us. Stuctured content now is training data later. 
  
- The rules for triaging tickets do not change, only how fast we apply them. 
- Next I cover first draft readiness. That is where high acuity items move into automated first draft generation and everything else is queued in the right funnel. 

---

<div class="work-section-header">
  <div class="work-image-large">
    <div class="image-placeholder">
      <p>Triage workflow screenshot placeholder</p>
      <p class="placeholder-hint">Add screenshot of your GitHub/Jira ticket with tags to show how triage decisions are made quickly</p>
    </div>
  </div>
  <div class="work-section-intro">
    <p><strong>Decision model:</strong> how each ticket is labeled for publish now, defer or internal only.</p>
  </div>
</div>

<h3>Triage criteria</h3>
<ul>
  <li>How many users are affected and how severe the disruption is</li>
  <li>Internal versus external visibility and rollout scope</li>
  <li>Support debt risk and likely volume of support contacts</li>
  <li>Business risk including trust impact and operational cost</li>
  <li>Known unknowns that require follow up before final publish</li>
</ul>

<h3>Decision labels</h3>
<ul>
  <li><strong>High:</strong> Publish now + same cycle docs update</li>
  <li><strong>Medium:</strong> Publish now + targeted follow up</li>
  <li><strong>Low/internal:</strong> Internal note unless user impact appears</li>
</ul>

<h3>Example engineer tags (higher acuity at a glance)</h3>
<ul>
  <li><strong>Customer facing</strong> versus <strong>Internal facing</strong> — customer facing is higher acuity by default</li>
  <li><strong>Behavior change</strong> versus <strong>Cosmetic only</strong> — behavior change ranks higher for docs and release notes</li>
  <li><strong>High support risk</strong> versus <strong>Low support risk</strong> — prioritizes what will drive contacts</li>
  <li><strong>Global rollout</strong> versus <strong>Feature flag</strong> — visibility and caveat language differ</li>
</ul>

<h3>Rules and automation goal</h3>
<p>Triage rules are defined once. They read these tags and sort tickets from highest acuity to lowest, then feed ordered items into first draft generation for technical writing review.</p>

<h3>Manual today versus automated later</h3>
<ul>
  <li><strong>Now:</strong> A writer applies the same triage rules manually, using tags when present and discovery when they are not.</li>
  <li><strong>Later:</strong> Jira data plus LLM or scripted rules apply the same triage logic automatically, sort the queue and produce first drafts. Writers still validate and publish.</li>
  <li>The triage rules stay the same in both cases. Only the speed and scale of application changes.</li>
</ul>
