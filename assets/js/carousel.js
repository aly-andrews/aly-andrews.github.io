// Video Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.video-carousel');
  const slides = document.querySelectorAll('.video-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  if (!carousel || slides.length === 0) return;
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // Function to show a specific slide
  function showSlide(index) {
    // Pause all videos in current slide
    slides[currentSlide].querySelectorAll('video').forEach(video => {
      video.pause();
    });
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    if (slides[index]) {
      slides[index].classList.add('active');
    }
    if (dots[index]) {
      dots[index].classList.add('active');
    }
    
    currentSlide = index;
  }
  
  // Function to go to next slide
  function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
  }
  
  // Function to go to previous slide
  function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
  }
  
  // Event listeners for buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });
  
  // Auto-play carousel (optional - uncomment to enable)
  // setInterval(nextSlide, 5000);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });
});
