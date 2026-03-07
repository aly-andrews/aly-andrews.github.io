---
layout: default
title: Home
permalink: /
---

<section class="site-credits" style="height: 36px; min-height: 36px; padding: 0 1rem; display: flex; align-items: center; justify-content: center;">
  <div class="container">
    <p class="credits-text">This portfolio site was custom built by me using <a href="https://cursor.sh" target="_blank" rel="noopener">Cursor</a>, Jekyll and GitHub Pages.</p>
  </div>
</section>

<section class="hero-creative" id="home">
  <div class="hero-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </div>
  <div class="hero-grid">
    <div class="hero-photo">
      <img src="{{ '/assets/images/about/profile.jpg' | relative_url }}" alt="Aly Andrews" class="hero-profile-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="hero-photo-placeholder" style="display: none;">
        <p>Add your photo</p>
        <p class="placeholder-hint">Upload to: assets/images/about/profile.jpg</p>
      </div>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">Aly Andrews. I bridge the gap between complex systems and the people who use them.</h1>
      <p class="hero-description">Senior Education Strategist specializing in the intersection of AI-automation and scalable learning systems.</p>
      <a href="{{ '/portfolio/' | relative_url }}" class="btn-hero-cta">Explore My Work</a>
    </div>
  </div>
</section>

<section class="featured-work-creative" id="portfolio">
  <div class="container">
    <h2 class="section-title">My work</h2>
    <p class="section-subtitle">A selection of projects showcasing my content creation, technical writing and process development work.</p>

    <div class="portfolio-cards-grid">

      <a href="{{ '/portfolio#getting-started-shopify' | relative_url }}" class="portfolio-card-item">
        <div class="portfolio-card-image card-visual-program">
          <div class="portfolio-card-visual" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>
          </div>
        </div>
        <div class="portfolio-card-body">
          <div class="portfolio-card-tags">
            <span class="portfolio-card-tag tag-systems">Building programs</span>
            <span class="portfolio-card-tag tag-technical">Instructional design</span>
          </div>
          <h3>Building programs</h3>
          <p>End-to-end learning program: technical writing, storyboarding, video production and hosting, plus instructional design. Documentation and guides to help new merchants set up their store, with project plan, learner profiles and supporting resources. Created independently as a portfolio piece using only publicly available information.</p>
          <p class="portfolio-card-link">View project →</p>
        </div>
      </a>

      <a href="{{ '/portfolio#technical-writing' | relative_url }}" class="portfolio-card-item">
        <div class="portfolio-card-image card-visual-writing">
          <div class="portfolio-card-visual" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>
          </div>
        </div>
        <div class="portfolio-card-body">
          <div class="portfolio-card-tags">
            <span class="portfolio-card-tag tag-technical">Technical Writing</span>
            <span class="portfolio-card-tag tag-systems">Systems</span>
          </div>
          <h3>Technical writing</h3>
          <p>Published articles, documentation and project planning work spanning Shopify Academy, API docs and full software release documentation.</p>
          <p class="portfolio-card-link">Read samples →</p>
        </div>
      </a>

      <a href="{{ '/portfolio#video-production' | relative_url }}" class="portfolio-card-item">
        <div class="portfolio-card-image card-visual-video">
          <div class="portfolio-card-visual" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
          </div>
        </div>
        <div class="portfolio-card-body">
          <div class="portfolio-card-tags">
            <span class="portfolio-card-tag tag-video">Video Production</span>
            <span class="portfolio-card-tag tag-creative">YouTube</span>
          </div>
          <h3>Video production</h3>
          <p>Watch videos I created from concept to completion, including researching ideas, developing concepts based on support data, writing scripts, and filming. I handled editing for many of these projects and brought complex topics to life through engaging content.</p>
          <p class="portfolio-card-link">Watch videos →</p>
        </div>
      </a>

    </div>
  </div>
</section>

<section class="highlights-creative" id="services">
  <div class="container">
    <h2 class="section-title">What I do</h2>
    <div class="highlights-grid">
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--brand-mint), var(--brand-lavender));"></div>
        <h3>Content creation</h3>
        <p>Writing articles, producing videos and creating documentation that helps users learn and succeed</p>
      </div>
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--brand-gold), var(--brand-pink));"></div>
        <h3>Process optimization</h3>
        <p>Developing AI-powered workflows and style guides that scale content creation while maintaining quality</p>
      </div>
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--brand-lavender), var(--brand-mint));"></div>
        <h3>Program builder</h3>
        <p>Creating onboarding frameworks, building and managing team knowledge and establishing analytical success metrics</p>
      </div>
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--brand-pink), var(--brand-gold));"></div>
        <h3>Technical writing</h3>
        <p>Creating clear, user-focused documentation that makes complex topics accessible to all audiences</p>
      </div>
    </div>
  </div>
</section>

<section class="how-i-work-section" id="how-i-work">
  <div class="container how-i-work-editorial">
    <div class="how-i-work-editorial-side">
      <h2 class="section-title">How I work</h2>
      <blockquote class="how-i-work-quote">
        <p>People are not afraid to tell you what they want, what works and what doesn't. I firmly believe we should take the time to listen.</p>
      </blockquote>
    </div>
    <div class="how-i-work-editorial-main">
      <article class="how-i-work-editorial-item" data-step="01">
        <h3>Start with the user</h3>
        <p>I care about who will read or watch my content, what they need to do and whether what I'm shipping actually helps them solve problems. Audience and task come first — format follows.</p>
      </article>
      <article class="how-i-work-editorial-item" data-step="02">
        <h3>Write with clarity</h3>
        <p>There's something deeply satisfying about taking an abstract idea and turning it into something tangible — a help center doc, an Academy course, a style guide, a how-to video. Complex topics made accessible.</p>
      </article>
      <article class="how-i-work-editorial-item" data-step="03">
        <h3>Build with intention</h3>
        <p>It's not enough to ship content and hope it works. I track retention, drop-off points, support ticket volume and engagement signals — and I use what I learn to build exactly what users are asking for.</p>
      </article>
    </div>
  </div>
</section>

<section class="testimonials">
  <div class="container">
    <h2 class="section-title">What people say</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div class="testimonial-quote-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
          </svg>
        </div>
        <div class="testimonial-quote">
          <p>"Her Technical Writing expertise was critical to establishing quality criteria and evaluation frameworks that determined when AI-generated content met professional publishing standards."</p>
        </div>
        <div class="testimonial-author">
          <a href="https://www.linkedin.com/in/jordanwille/" target="_blank" rel="noopener" class="author-link">
            <p class="author-name">— Jordan Wille</p>
            <p class="author-role">Senior Program Manager, Operations · Shopify · LinkedIn →</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
