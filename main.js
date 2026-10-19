/**
 * ONE WAY PIZZA — Master Client Script
 * Handles navigation, mobile drawer accessibility, contact validation & gallery modal
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  highlightActiveNavLink();
  initContactForm();
  initGalleryModal();
  updateDynamicYear();
  initScrollReveal();
  ensureHeroPizzaAutoplay();
  initCommercialVideoControls();
});

/* ==========================================================================
   Mobile Navigation Drawer (Accessible & Keyboard Operable)
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const closeBtn = document.querySelector(".drawer-close-btn");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".drawer-overlay");

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    toggleBtn.focus();
  }

  toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  // Close on Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Close drawer when any internal link is clicked
  const drawerLinks = drawer.querySelectorAll("a");
  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

/* ==========================================================================
   Highlight Active Navigation Link
   ========================================================================== */
function highlightActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

/* ==========================================================================
   Contact Form Validation with Truthful Demo Feedback
   Rule 9: "Do not claim a form works unless its submission path is implemented"
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector("#contact-inquiry-form");
  const modal = document.querySelector("#demo-feedback-modal");
  const closeModalBtn = document.querySelector("#modal-close-action");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = form.querySelector("#contact-name");
    const phoneInput = form.querySelector("#contact-phone");
    const messageInput = form.querySelector("#contact-message");

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, "Please enter your name (at least 2 characters).");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Phone / Contact
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) {
      showError(phoneInput, "Please enter a valid phone number or email.");
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      showError(messageInput, "Please enter your inquiry or message.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid && modal) {
      // Truthful Demo Response
      modal.classList.add("active");
      form.reset();
    }
  });

  if (modal && closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  function showError(input, msg) {
    const parent = input.closest(".form-group");
    if (!parent) return;
    let feedback = parent.querySelector(".form-feedback");
    if (!feedback) {
      feedback = document.createElement("div");
      feedback.className = "form-feedback is-error";
      parent.appendChild(feedback);
    }
    feedback.textContent = msg;
    feedback.style.display = "block";
    input.style.borderColor = "var(--color-accent-red)";
  }

  function clearError(input) {
    const parent = input.closest(".form-group");
    if (!parent) return;
    const feedback = parent.querySelector(".form-feedback");
    if (feedback) feedback.style.display = "none";
    input.style.borderColor = "";
  }
}

/* ==========================================================================
   Gallery Modal / Lightbox
   ========================================================================== */
function initGalleryModal() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector("#gallery-lightbox");
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector("#lightbox-img");
  const lightboxCaption = lightbox.querySelector("#lightbox-caption");
  const closeBtn = lightbox.querySelector(".modal-close-btn");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.querySelector(".gallery-caption");
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "One Way Pizza Gallery";
      }
      if (caption && lightboxCaption) {
        lightboxCaption.textContent = caption.textContent;
      }
      lightbox.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  });
}

/* ==========================================================================
   Dynamic Copyright Year
   ========================================================================== */
function updateDynamicYear() {
  const yearEls = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = currentYear;
  });
}

/* ==========================================================================
   Scroll Reveal Animation (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("active"));
  }
}

/* ==========================================================================
   Hero Spinning Pizza Autoplay Assurance
   ========================================================================== */
function ensureHeroPizzaAutoplay() {
  const heroPizzaVideo = document.querySelector("video.hero-spinning-pizza");
  if (!heroPizzaVideo) return;

  heroPizzaVideo.muted = true;
  const playPromise = heroPizzaVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Retry on user interaction if blocked
      document.addEventListener("click", () => {
        heroPizzaVideo.play().catch(() => {});
      }, { once: true });
    });
  }
}

/* ==========================================================================
   Full-Screen Commercial Video Playback & Sound Controls (#brand-commercial)
   ========================================================================== */
function initCommercialVideoControls() {
  const video = document.getElementById("commercial-video") || document.querySelector(".video-fullscreen-element");
  if (!video) return;

  // Reliable Autoplay Start (Muted)
  video.muted = true;
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Browser blocked autoplay; ensure video plays on first click anywhere
      document.addEventListener("click", () => {
        video.play().catch(() => {});
      }, { once: true });
    });
  }

  // Sound Toggle Button
  const soundBtn = document.getElementById("commercial-sound-btn");
  if (soundBtn) {
    const iconOff = soundBtn.querySelector(".icon-sound-off");
    const iconOn = soundBtn.querySelector(".icon-sound-on");
    const soundText = soundBtn.querySelector(".sound-text");

    soundBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      if (video.muted) {
        if (iconOff) iconOff.style.display = "";
        if (iconOn) iconOn.style.display = "none";
        if (soundText) soundText.textContent = "Sound";
        soundBtn.setAttribute("aria-label", "Unmute video sound");
      } else {
        if (iconOff) iconOff.style.display = "none";
        if (iconOn) iconOn.style.display = "";
        if (soundText) soundText.textContent = "Mute";
        soundBtn.setAttribute("aria-label", "Mute video sound");
      }
    });
  }

  // Play / Pause Toggle Button
  const playBtn = document.getElementById("commercial-play-btn");
  if (playBtn) {
    const iconPause = playBtn.querySelector(".icon-pause");
    const iconPlay = playBtn.querySelector(".icon-play");
    const playText = playBtn.querySelector(".play-text");

    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (iconPause) iconPause.style.display = "";
        if (iconPlay) iconPlay.style.display = "none";
        if (playText) playText.textContent = "Pause";
        playBtn.setAttribute("aria-label", "Pause commercial video");
      } else {
        video.pause();
        if (iconPause) iconPause.style.display = "none";
        if (iconPlay) iconPlay.style.display = "";
        if (playText) playText.textContent = "Play";
        playBtn.setAttribute("aria-label", "Play commercial video");
      }
    });
  }
}

/* ==========================================================================
   Header Scroll State (Transparent on Fullscreen Video Hero -> Solid on Scroll)
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector(".site-header.hero-transparent-nav");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Ensure header scroll is initialized
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
});

