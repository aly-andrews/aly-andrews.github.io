---
layout: default
title: Home
permalink: /
---

<section class="site-credits">
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
      <p class="hero-description">Expert Technical Writer and Content Creator. Using systematic approach to make complexity clear, from Shopify Academy to video production. I create scalable frameworks that empower users to succeed.</p>
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
        <div class="portfolio-card-image">
          <img src="https://img.youtube.com/vi/dCyQ9-CiMjo/maxresdefault.jpg" alt="Getting started on Shopify webinar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="portfolio-card-image-placeholder" style="display:none;">
            <p>Shopify documentation</p>
          </div>
        </div>
        <div class="portfolio-card-body">
          <div class="portfolio-card-tags">
            <span class="portfolio-card-tag tag-technical">Instructional Design</span>
            <span class="portfolio-card-tag tag-systems">Documentation</span>
          </div>
          <h3>Getting started on Shopify</h3>
          <p>Instructional design project: documentation and guides to help new merchants set up their Shopify store. Includes project plan, learner profiles and supporting resources.</p>
          <p class="portfolio-card-link">View project →</p>
        </div>
      </a>

      <a href="{{ '/portfolio#technical-writing' | relative_url }}" class="portfolio-card-item">
        <div class="portfolio-card-image">
          <img src="{{ '/assets/images/youtube-plaque.png' | relative_url }}" alt="Technical writing and documentation samples" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="portfolio-card-image-placeholder" style="display:none;">
            <p>Technical writing</p>
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
        <div class="portfolio-card-image">
          <img src="{{ '/assets/images/youtube-plaque.png' | relative_url }}" alt="YouTube Silver Plaque for 100,000 subscribers" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="portfolio-card-image-placeholder" style="display:none;">
            <p>Video production</p>
          </div>
        </div>
        <div class="portfolio-card-body">
          <div class="portfolio-card-tags">
            <span class="portfolio-card-tag tag-video">Video Production</span>
            <span class="portfolio-card-tag tag-creative">YouTube</span>
          </div>
          <h3>Video production</h3>
          <p>Independently grew Shopify Help Center YouTube channel to over 100,000 subscribers. Improved YouTube SEO ranking from C+ to A- in Google search results.</p>
          <p class="portfolio-card-link">Watch videos →</p>
        </div>
      </a>

    </div>
  </div>
</section>

<section class="youtube-milestone">
  <div class="youtube-milestone-inner">
    <div class="youtube-milestone-text">
      <h2>Shopify Help Center YouTube Channel: From C+ to A- and over 100k Subscribers</h2>
      <p>I grew the channel independently — writing scripts, producing and hosting videos, optimizing SEO, and tracking learning outcomes. The Silver Plaque followed.</p>
    </div>
    <div class="youtube-milestone-plaque">
      <img src="{{ '/assets/images/youtube-plaque.png' | relative_url }}" alt="YouTube Silver Play Button — 100,000 subscribers">
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

<div class="creative-bridge">
  <div class="creative-bridge-inner">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Camera body -->
      <rect x="6" y="16" width="24" height="18" rx="3" stroke="#D4AF37" stroke-width="1.8" fill="none"/>
      <!-- Camera lens -->
      <circle cx="18" cy="25" r="5" stroke="#D4AF37" stroke-width="1.8" fill="none"/>
      <circle cx="18" cy="25" r="2" stroke="#D4AF37" stroke-width="1.2" fill="none"/>
      <!-- Camera viewfinder bump -->
      <rect x="14" y="12" width="8" height="4" rx="1.5" stroke="#D4AF37" stroke-width="1.5" fill="none"/>
      <!-- Pencil body (diagonal, overlapping) -->
      <line x1="28" y1="10" x2="44" y2="36" stroke="rgba(233,30,99,0.55)" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="10" x2="46" y2="36" stroke="rgba(233,30,99,0.55)" stroke-width="2" stroke-linecap="round"/>
      <!-- Pencil tip -->
      <polygon points="37,33 44,36 40,38" fill="rgba(233,30,99,0.55)"/>
      <!-- Pencil eraser end -->
      <line x1="28" y1="10" x2="30" y2="10" stroke="#D4AF37" stroke-width="3" stroke-linecap="round"/>
    </svg>
    <span class="creative-bridge-text">"Systems Thinking Meets Creative Expression."</span>
  </div>
</div>

<section class="passion-projects-home" id="passion-projects">
  <div class="container">
    <h2 class="section-title">Passion projects</h2>
    <p class="section-subtitle">Photography is one of my creative outlets — and a demonstration of how I apply systems thinking to everything. What started during the pandemic grew into a business with regular clients and sold-out mini sessions.</p>
    <div class="passion-projects-photos">
      <img src="{{ '/assets/images/photography/1.jpg' | relative_url }}" alt="Portrait photography by Aly Anne Photography">
      <img src="{{ '/assets/images/photography/3.jpg' | relative_url }}" alt="Family photography session">
      <img src="{{ '/assets/images/photography/5.jpg' | relative_url }}" alt="Outdoor portrait photography">
      <img src="{{ '/assets/images/photography/7.png' | relative_url }}" alt="Painterly portrait collection">
      <img src="{{ '/assets/images/photography/9.jpg' | relative_url }}" alt="Self-portrait photography">
    </div>
    <div style="margin-top: 1.5rem;">
      <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-primary">View full portfolio →</a>
    </div>
  </div>
</section>
