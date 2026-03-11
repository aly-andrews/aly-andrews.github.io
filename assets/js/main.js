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
    const nav = document.querySelector(".site-nav");
    if (!toggle || !links || !nav) {
      return;
    }

    const isMenuOpen = () => toggle.getAttribute("aria-expanded") === "true";
    const getMenuLinks = () => Array.from(links.querySelectorAll("a[href]"));

    const setMenuOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      links.classList.toggle("nav-open", open);

      if (open) {
        const [firstLink] = getMenuLinks();
        if (firstLink) {
          firstLink.focus();
          window.requestAnimationFrame(() => {
            firstLink.focus();
          });
        }
      }
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener("click", (event) => {
      if (event.target instanceof Node && !nav.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    const handleMenuKeydown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.focus();
        return;
      }

      if (event.key !== "Tab" || !isMenuOpen()) {
        return;
      }

      const focusable = [toggle, ...getMenuLinks()];
      if (!focusable.length) {
        return;
      }

      const activeElement = document.activeElement;
      const currentIndex = focusable.indexOf(activeElement);
      event.preventDefault();

      if (event.shiftKey) {
        const previousIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
        focusable[previousIndex].focus();
        return;
      }

      const nextIndex = currentIndex === -1 || currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
      focusable[nextIndex].focus();
    };

    window.addEventListener("keydown", handleMenuKeydown, true);

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    });
  };

  const initVideoModal = () => {
    const modal = document.getElementById("videoModal");
    const playerContainer = document.getElementById("modalVideoPlayer");
    if (!modal || !playerContainer) {
      return;
    }

    const overlay = modal.querySelector(".video-modal-overlay");
    const closeButton = modal.querySelector(".video-modal-close");
    const videoCards = document.querySelectorAll(".video-card[data-video-src]");

    const clearPlayer = () => {
      playerContainer.innerHTML = "";
    };

    const closeModal = () => {
      modal.classList.remove("open", "active", "show");
      modal.setAttribute("aria-hidden", "true");
      clearPlayer();
      document.body.style.overflow = "";
    };

    const openModal = (src) => {
      if (!src) {
        return;
      }

      clearPlayer();

      const isYouTube = /youtube\.com|youtu\.be/.test(src);

      if (isYouTube) {
        // Ensure autoplay is enabled so users don't have to click twice
        let autoplaySrc = src;
        if (!/[?&]autoplay=1/.test(autoplaySrc)) {
          autoplaySrc += autoplaySrc.includes("?") ? "&autoplay=1" : "?autoplay=1";
        }

        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", autoplaySrc);
        iframe.setAttribute("title", "Video player");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );
        iframe.setAttribute("allowfullscreen", "true");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        playerContainer.appendChild(iframe);
      } else {
        const video = document.createElement("video");
        video.setAttribute("src", src);
        video.setAttribute("controls", "true");
        video.setAttribute("playsinline", "true");
        video.style.width = "100%";
        video.style.height = "100%";
        playerContainer.appendChild(video);
        video.play().catch(() => {});
      }

      modal.classList.add("open", "active", "show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
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
