document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.video-card');
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  const closeBtn = document.querySelector('.close-modal');

  if (!modal || !video || !closeBtn) {
    console.warn('Modal elements not found');
    return;
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-video-src');
      if (src) {
        video.src = src;
        modal.style.display = 'flex';
        // Trigger reflow to ensure display is applied before transition
        void modal.offsetWidth;
        modal.classList.add('show');
        video.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('show');
    video.pause();
    video.currentTime = 0;
    video.src = '';
    // Wait for fade-out transition before hiding (CSS handles the visual fade)
    setTimeout(() => {
      if (!modal.classList.contains('show')) {
        modal.style.display = 'none';
      }
    }, 400); // Match CSS transition duration
  }
});
