---
layout: presentation-slide
title: Netomi case study triage decision model
permalink: /netomi-case-study/04-triage-in-practice/
presentation_title: Netomi technical writer case study
slide_title: Triage in practice
slide_number: 4
total_slides: 13
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

<div class="work-section-header presentation-visual-stack">
  <div class="work-image-large">
    <img
      src="{{ '/assets/images/triage-ticket-example.png' | relative_url }}"
      alt="Example release ticket showing engineer tags and impact labels"
      loading="lazy"
    />
  </div>
  <div class="work-section-intro">
    <ul>
      <li>Engineer tags</li>
      <li>Triage criteria</li>
      <li>Decision labels</li>
    </ul>
  </div>
</div>
