/* ═══════════════════════════════════════════
   CafeConfused — Main JavaScript
   Smooth scroll, animations, interactions
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ─── DOM REFERENCES ──────────────────────
  const navbar        = document.getElementById('navbar');
  const hamburger     = document.getElementById('hamburger');
  const navLinks      = document.getElementById('navLinks');
  const allNavLinks   = document.querySelectorAll('.nav-link');
  const heroParallax  = document.getElementById('heroParallax');
  const musicToggle   = document.getElementById('musicToggle');
  const musicIcon     = document.getElementById('musicIcon');
  const bgMusic       = document.getElementById('bgMusic');
  const bookingForm   = document.getElementById('bookingForm');

  // ─── NAVBAR: SCROLL STATE ────────────────
  let lastScroll = 0;
  const handleNavbarScroll = () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  };

  // ─── NAVBAR: ACTIVE SECTION HIGHLIGHTING ─
  const sections = document.querySelectorAll('section[id]');

  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        allNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  // ─── HAMBURGER MENU ─────────────────────
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close menu on link click
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Close on outside click (the overlay area)
  navLinks.addEventListener('click', (e) => {
    if (e.target === navLinks) toggleMenu();
  });

  // ─── SMOOTH SCROLL FOR NAV LINKS ────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── PARALLAX HERO ─────────────────────
  const handleParallax = () => {
    if (window.innerWidth < 768) return;
    const scrollY = window.scrollY;
    if (heroParallax && scrollY < window.innerHeight) {
      heroParallax.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
  };

  // ─── SCROLL REVEAL ANIMATION ─────────────
  const revealElements = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // ─── TESTIMONIAL SLIDER ──────────────────
  const track     = document.getElementById('testimonialTrack');
  const prevBtn   = document.getElementById('sliderPrev');
  const nextBtn   = document.getElementById('sliderNext');
  const dotsWrap  = document.getElementById('sliderDots');

  if (track && prevBtn && nextBtn && dotsWrap) {
    const cards = track.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    let autoSlideTimer;

    // Create dots
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll('.slider-dot');

    const goToSlide = (index) => {
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      currentSlide = index;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    };

    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      resetAutoSlide();
    });
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      resetAutoSlide();
    });

    // Auto-slide every 5s
    const startAutoSlide = () => {
      autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
    };
    const resetAutoSlide = () => {
      clearInterval(autoSlideTimer);
      startAutoSlide();
    };
    startAutoSlide();

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
        resetAutoSlide();
      }
    }, { passive: true });
  }

  // ─── BACKGROUND MUSIC TOGGLE ─────────────
  let isPlaying = false;

  musicToggle.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicIcon.textContent = '🔇';
      musicToggle.classList.remove('playing');
    } else {
      bgMusic.volume = 0.3;
      bgMusic.play().catch(() => {
        // Autoplay blocked — user needs to interact first
      });
      musicIcon.textContent = '🎵';
      musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  // ─── BOOKING FORM HANDLER ────────────────
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('guestName').value.trim();
      const phone   = document.getElementById('guestPhone').value.trim();
      const date    = document.getElementById('bookingDate').value;
      const time    = document.getElementById('bookingTime').value;
      const guests  = document.getElementById('guestCount').value;
      const special = document.getElementById('specialRequests').value.trim();

      if (!name || !phone || !date || !time || !guests) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Build WhatsApp message
      const message = encodeURIComponent(
        `🍽️ *Table Reservation — CafeConfused*\n\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `📅 Date: ${date}\n` +
        `🕐 Time: ${time}\n` +
        `👥 Guests: ${guests}\n` +
        `${special ? `📝 Special Requests: ${special}\n` : ''}` +
        `\nSent from CafeConfused Website`
      );

      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
      showToast('Redirecting to WhatsApp to confirm your reservation!', 'success');
      bookingForm.reset();
    });
  }

  // ─── TOAST NOTIFICATION ──────────────────
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${type}`);
    toast.textContent = message;

    // Style inline for simplicity
    Object.assign(toast.style, {
      position: 'fixed',
      top: '90px',
      left: '50%',
      transform: 'translateX(-50%) translateY(-20px)',
      padding: '14px 28px',
      borderRadius: '50px',
      fontSize: '0.95rem',
      fontWeight: '500',
      zIndex: '9999',
      opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      maxWidth: '90vw',
      textAlign: 'center',
      background: type === 'success' ? '#4a7c59' : '#c4704b',
      color: '#fdf6ec',
    });

    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // ─── COMBINED SCROLL HANDLER (THROTTLED) ─
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleNavbarScroll();
        updateActiveLink();
        handleParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // ─── SET DEFAULT BOOKING DATE = TODAY ────
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }

  // ─── INITIAL CALLS ───────────────────────
  handleNavbarScroll();
  updateActiveLink();
});
