---
layout: presentation-slide
title: Netomi case study assumptions, change and tradeoffs
permalink: /netomi-case-study/10-assumptions-tradeoffs/
presentation_title: Netomi technical writer case study
slide_title: Assumptions, change resistance and tradeoffs
slide_number: 10
total_slides: 14
prev_url: /netomi-case-study/09-standardize-flexible/
next_url: /netomi-case-study/11-high-leverage-improvement/
speaker_notes:
  - Before I move into the improvement recommendation, I want to make my assumptions and tradeoffs explicit.
  - I assume people can be resistant to change. For engineers we would ask to adopt new workflows, I need to show why this helps them, not only documentation.
  - For engineering, the benefit is fewer meetings and fewer DMs from writers chasing missing context because the right fields and tags are already on the ticket. When we standardize what we need every time, there is less back and forth about why someone is asking for it.
  - I make assumptions explicit so you can clearly see my decision boundaries.
  - My first questions focus on user visibility, behavior change and support impact.
  - On tradeoffs, reliable guidance now and complete detail in fast follow updates still applies for end users.
  - There is more work upfront to gather data, train models and implement workflows. This is not an overnight change. It is gradual. Over time it saves time on a process that repeats every single week, so writers can spend effort on higher impact problems instead of repetitive synthesis.
  - I do not present uncertainty as certainty to appear complete.
  - Next, I will show one high leverage improvement that can be implemented with low process overhead.
---

<h3>Assumptions</h3>
<p>Jira is the primary signal source. Weekly cadence is fixed. Some tickets will stay incomplete near release.</p>
<p>People can be resistant to change. Anyone we ask to adopt new behavior needs a clear answer to what is in it for them.</p>

<h3>Change and engineering benefit</h3>
<p>For engineers, lightweight tags and fields mean <strong>fewer meetings</strong> and <strong>fewer DMs from writers</strong> chasing information because context is already on the ticket. When we <strong>standardize what we need every time</strong>, there is less friction about why someone is asking for it.</p>

<h3>Prioritized questions</h3>
<p>What is user visible now? What behavior changed? What will drive support burden?</p>

<h3>Tradeoffs</h3>
<p><strong>Release communication:</strong> reliable guidance now, complete detail in fast follow updates.</p>
<p><strong>Implementation:</strong> more effort upfront to gather training data and stand up workflows. Not an overnight switch — it is <strong>gradual</strong>. The payoff is less weekly toil on a repeating process, so writers can focus on higher impact work.</p>
