---
layout: default
title: Home
permalink: /
---

<section class="site-credits">
  <div class="container">
    <p class="credits-text">This portfolio site was custom built by me using Cursor, Jekyll and GitHub Pages.</p>
  </div>
</section>

<section class="hero-creative">
  <div class="hero-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">Aly Andrews</h1>
    <p class="hero-description">Technical writer and content creator specializing in accessible, engaging educational content that helps people learn and succeed</p>
  </div>
  <div class="hero-photo">
    <img src="{{ '/assets/images/about/profile.jpg' | relative_url }}" alt="Aly Andrews" class="hero-profile-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="hero-photo-placeholder" style="display: none;">
      <p>Add your photo</p>
      <p class="placeholder-hint">Upload to: assets/images/about/profile.jpg</p>
    </div>
  </div>
</section>

<section class="featured-work-creative">
  <div class="container">
    <h2 class="section-title">Featured work</h2>
    <div class="work-showcase">
      <div class="work-feature large-feature">
        <div class="work-image">
          <div class="image-placeholder work-placeholder">
            <p>Shopify documentation</p>
            <p class="placeholder-hint">Visual coming soon</p>
          </div>
        </div>
        <div class="work-content">
          <h3>Getting started on Shopify</h3>
          <p class="work-subtitle">5 essential setup tasks before going live</p>
          <p>Comprehensive documentation and guides to help new merchants set up their Shopify store successfully. Step-by-step instructions covering essential configuration, settings, and best practices for launching your online store.</p>
          <a href="/portfolio#getting-started-shopify" class="work-link">View project →</a>
        </div>
      </div>
      
      <div class="work-features-grid">
        <div class="work-feature">
          <div class="work-image">
            <a href="/portfolio#video-production">
              <img src="{{ '/assets/images/youtube-plaque.png' | relative_url }}" alt="YouTube Silver Plaque for 100,000 subscribers" class="work-image-img youtube-plaque">
            </a>
          </div>
          <div class="work-content">
            <h3>Video production</h3>
            <p>Independently grew Shopify Help Center YouTube channel to over 100,000 subscribers within 2 years</p>
            <a href="/portfolio#video-production" class="work-link">View video work →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="highlights-creative">
  <div class="container">
    <h2 class="section-title">What I do</h2>
    <div class="highlights-grid">
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--accent-green), var(--accent-teal));"></div>
        <h3>Content creation</h3>
        <p>Writing articles, producing videos, and creating documentation that helps users learn and succeed</p>
      </div>
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--accent-gold), var(--accent-color));"></div>
        <h3>Process optimization</h3>
        <p>Developing AI-powered workflows and style guides that scale content creation while maintaining quality</p>
      </div>
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--accent-teal), var(--accent-green));"></div>
        <h3>Program builder</h3>
        <p>Creating onboarding frameworks, building and managing team knowledge and establishing analytical success metrics</p>
      </div>
      <div class="highlight-card creative-card">
        <div class="card-icon" style="background: linear-gradient(135deg, var(--accent-color), var(--accent-gold));"></div>
        <h3>Technical writing</h3>
        <p>Creating clear, user-focused documentation that makes complex topics accessible to all audiences</p>
      </div>
    </div>
  </div>
</section>

<section class="testimonials">
  <div class="container">
    <h2 class="section-title">What people say</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div class="testimonial-quote">
          <p>"Aly created strong, cohesive, and beautiful copy for our business. Her ability to translate complex technical concepts into accessible content is unmatched."</p>
        </div>
        <div class="testimonial-author">
          <p class="author-name">— Shopify Team</p>
          <p class="author-role">Education & Enablement</p>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-quote">
          <p>"The style guides and AI workflows Aly developed transformed our content creation process, reducing production time while maintaining exceptional quality."</p>
        </div>
        <div class="testimonial-author">
          <p class="author-name">— Content Team</p>
          <p class="author-role">Shopify Academy</p>
        </div>
      </div>
    </div>
  </div>
</section>
