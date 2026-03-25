---
layout: presentation-slide
title: Netomi case study implementation rollout
permalink: /netomi-case-study/12-gradual-rollout/
presentation_title: Netomi technical writer case study
slide_title: Implementation rollout plan
slide_number: 12
total_slides: 13
prev_url: /netomi-case-study/11-high-leverage-improvement/
next_url: /netomi-case-study/13-closing/
speaker_notes:
  - If this idea is supported, here is a practical rollout plan for implementation.
  - I want this rollout to feel adoptable, not disruptive, so I sequence it in phases.
  - Phase 0 establishes a baseline and identifies the current bottlenecks in ticket quality, manual review time and release day churn.
  - Phase 1 introduces minimum Jira fields and tagging so engineering can add documentation signals with low effort.
  - Phase 2 connects Jira data retrieval to the LLM draft workflow, so weekly release note first drafts are generated in a standard format that we establish.
  - Phase 3 focuses on tuning triage thresholds, prompt rules and documentation quality checks based on real release cycle data.
  - Next, I will close with the outcomes this approach is designed to deliver.

---

<div class="slide-body">
  <p><strong>Approach:</strong> phased rollout, low disruption, measurable gains.</p>

  <h3>Phase 0 (weeks 1 to 2)</h3>
  <ul>
    <li>Review current process and capture baseline metrics</li>
    <li>Audit ticket quality and current manual documentation effort</li>
  </ul>

  <h3>Phase 1 and 2 (weeks 3 to 8)</h3>
  <ul>
    <li>Add lightweight Jira tagging and required documentation fields</li>
    <li>Connect secure Jira API retrieval to weekly LLM first draft generation</li>
    <li>Writer review remains required</li>
  </ul>

  <h3>Phase 3 (weeks 9 to 12)</h3>
  <ul>
    <li>Retros, prompt tuning and scale once stable</li>
  </ul>
</div>
