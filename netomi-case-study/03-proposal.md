---
layout: presentation-slide
enable_mermaid: true
title: Netomi case study proposal
permalink: /netomi-case-study/03-decision-model/
presentation_title: Netomi technical writer case study
slide_title: Proposal
slide_number: 3
total_slides: 13
prev_url: /netomi-case-study/02-problem/
next_url: /netomi-case-study/04-triage-in-practice/
speaker_notes:
  - So how do we improve this? How do we make weekly releases faster without losing quality.
  - I propose building an intake, triage and drafting workflow for incoming Jira release tickets.
  - Engineering adds lightweight ticket tags and core fields, then I use secure Jira API access to pull information from the segmented paramaters which would include only the last week of release updates.
  - That data feeds an LLM workflow that triages tickets and applies a label of accuity like low, medium or high. 
  - High accuity tickets are pushed to the top of the pipeline where a structured first draft is created, using Netomi release note format and styleguide. 
  - That first draft is accessible to the technical writers who act as the gatekeepers and publishing authority.
  - The goal is not to automatically publish content, but to speed up the intake to first draft process.  
  - This might sound like a big lift, but it is not a redesign. It is a few lightweight additions to an existing release process to work faster and smarter.
  -  In terms of pracitcal changes, we start small. Some new tags for engineers to add to their tickets to signal what changes are incoming. 
  - Then we the writers need to assess and triage that information. 
 


---

<div class="work-section-header">
  <div class="work-image-large proposal-flowchart-column">
    {% include netomi-proposal-flowchart.html %}
  </div>
  <div class="work-section-intro">
    <p>This is my intake, triage and first draft automation workflow for incoming release tickets:</p>
  </div>
</div>
