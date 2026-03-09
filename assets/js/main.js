(() => {
  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }
    callback();
  };

  const initNavToggle = () => {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      links.classList.toggle("nav-open", !isOpen);
    });
  };

  const initVideoModal = () => {
    const modal = document.getElementById("videoModal");
    const player = document.getElementById("modalVideoPlayer");
    if (!modal || !player) {
      return;
    }

    const overlay = modal.querySelector(".video-modal-overlay");
    const closeButton = modal.querySelector(".video-modal-close");
    const videoCards = document.querySelectorAll(".video-card[data-video-src]");

    const closeModal = () => {
      modal.classList.remove("open", "active", "show");
      modal.setAttribute("aria-hidden", "true");
      player.pause();
      player.removeAttribute("src");
      player.load();
      document.body.style.overflow = "";
    };

    const openModal = (src) => {
      if (!src) {
        return;
      }
      player.setAttribute("src", src);
      modal.classList.add("open", "active", "show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      player.play().catch(() => {});
    };

    videoCards.forEach((card) => {
      card.addEventListener("click", () => {
        openModal(card.getAttribute("data-video-src"));
      });
    });

    if (overlay) {
      overlay.addEventListener("click", closeModal);
    }
    if (closeButton) {
      closeButton.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });
  };

  const initStickerParallax = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const targets = document.querySelectorAll(
      ".hero-creative, .featured-work-creative, .highlights-creative, .how-i-work-section, .testimonials, .work-content-creative"
    );
    if (!targets.length) {
      return;
    }

    let queued = false;
    const update = () => {
      const y = window.scrollY || window.pageYOffset;
      targets.forEach((el, index) => {
        const speed = 0.03 + index * 0.01;
        el.style.setProperty("--sticker-shift", `${y * speed}px`);
      });
      queued = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (queued) {
          return;
        }
        queued = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );

    update();
  };

  const initAccordions = () => {
    const toggles = document.querySelectorAll(".accordion-toggle");
    if (!toggles.length) {
      return;
    }

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        const content = toggle.nextElementSibling;
        if (!content) {
          return;
        }

        toggle.setAttribute("aria-expanded", String(!expanded));
        const icon = toggle.querySelector(".accordion-icon");

        if (!expanded) {
          content.style.maxHeight = `${content.scrollHeight}px`;
          if (icon) {
            icon.textContent = "−";
          }
          return;
        }

        content.style.maxHeight = "";
        if (icon) {
          icon.textContent = "+";
        }
      });
    });
  };

  ready(() => {
    initNavToggle();
    initVideoModal();
    initStickerParallax();
    initAccordions();
  });
})();
