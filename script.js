/* ============================================================
   JOSHUA U. TACOYCOY — PORTFOLIO SCRIPT
   Clean, modular, no dependencies.
   ============================================================ */
(() => {
  'use strict';

  /* ========== DATA: PROJECTS ========== */
  const PROJECTS = [
    {
      id: 'northgate',
      cat: 'web',
      title: 'Northgate Consulting — Business Landing Page',
      emoji: '🏢',
      grad: 'g1',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Corporate Website',
      short: 'A responsive corporate landing page with animated stats, service cards, and a validated lead-capture form.',
      desc: 'A modern, responsive corporate landing page for a fictional consulting firm. Built to practice real-world layout, animation, and form patterns.',
      list: [
        'Animated stat counters with IntersectionObserver',
        'Service cards with modal detail views',
        'Testimonial slider with autoplay',
        'Validated contact form',
        'Fully responsive navigation with mobile drawer'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      demo: 'demos/northgate/index.html'
    },
    {
      id: 'personal',
      cat: 'web',
      title: 'Personal Portfolio — Designer Showcase',
      emoji: '👤',
      grad: 'g2',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Personal Website',
      short: 'Dark-themed portfolio with typing effect, cursor glow, filterable project grid, and project modals.',
      desc: 'A personal portfolio site for a fictional designer with advanced interactions: animated typing, cursor glow, filterable project grid, and detail modals.',
      list: [
        'Multi-word animated typing effect',
        'Cursor-following gradient glow',
        'Filterable project grid with categories',
        'Project detail modals with full descriptions',
        'Dark/light theme persisted via localStorage'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
      demo: 'demos/personal/index.html'
    },
    {
      id: 'cafe',
      cat: 'web',
      title: 'Café Aroma — Restaurant & Reservation',
      emoji: '☕',
      grad: 'g3',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Restaurant Website',
      short: 'Café site with live open/closed status, order cart, gallery lightbox, and reservation form.',
      desc: 'A warm, appetite-driven café website featuring an interactive menu, live open/closed status, an order cart, gallery lightbox, and a validated reservation form.',
      list: [
        'Live open/closed badge based on current time',
        'Tabbed menu with allergen filters',
        'Order cart with quantity controls and totals',
        'Gallery lightbox',
        'Reservation form with date picker & validation'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Cart'],
      demo: 'demos/cafe/index.html'
    },
    {
      id: 'shop',
      cat: 'web',
      title: 'Urban Threads — E-Commerce Storefront',
      emoji: '🛍️',
      grad: 'g4',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Online Store',
      short: 'Clothing storefront with product modals, size/color picker, wishlist, and slide-out cart.',
      desc: 'A modern e-commerce front-end with product detail modals, size and color selection, a persistent wishlist, category filtering, live search, sorting, and a slide-out cart.',
      list: [
        'Product detail modals with size & color pickers',
        'Wishlist with localStorage persistence',
        'Category filter + live search + sort',
        'Slide-out cart with quantity controls',
        'Responsive product grid'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Cart Logic'],
      demo: 'demos/shop/index.html'
    },
    {
      id: 'gym',
      cat: 'web',
      title: 'FitLife Gym — Fitness Landing Page',
      emoji: '💪',
      grad: 'g5',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Landing Page',
      short: 'Gym site with BMI calculator, calorie calculator, class schedule, and trainer modals.',
      desc: 'A high-energy gym landing page featuring a working BMI calculator, TDEE (daily calorie) calculator, weekly class schedule, and clickable trainer profile modals.',
      list: [
        'Working BMI calculator with category results',
        'TDEE (calorie needs) calculator',
        'Weekly class schedule view',
        'Trainer profile modals with certifications',
        'Membership plan comparison'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Calculators'],
      demo: 'demos/gym/index.html'
    },
    {
      id: 'saas',
      cat: 'web',
      title: 'TechFlow — SaaS Startup Website',
      emoji: '🚀',
      grad: 'g6',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Product Website',
      short: 'SaaS marketing site with live dashboard mockup, ROI calculator, and pricing toggle.',
      desc: 'A modern SaaS marketing site featuring a live animated dashboard mockup, an interactive ROI calculator, a feature comparison table, testimonial slider, and cookie consent banner.',
      list: [
        'Animated dashboard mockup with live charts',
        'Interactive ROI calculator with sliders',
        'Monthly/yearly pricing toggle with savings',
        'Feature comparison table',
        'Cookie consent banner with localStorage'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Sliders'],
      demo: 'demos/saas/index.html'
    },
    {
      id: 'event',
      cat: 'web',
      title: 'EventHub 2026 — Tech Conference Site',
      emoji: '🎤',
      grad: 'g7',
      badge: 'Demo',
      badgeClass: 'done',
      date: '2026 · Event Website',
      short: 'Conference site with live countdown, ticket cart, speaker modals, and .ics calendar download.',
      desc: 'A full-featured conference website with a real-time countdown, ticket tier selection, cart with quantity controls, speaker bio modals, and a working .ics calendar download.',
      list: [
        'Live countdown timer to event date',
        'Ticket tier selection with cart & quantity',
        'Speaker bio modals with talk details',
        'Add-to-calendar with .ics file download',
        'Animated live attendee counter'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Countdown'],
      demo: 'demos/event/index.html'
    },
    {
      id: 'motorcycle',
      cat: 'iot',
      title: 'Motorcycle Anti-Theft Alarm System',
      emoji: '🏍️',
      grad: 'g8',
      badge: 'In Progress',
      badgeClass: 'progress',
      date: 'Jan 2026 – Present',
      short: 'GPS-based motorcycle security monitoring with a dedicated mobile app for real-time tracking and alerts.',
      desc: 'A motorcycle security monitoring system using GPS and a dedicated mobile application for real-time tracking, geofence alerts, and motion detection.',
      list: [
        'GPS-based live location tracking',
        'Mobile app push notifications',
        'Motion sensor detection with alarm trigger',
        'Geofence alerts when bike leaves a safe zone'
      ],
      tags: ['GPS', 'IoT', 'Mobile App', 'Hardware']
    },
    {
      id: 'fire',
      cat: 'iot',
      title: 'Emergency Fire & Power Cut-Off System',
      emoji: '🔥',
      grad: 'g9',
      badge: 'Completed',
      badgeClass: 'done',
      date: 'Sep 2025 – Dec 2025',
      short: 'IoT-based safety system combining fire detection with automatic emergency power cut-off.',
      desc: 'An IoT-based safety system that combines fire and smoke detection with automatic emergency power cut-off for faster, safer response.',
      list: [
        'Smoke & heat sensor array',
        'Automatic power cut-off relay',
        'Real-time alert system',
        'Reduced response time by ~60%'
      ],
      tags: ['IoT', 'Sensors', 'Automation', 'Safety']
    },
    {
      id: 'award',
      cat: 'award',
      title: 'Best Mobile App Design (2026)',
      emoji: '📱',
      grad: 'g10',
      badge: 'Award',
      badgeClass: 'award',
      date: '2026',
      short: 'Award-winning mobile application design recognized for user-focused interface and practical functionality.',
      desc: 'Award-winning mobile application design recognized for its user-focused interface, accessibility, and practical functionality.',
      list: [
        'User-centered UI/UX approach',
        'Cross-platform prototype',
        'Accessibility considerations',
        'Recognition from design committee'
      ],
      tags: ['UI/UX', 'Mobile', 'Design']
    }
  ];

  /* ========== 1. THEME TOGGLE ========== */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  themeToggle.textContent = root.classList.contains('light') ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    try { localStorage.setItem('theme', isLight ? 'light' : 'dark'); } catch (e) {}
  });

  /* ========== 2. MOBILE MENU ========== */
  const menuToggle = document.getElementById('menuToggle');
  const navLinksEl = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinksEl.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.textContent = open ? '×' : '☰';
  });
  navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));

  /* ========== 3. NAVBAR SCROLL STATE ========== */
  const navbar = document.getElementById('navbar');
  const onScrollNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScrollNavbar, { passive: true });
  onScrollNavbar();

  /* ========== 4. READING PROGRESS + BACK TO TOP RING ========== */
  const readProgress = document.getElementById('readProgress');
  const toTop = document.getElementById('toTop');
  const ringFill = document.getElementById('ringFill');
  const RING_LEN = 2 * Math.PI * 16;

  const onScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    readProgress.style.width = pct + '%';
    toTop.classList.toggle('show', scrollTop > 500);
    ringFill.style.strokeDashoffset = RING_LEN * (1 - pct / 100);
  };
  window.addEventListener('scroll', onScrollProgress, { passive: true });

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ========== 5. TYPING EFFECT ========== */
  const typedEl = document.getElementById('typed');
  const PHRASES = ['web experiences.', 'IoT systems.', 'video stories.', 'creative edits.', 'practical solutions.'];
  let pIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const current = PHRASES[pIdx];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ++cIdx);
      if (cIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typedEl.textContent = current.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % PHRASES.length; }
    }
    setTimeout(type, deleting ? 35 : 80);
  }
  if (typedEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) type();
  else if (typedEl) typedEl.textContent = PHRASES[0];

  /* ========== 6. SCROLL REVEAL ========== */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ========== 7. ANIMATED COUNTERS ========== */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const dur = 1400;
        const start = performance.now();
        function step(now) {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        countObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObs.observe(c));
  } else {
    counters.forEach(c => c.textContent = c.dataset.count + (c.dataset.suffix || ''));
  }

  /* ========== 8. SKILL BARS ========== */
  const barFills = document.querySelectorAll('.bar-fill');
  if ('IntersectionObserver' in window) {
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const bar = e.target;
          bar.style.width = bar.dataset.width;
          barObs.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });
    barFills.forEach(b => barObs.observe(b));
  } else {
    barFills.forEach(b => b.style.width = b.dataset.width);
  }

  /* ========== 9. SCROLL SPY (ACTIVE NAV LINK) ========== */
  const navAnchors = document.querySelectorAll('[data-nav]');
  const sections = ['services', 'video-work', 'projects', 'process', 'about', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navAnchors.forEach(a => a.classList.toggle('active', a.dataset.nav === e.target.id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ========== 10. RENDER PROJECTS ========== */
  const projectsGrid = document.getElementById('projectsGrid');

  function renderProjects(filter = 'all') {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
    if (!list.length) {
      projectsGrid.innerHTML = '<div class="empty-projects"><span class="emo">🔍</span>No projects in this category yet.</div>';
      return;
    }
    projectsGrid.innerHTML = list.map((p, i) => `
      <article class="project-card" data-id="${p.id}" style="animation-delay:${i * 0.04}s" tabindex="0">
        <div class="project-thumb ${p.grad}">${p.emoji}</div>
        <div class="project-body">
          <div class="project-top">
            <h3>${p.title}</h3>
            <span class="badge ${p.badgeClass}">${p.badge}</span>
          </div>
          <span class="project-date">${p.date}</span>
          <p>${p.short}</p>
          <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
          ${p.demo ? `
            <div class="project-links">
              <a href="${p.demo}" target="_blank" rel="noopener" class="project-link" onclick="event.stopPropagation()">
                🔗 Live Demo
              </a>
            </div>` : ''}
        </div>
      </article>
    `).join('');

    projectsGrid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openProjectModal(card.dataset.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(card.dataset.id);
        }
      });
    });
  }
  renderProjects();

  /* ========== 11. PROJECT FILTERS ========== */
  document.querySelectorAll('#projectFilters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#projectFilters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  /* ========== 12. PROJECT MODAL ========== */
  const projectModal = document.getElementById('projectModal');
  const pmHero = document.getElementById('pmHero');
  const pmTitle = document.getElementById('pmTitle');
  const pmBody = document.getElementById('pmBody');
  const pmDate = document.getElementById('pmDate');
  const pmBadge = document.getElementById('pmBadge');
    const pmTags = document.getElementById('pmTags');
  const pmActions = document.getElementById('pmActions');

  function openProjectModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    pmHero.className = 'modal-hero ' + p.grad;
    pmHero.textContent = p.emoji;
    pmTitle.textContent = p.title;
    pmBody.innerHTML = `<p>${p.desc}</p><h4 class="modal-subhead">Highlights</h4><ul id="pmList">${(p.list || []).map(x => `<li>${x}</li>`).join('')}</ul>`;
    pmDate.textContent = p.date;
    pmBadge.textContent = p.badge;
    pmBadge.className = 'badge ' + p.badgeClass;
    pmTags.innerHTML = p.tags.map(t => `<li>${t}</li>`).join('');
    pmActions.innerHTML = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary">🔗 Open Live Demo</a>`
      : '<span style="color:var(--text-mute);font-size:.85rem">No live demo — academic/ongoing project.</span>';
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  projectModal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeProjectModal));

  /* ========== 13. CONTACT FORM ========== */
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(field, msg) {
    const errEl = document.querySelector(`.error[data-for="${field.id}"]`);
    if (errEl) errEl.textContent = msg;
    field.classList.toggle('invalid', Boolean(msg));
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    if (name.value.trim().length < 2) { showError(name, 'Please enter your name.'); valid = false; }
    else showError(name, '');

    if (!EMAIL_RE.test(email.value.trim())) { showError(email, 'Please enter a valid email.'); valid = false; }
    else showError(email, '');

    const service = document.getElementById('service');
    if (!service.value) { showError(service, 'Please choose a service.'); valid = false; }
    else showError(service, '');

    if (message.value.trim().length < 10) { showError(message, 'Message must be at least 10 characters.'); valid = false; }
    else showError(message, '');

    if (!valid) return;

    document.getElementById('contactSubject').value = `Project inquiry from ${name.value.trim()}`;
        submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    formStatus.classList.remove('error-state');
    formStatus.textContent = 'Sending your message...';

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error('The message could not be sent. Please email me directly.');

      form.reset();
      formStatus.textContent = 'Your message was sent. Thank you!';
    } catch (error) {
      formStatus.classList.add('error-state');
      formStatus.textContent = error.message || 'Unable to send your message. Please try again later.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.querySelector('.btn-text').textContent = 'Send Inquiry';
    }
  });

  // Service CTAs preselect the matching option in the form
  document.querySelectorAll('[data-service-preset]').forEach(a => a.addEventListener('click', () => {
    if (a.dataset.servicePreset) document.getElementById('service').value = a.dataset.servicePreset;
  }));

  /* ========== 14. AUTO YEAR ========== */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ========== 15. COMMAND PALETTE ========== */
  const palette = document.getElementById('palette');
  const paletteInput = document.getElementById('paletteInput');
  const paletteList = document.getElementById('paletteList');
  const paletteBtn = document.getElementById('paletteBtn');

  const COMMANDS = [
    { label: 'Home',                 icon: '🏠', hint: 'Section', action: () => scrollToSection('home') },
    { label: 'About Me',             icon: '👤', hint: 'Section', action: () => scrollToSection('about') },
    { label: 'Projects',             icon: '💼', hint: 'Section', action: () => scrollToSection('projects') },
    { label: 'Video Editing',        icon: '🎬', hint: 'Section', action: () => scrollToSection('video-work') },
    { label: 'Services',             icon: '⚡', hint: 'Section', action: () => scrollToSection('services') },
    { label: 'Experience & Education', icon: '🎓', hint: 'Section', action: () => scrollToSection('experience') },
    { label: 'Contact',              icon: '📧', hint: 'Section', action: () => scrollToSection('contact') },
    { label: 'Toggle Light/Dark Theme', icon: '🌓', hint: 'Action', action: () => themeToggle.click() },
    { label: 'Email Me',             icon: '✉️', hint: 'Action', action: () => window.location.href = 'mailto:Joshuatacoycoy18@gmail.com' },
    { label: 'Call Me',              icon: '📱', hint: 'Action', action: () => window.location.href = 'tel:+639264200198' },
    { label: 'Back to Top',          icon: '⬆️', hint: 'Action', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
  ];
  // Add projects dynamically
  PROJECTS.forEach(p => COMMANDS.push({
    label: p.title,
    icon: p.emoji,
    hint: 'Project',
    action: () => openProjectModal(p.id)
  }));

  let paletteFiltered = COMMANDS.slice();
  let paletteSelected = 0;

  function renderPaletteList() {
    if (!paletteFiltered.length) {
      paletteList.innerHTML = '<li class="palette-empty">No results found.</li>';
      return;
    }
    paletteList.innerHTML = paletteFiltered.map((c, i) => `
      <li class="palette-item ${i === paletteSelected ? 'selected' : ''}" data-i="${i}">
        <span class="p-icon">${c.icon}</span>
        <span class="p-label">${c.label}</span>
        <span class="p-hint">${c.hint}</span>
      </li>
    `).join('');
    paletteList.querySelectorAll('.palette-item').forEach(li => {
      li.addEventListener('click', () => {
        paletteFiltered[+li.dataset.i].action();
        closePalette();
      });
      li.addEventListener('mouseenter', () => {
        paletteSelected = +li.dataset.i;
        paletteList.querySelectorAll('.palette-item').forEach(x => x.classList.remove('selected'));
        li.classList.add('selected');
      });
    });
  }

  function openPalette() {
    palette.classList.add('open');
    palette.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    paletteInput.value = '';
    paletteFiltered = COMMANDS.slice();
    paletteSelected = 0;
    renderPaletteList();
    setTimeout(() => paletteInput.focus(), 30);
  }
  function closePalette() {
    palette.classList.remove('open');
    palette.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  paletteBtn.addEventListener('click', openPalette);
  palette.querySelectorAll('[data-close-palette]').forEach(el => el.addEventListener('click', closePalette));

  paletteInput.addEventListener('input', () => {
    const q = paletteInput.value.toLowerCase().trim();
    paletteFiltered = COMMANDS.filter(c => c.label.toLowerCase().includes(q));
    paletteSelected = 0;
    renderPaletteList();
  });

  paletteInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      paletteSelected = (paletteSelected + 1) % Math.max(paletteFiltered.length, 1);
      renderPaletteList();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      paletteSelected = (paletteSelected - 1 + paletteFiltered.length) % Math.max(paletteFiltered.length, 1);
      renderPaletteList();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = paletteFiltered[paletteSelected];
      if (cmd) { cmd.action(); closePalette(); }
    }
  });

  /* ========== 16. KEYBOARD SHORTCUTS ========== */
  document.addEventListener('keydown', (e) => {
    // Ctrl+K / Cmd+K → open palette
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.classList.contains('open') ? closePalette() : openPalette();
    }
    // "/" → open palette (when not typing)
    if (e.key === '/' && !palette.classList.contains('open')) {
      const tag = document.activeElement.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        openPalette();
      }
    }
    // Escape → close everything
    if (e.key === 'Escape') {
      if (palette.classList.contains('open')) closePalette();
      if (projectModal.classList.contains('open')) closeProjectModal();
      navLinksEl.classList.remove('open');
    }
  });
})();