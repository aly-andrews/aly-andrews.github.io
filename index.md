---
layout: default
title: Home
permalink: /
---

<section class="site-credits">
  <div class="container">
    <p class="credits-text">This portfolio site was custom built by me using <a href="https://cursor.sh" target="_blank" rel="noopener">Cursor</a>, Jekyll, and GitHub Pages. <a href="https://github.com/aly-andrews/aly-andrews.github.io" target="_blank" rel="noopener">View source on GitHub</a></p>
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
          <img src="{{ '/assets/images/portfolio/skio.jpg' | relative_url }}" alt="Skio Documentation" class="work-image-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="image-placeholder work-placeholder" style="display: none;">
            <p>Skio Documentation</p>
            <p class="placeholder-hint">Upload to: assets/images/portfolio/skio.jpg</p>
          </div>
        </div>
        <div class="work-content">
          <h3>Getting started with Shopify</h3>
          <p class="work-subtitle">5 essential setup tasks before going live</p>
          <p>Comprehensive documentation and guides to help new merchants set up their Shopify store successfully. Step-by-step instructions covering essential configuration, settings, and best practices for launching your online store.</p>
          <a href="/work#shopify" class="work-link">View documentation →</a>
        </div>
      </div>
      
      <div class="work-features-grid">
        <div class="work-feature">
          <div class="work-image">
            <div class="image-placeholder work-placeholder">
              <p>Style Guides</p>
              <p class="placeholder-hint">Upload to: assets/images/portfolio/style-guides.jpg</p>
            </div>
          </div>
          <div class="work-content">
            <h3>Style guide development</h3>
            <p>Developed unified style guides for LLM training, reducing pre-production time from 5 days to 1</p>
            <a href="/work#style-guides" class="work-link">View style guides →</a>
          </div>
        </div>
        
        <div class="work-feature">
          <div class="work-image">
            <div class="image-placeholder work-placeholder">
              <p>Video Production</p>
              <p class="placeholder-hint">Upload to: assets/images/portfolio/video.jpg</p>
            </div>
          </div>
          <div class="work-content">
            <h3>Video production</h3>
            <p>Produced 100+ educational videos, growing YouTube channel from 40,000 to 100,000+ subscribers</p>
            <a href="/work#video" class="work-link">View video work →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="video-showcase">
  <div class="container">
    <div class="video-section-header">
      <h2 class="video-title">Watch me in action</h2>
      <p class="video-subtitle">Watch videos I created from concept to completion—researching ideas, developing concepts based on support data, writing scripts and filming. I handled editing for many of these projects, bringing complex topics to life through engaging content</p>
    </div>
    <div class="video-carousel-container">
      <div class="video-carousel">
        <div class="video-slide active">
          <div class="video-wrapper">
            <video 
              controls 
              class="video-embed"
              preload="metadata">
              <source src="{{ '/assets/videos/What is Shopify - Shopify Help Center.mp4' | relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-wrapper">
            <video 
              controls 
              class="video-embed"
              preload="metadata">
              <source src="{{ '/assets/videos/Your guide to BFCM  - Shopify Help Center.mp4' | relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-wrapper">
            <video 
              controls 
              class="video-embed"
              preload="metadata">
              <source src="{{ '/assets/videos/What is Shop - Shopify Help Center.mp4' | relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="video-slide">
          <div class="video-wrapper">
            <video 
              controls 
              class="video-embed"
              preload="metadata">
              <source src="{{ '/assets/videos/How to create store policies -  Shopify Help Center.mp4' | relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn carousel-prev" aria-label="Previous video">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="carousel-btn carousel-next" aria-label="Next video">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div class="carousel-dots">
        <button class="carousel-dot active" data-slide="0" aria-label="Go to video 1"></button>
        <button class="carousel-dot" data-slide="1" aria-label="Go to video 2"></button>
        <button class="carousel-dot" data-slide="2" aria-label="Go to video 3"></button>
        <button class="carousel-dot" data-slide="3" aria-label="Go to video 4"></button>
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
        <h3>Team leadership</h3>
        <p>Building and managing teams, creating onboarding frameworks, and establishing quality standards</p>
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
