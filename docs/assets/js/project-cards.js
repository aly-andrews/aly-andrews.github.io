// Project Card Click Handlers, Video Modal and Skillset Popup
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('modalVideoPlayer');
  const closeBtn = document.querySelector('.video-modal-close');
  const overlay = document.querySelector('.video-modal-overlay');

  const skillsetPopup = document.getElementById('skillsetPopup');
  const skillsetPopupTitle = document.getElementById('skillset-popup-title');
  const skillsetPopupBody = document.querySelector('.skillset-popup-body');
  const skillsetPopupClose = document.querySelector('.skillset-popup-close');
  const skillsetPopupOverlay = document.querySelector('.skillset-popup-overlay');

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
      } else if (type === 'popup') {
        const targetId = card.getAttribute('data-target');
        if (targetId) {
          e.preventDefault();
          openSkillsetPopup(card, targetId);
        }
      }
    });
  });

  // Open skillset popup with content from hidden div
  function openSkillsetPopup(card, contentId) {
    const contentEl = document.getElementById(contentId);
    if (!contentEl || !skillsetPopup || !skillsetPopupTitle || !skillsetPopupBody) return;

    const titleEl = card.querySelector('.card-content h3');
    skillsetPopupTitle.textContent = titleEl ? titleEl.textContent : '';
    skillsetPopupBody.innerHTML = contentEl.innerHTML;

    skillsetPopup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSkillsetPopup() {
    if (!skillsetPopup) return;
    skillsetPopup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (skillsetPopupClose) {
    skillsetPopupClose.addEventListener('click', closeSkillsetPopup);
  }
  if (skillsetPopupOverlay) {
    skillsetPopupOverlay.addEventListener('click', closeSkillsetPopup);
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && skillsetPopup && skillsetPopup.getAttribute('aria-hidden') === 'false') {
      closeSkillsetPopup();
    }
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

  // ESC key to close video modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
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

  // Prevent skillset popup container clicks from closing popup
  const skillsetPopupContainer = document.querySelector('.skillset-popup-container');
  if (skillsetPopupContainer) {
    skillsetPopupContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});
