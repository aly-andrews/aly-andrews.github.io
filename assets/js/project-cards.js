// Project Card Click Handlers and Video Modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('modalVideoPlayer');
  const closeBtn = document.querySelector('.video-modal-close');
  const overlay = document.querySelector('.video-modal-overlay');

  if (!modal || !videoPlayer) return;

  // Handle clicks on project cards with data-type attribute
  document.querySelectorAll('.project-card[data-type]').forEach(card => {
    card.addEventListener('click', function(e) {
      const type = card.getAttribute('data-type');

      if (type === 'video') {
        const videoSrc = card.getAttribute('data-video-src');
        if (videoSrc) {
          e.preventDefault();
          openVideoModal(videoSrc);
        }
      } else if (type === 'doc') {
        const targetUrl = card.getAttribute('data-url');
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      }
    });
  });

  // Open video modal
  function openVideoModal(src) {
    videoPlayer.src = src;
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-modal', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    videoPlayer.play().catch(err => {
      console.warn('Video autoplay prevented:', err);
    });
  }

  // Close video modal
  function closeVideoModal() {
    videoPlayer.pause();
    videoPlayer.src = ''; // Clear video source
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-modal', 'false');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }

  // Overlay click
  if (overlay) {
    overlay.addEventListener('click', closeVideoModal);
  }

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeVideoModal();
    }
  });

  // Prevent modal container clicks from closing modal
  const modalContainer = document.querySelector('.video-modal-container');
  if (modalContainer) {
    modalContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});
