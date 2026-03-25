---
layout: presentation-slide
title: Netomi case study first draft readiness
permalink: /netomi-case-study/05-first-draft-readiness/
presentation_title: Netomi technical writer case study
slide_title: First draft readiness and automation
slide_number: 5
total_slides: 14
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

<p><strong>Where we are:</strong> tags are on the ticket, writers have set acuity. Goal is a first draft ready for review and publish.</p>

<h3>Minimum viable content for first draft readiness</h3>
<ul>
  <li>What changed and who is affected</li>
  <li>Customer facing versus internal facing signal</li>
  <li>Rollout scope or visibility caveats when relevant</li>
  <li>Known unknowns called out, not hidden</li>
  <li>Acuity label applied so the system knows queue order</li>
</ul>

<h3>Automation at this stage</h3>
<ul>
  <li><strong>High acuity first:</strong> first draft generation runs on high acuity customer facing items for the weekly release window.</li>
  <li><strong>Other funnels:</strong> internal facing and medium acuity are queued separately so drafts stay scoped and review stays predictable.</li>
  <li><strong>Style layer:</strong> prompts and templates enforce required fields, user impact first, plain language, no jargon and explicit pending confirmations.</li>
</ul>

<p><strong>Framing:</strong> not a new system from scratch. Existing process plus rules, API fed ticket data and prompt engineering so interpretation stays consistent week to week.</p>
