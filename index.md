---
layout: default
title: Home
permalink: /
---

<section class="site-credits">
  <div class="container">
    <p class="credits-text">This portfolio site was custom built by me using <a href="https://cursor.sh" target="_blank" rel="noopener">Cursor</a>, Jekyll, and GitHub Pages.</p>
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
    <p class="hero-subtitle">Senior Education Content Producer</p>
    <p class="hero-description">Creating accessible, engaging educational content that helps people learn and succeed</p>
    <div class="hero-cta">
      <a href="/work" class="btn btn-primary">View my work</a>
      <a href="/about" class="btn btn-secondary">Learn more</a>
    </div>
  </div>
</section>

<section class="video-showcase">
  <div class="container">
    <div class="video-section-header">
      <h2 class="video-title">Watch me in action</h2>
      <p class="video-subtitle">See me hosting educational content and bringing complex topics to life</p>
    </div>
    <div class="video-container">
      <div class="video-wrapper">
        <!-- 
        OPTION 1: YouTube/Vimeo Embed (Recommended)
        Replace VIDEO_ID below with your actual video ID, or paste your full embed code
        Example YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID
        Example Vimeo: https://player.vimeo.com/video/YOUR_VIDEO_ID
        -->
        <iframe 
          src="https://www.youtube.com/embed/VIDEO_ID" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="video-embed"
          style="display: none;">
        </iframe>
        
        <!-- 
        OPTION 2: Direct Video File
        Uncomment the video tag below and upload your video to assets/videos/host-video.mp4
        -->
        <!--
        <video controls class="video-player" style="display: none;">
          <source src="{{ '/assets/videos/host-video.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        -->
        
        <!-- Placeholder - will hide automatically when video is added -->
        <div class="video-placeholder">
          <div class="video-placeholder-content">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <p>Add your video here</p>
            <p class="placeholder-hint">To add a YouTube video: Replace VIDEO_ID in the iframe above with your video ID</p>
            <p class="placeholder-hint">To add a direct video: Uncomment the video tag and upload to assets/videos/host-video.mp4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="intro-visual">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-image">
        <img src="{{ '/assets/images/about/profile.jpg' | relative_url }}" alt="Aly Andrews" class="profile-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="image-placeholder" style="display: none;">
          <p>Add your photo here</p>
          <p class="placeholder-hint">Upload to: assets/images/about/profile.jpg</p>
        </div>
      </div>
      <div class="intro-content">
        <h2>Welcome</h2>
        <p>I'm a Senior Education Content Producer with 8 years of experience creating educational content at Shopify. I specialize in video production, technical writing, and developing scalable content systems that make complex information accessible.</p>
        <p>Currently pursuing a Technical Writing Graduate Certificate at Algonquin College, I'm passionate about bridging the gap between technical expertise and user understanding through clear, engaging content.</p>
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
          <h3>Skio documentation</h3>
          <p>Created comprehensive help center articles and video scripts for subscription management platform. Work included developing both written documentation and video content to help merchants understand and use subscription features effectively.</p>
          <a href="/work#skio" class="work-link">View work samples →</a>
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
