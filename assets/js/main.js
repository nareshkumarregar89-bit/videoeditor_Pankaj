/**
 * Obsidian Reel - Pankaj Regar Cinematic Portfolio
 * Interactive Architecture & Telemetry Engine
 */

// Film Database for the Interactive Video Modal
const FILM_DATABASE = {
  'nocturn': {
    title: 'Nocturn: Speed of Shadows',
    client: 'CLIENT: BAVARIA MOTORWERKS • 2026',
    role: 'ROLE: DIR. / LEAD COLORIST',
    specs: 'Anamorphic 2.39:1 • Arri Alexa LF • DaVinci Aces 1.3 • ProRes 4444 XQ',
    duration: '00:02:48:00',
    totalSeconds: 168,
    aspect: '2.39:1',
    img: 'assets/images/nocturn_speed_of_shadows.jpg',
    lut: 'ARRI_709_KODAK2383_OFF',
    audio: 'DOLBY ATMOS 5.1 CH'
  },
  'after-hours': {
    title: 'After Hours 2026',
    client: 'CLIENT: UNIVERSAL MUSIC • 2026',
    role: 'ROLE: DIRECTOR & EDITOR',
    specs: 'Kodak 5219 35mm Scan • Panavision C-Series • 134 BPM Beat-sync • Stereo 48kHz 24-bit',
    duration: '00:03:42:00',
    totalSeconds: 222,
    aspect: '16:9',
    img: 'assets/images/after_hours_2026.jpg',
    lut: 'KODAK_VISION3_5219_ACES',
    audio: 'STEREO 24-BIT 48KHZ'
  },
  'journey': {
    title: 'The Journey',
    client: 'CLIENT: NATIONAL ARCHIVE • 2025',
    role: 'ROLE: DIRECTOR & LEAD COLORIST',
    specs: 'RED V-Raptor 8K VV • Leica Summilux-C • Natural Light Grading • Dolby 5.1 Surround',
    duration: '00:14:20:00',
    totalSeconds: 860,
    aspect: '2.00:1',
    img: 'assets/images/the_journey.jpg',
    lut: 'LEICA_SUMMILUX_ACEScc',
    audio: 'DOLBY 5.1 SURROUND'
  },
  'aura': {
    title: 'Aura: Haute Couture',
    client: 'CLIENT: MAISON NOIR PARIS • 2025',
    role: 'ROLE: FILM EDITOR',
    specs: 'Mastered 4:5 & 16:9 DCI • Arri Alexa Mini LF • Custom Burgundy Halation Node Tree',
    duration: '00:01:15:00',
    totalSeconds: 75,
    aspect: '16:9',
    img: 'assets/images/aura_haute_couture.jpg',
    lut: 'PR_BURGUNDY_HALATION_V4',
    audio: 'HIGH-FIDELITY STEREO'
  },
  'tokyo': {
    title: 'Echoes of Tokyo',
    client: 'CLIENT: STUDIO KANTO • 2024',
    role: 'ROLE: DIRECTOR & SOUND DESIGN',
    specs: 'Anamorphic T1.5 High-Speed Primes • Sony Venice 2 • Binaural 3D Ambisonics Audio',
    duration: '00:06:05:00',
    totalSeconds: 365,
    aspect: '2.39:1',
    img: 'assets/images/echoes_of_tokyo.jpg',
    lut: 'SONY_VENICE_S-LOG3_CINE',
    audio: 'BINAURAL 3D AMBISONICS'
  },
  'solitude': {
    title: 'Solitude: Icelandic Drift',
    client: 'CLIENT: NORDIC GEO COMMISSION • 2024',
    role: 'ROLE: DIRECTOR & COLORIST',
    specs: 'FPV Cinedrone 6K • Komodo Global Shutter • Custom Cold-Blue Luminance Curves',
    duration: '00:08:14:00',
    totalSeconds: 494,
    aspect: '16:9',
    img: 'assets/images/solitude_icelandic.jpg',
    lut: 'NORDIC_COLD_P3D65',
    audio: 'SURROUND 5.1 STEMS'
  },
  'chronos': {
    title: 'Chronos Speedway',
    client: 'CLIENT: CHRONOS TIMEPIECES • 2024',
    role: 'ROLE: COMMERCIAL EDITOR',
    specs: 'Phantom Flex 4K 1000 FPS • Cooke Anamorphic /i • Metallic Specular Polish',
    duration: '00:00:45:00',
    totalSeconds: 45,
    aspect: '2.39:1',
    img: 'assets/images/chronos_speedway.jpg',
    lut: 'PHANTOM_RAW_RECODE_REC709',
    audio: 'HIGH-PRESSURE ENGINE STEMS'
  }
};

// 1. Live 24 FPS SMPTE Timecode Counter
let baseHour = 1;
let baseMin = 24;
let baseSec = 18;
let baseFrame = 4;

function initLiveSMPTE() {
  const tcElements = document.querySelectorAll('.live-smpte-tc');
  if (!tcElements.length) return;

  setInterval(() => {
    baseFrame++;
    if (baseFrame >= 24) {
      baseFrame = 0;
      baseSec++;
      if (baseSec >= 60) {
        baseSec = 0;
        baseMin++;
        if (baseMin >= 60) {
          baseMin = 0;
          baseHour++;
        }
      }
    }
    const h = String(baseHour).padStart(2, '0');
    const m = String(baseMin).padStart(2, '0');
    const s = String(baseSec).padStart(2, '0');
    const f = String(baseFrame).padStart(2, '0');
    const tcString = `TC ${h}:${m}:${s}:${f}`;
    tcElements.forEach(el => {
      el.textContent = tcString;
    });
  }, 1000 / 24);
}

// 2. Interactive Video Modal Controller
let isPlaying = false;
let isMuted = false;
let playInterval = null;
let currentProgress = 0.28;
let currentActiveProject = 'nocturn';
const aspectRatios = ['2.39:1', '16:9', '4:3'];
let currentAspectIdx = 0;

window.openShowcaseModal = function(projectId) {
  const modal = document.getElementById('video-modal');
  if (!modal) return;

  const data = FILM_DATABASE[projectId] || FILM_DATABASE['nocturn'];
  currentActiveProject = projectId;

  // Populate metadata
  const titleEl = document.getElementById('modal-project-title');
  if (titleEl) titleEl.textContent = data.title;

  const clientEl = document.getElementById('modal-client-text');
  if (clientEl) clientEl.textContent = data.client;

  const specsEl = document.getElementById('modal-project-specs');
  if (specsEl) specsEl.textContent = data.specs;

  const roleEl = document.getElementById('modal-project-role');
  if (roleEl) roleEl.textContent = data.role;

  const totalTcEl = document.getElementById('modal-total-timecode');
  if (totalTcEl) totalTcEl.textContent = data.duration;

  const badgeEl = document.getElementById('modal-format-badge');
  if (badgeEl) badgeEl.textContent = data.aspect + ' MASTER';

  const aspectLabel = document.getElementById('aspect-ratio-label');
  if (aspectLabel) aspectLabel.textContent = data.aspect;

  const lutEl = document.getElementById('modal-lut-text');
  if (lutEl && data.lut) lutEl.textContent = 'LUT: ' + data.lut;

  const audioEl = document.getElementById('modal-audio-text');
  if (audioEl && data.audio) audioEl.textContent = data.audio;

  const imgEl = document.getElementById('modal-project-img');
  if (imgEl) imgEl.src = data.img;

  // Setup initial aspect ratio
  const container = document.getElementById('video-aspect-container');
  const topBar = document.getElementById('letterbox-top');
  const bottomBar = document.getElementById('letterbox-bottom');
  if (container) {
    if (data.aspect === '2.39:1') {
      container.style.aspectRatio = '2.39/1';
      if (topBar) topBar.style.height = '18px';
      if (bottomBar) bottomBar.style.height = '18px';
      currentAspectIdx = 0;
    } else {
      container.style.aspectRatio = '16/9';
      if (topBar) topBar.style.height = '0px';
      if (bottomBar) bottomBar.style.height = '0px';
      currentAspectIdx = 1;
    }
  }

  currentProgress = 0.24;
  updateTimelineUI();

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    modal.classList.remove('opacity-0');
  }, 10);
};

window.closeShowcaseModal = function() {
  const modal = document.getElementById('video-modal');
  if (!modal) return;

  if (isPlaying) {
    window.togglePlayback();
  }

  modal.classList.add('opacity-0');
  document.body.style.overflow = '';
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
};

window.togglePlayback = function() {
  isPlaying = !isPlaying;
  const centerBadge = document.getElementById('center-play-badge');
  const centerIcon = document.getElementById('center-play-icon');
  const ctrlIcon = document.getElementById('ctrl-play-icon');

  if (isPlaying) {
    if (centerBadge) centerBadge.classList.add('opacity-0', 'scale-90');
    if (ctrlIcon) ctrlIcon.textContent = 'pause';
    if (centerIcon) centerIcon.textContent = 'pause';

    playInterval = setInterval(() => {
      currentProgress += 0.005;
      if (currentProgress >= 1) {
        currentProgress = 0;
      }
      updateTimelineUI();
    }, 150);
  } else {
    clearInterval(playInterval);
    if (centerBadge) centerBadge.classList.remove('opacity-0', 'scale-90');
    if (ctrlIcon) ctrlIcon.textContent = 'play_arrow';
    if (centerIcon) centerIcon.textContent = 'play_arrow';
  }
};

window.toggleMute = function() {
  isMuted = !isMuted;
  const volIcon = document.getElementById('ctrl-volume-icon');
  if (volIcon) {
    volIcon.textContent = isMuted ? 'volume_off' : 'volume_up';
  }
};

window.toggleAspectRatio = function() {
  currentAspectIdx = (currentAspectIdx + 1) % aspectRatios.length;
  const aspect = aspectRatios[currentAspectIdx];
  const container = document.getElementById('video-aspect-container');
  const topBar = document.getElementById('letterbox-top');
  const bottomBar = document.getElementById('letterbox-bottom');
  const label = document.getElementById('aspect-ratio-label');

  if (label) label.textContent = aspect;

  if (aspect === '2.39:1') {
    container.style.aspectRatio = '2.39/1';
    if (topBar) topBar.style.height = '18px';
    if (bottomBar) bottomBar.style.height = '18px';
  } else if (aspect === '16:9') {
    container.style.aspectRatio = '16/9';
    if (topBar) topBar.style.height = '0px';
    if (bottomBar) bottomBar.style.height = '0px';
  } else if (aspect === '4:3') {
    container.style.aspectRatio = '4/3';
    if (topBar) topBar.style.height = '0px';
    if (bottomBar) bottomBar.style.height = '0px';
  }
};

window.scrubTimeline = function(event) {
  const track = document.getElementById('modal-timeline-track');
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  currentProgress = Math.max(0, Math.min(1, clickX / rect.width));
  updateTimelineUI();
};

window.restartReel = function() {
  currentProgress = 0;
  updateTimelineUI();
  if (!isPlaying) {
    window.togglePlayback();
  }
};

window.toggleFullscreen = function() {
  const panel = document.getElementById('video-modal-panel') || document.getElementById('video-modal');
  if (!document.fullscreenElement) {
    if (panel.requestFullscreen) {
      panel.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

function updateTimelineUI() {
  const progressBar = document.getElementById('modal-timeline-progress');
  const liveTcEl = document.getElementById('modal-live-timecode');
  if (progressBar) {
    progressBar.style.width = (currentProgress * 100) + '%';
  }

  if (liveTcEl) {
    const data = FILM_DATABASE[currentActiveProject] || FILM_DATABASE['nocturn'];
    const totalSec = data.totalSeconds || 168;
    const currentSec = Math.floor(currentProgress * totalSec);
    const m = String(Math.floor(currentSec / 60)).padStart(2, '0');
    const s = String(currentSec % 60).padStart(2, '0');
    const f = String(Math.floor((currentProgress * totalSec * 24) % 24)).padStart(2, '0');
    liveTcEl.textContent = `00:${m}:${s}:${f}`;
  }
}

// 3. Category Filter Initialization (for index.html)
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');
  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-primary-container', 'text-on-primary');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.add('active', 'bg-primary-container', 'text-on-primary');
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || (category && category.includes(filterValue))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. Mobile Drawer Navigation Controller
window.toggleMobileMenu = function() {
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer) return;
  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    setTimeout(() => {
      drawer.classList.remove('opacity-0', '-translate-y-4');
    }, 10);
  } else {
    drawer.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 250);
  }
};

// 5. Studio CMS Portal Modal
window.openStudioCMS = function() {
  const cmsModal = document.getElementById('studio-cms-modal');
  if (!cmsModal) return;
  cmsModal.classList.remove('hidden');
  setTimeout(() => {
    cmsModal.classList.remove('opacity-0');
  }, 10);
};

window.closeStudioCMS = function() {
  const cmsModal = document.getElementById('studio-cms-modal');
  if (!cmsModal) return;
  cmsModal.classList.add('opacity-0');
  setTimeout(() => {
    cmsModal.classList.add('hidden');
  }, 250);
};

// 6. Interactive FAQ Accordion (for services.html)
function initFAQ() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  if (!faqToggles.length) return;

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.faq-item');
      const content = parent.querySelector('.faq-content');
      const icon = parent.querySelector('.faq-icon');

      const isHidden = content.classList.contains('hidden');

      // Close other open faqs
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

// 7. Directorial Dispatch Form (for contact.html)
function initBookingForm() {
  const form = document.getElementById('booking-form');
  const successState = document.getElementById('success-state');
  if (!form || !successState) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Generate unique dispatch reference
    const refId = 'PR-' + Math.floor(1000 + Math.random() * 9000);
    const refDisplay = document.getElementById('generated-ref-id');
    if (refDisplay) refDisplay.textContent = refDisplay.textContent.replace('PR-9482', refId);

    form.classList.add('hidden');
    successState.classList.remove('hidden');
  });
}

// 8. Animated Audio Pulse Canvas (for about.html)
function initPulseCanvas() {
  const canvas = document.getElementById('pulse-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = canvas.parentElement.clientWidth;
  let height = canvas.height = 64;

  let offset = 0;

  function renderWave() {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = '#afc9ea';
    ctx.lineWidth = 2;

    const points = [];
    const step = 8;
    for (let x = 0; x <= width; x += step) {
      const freq1 = Math.sin((x + offset) * 0.04) * 12;
      const freq2 = Math.cos((x * 0.02) + offset * 0.06) * 10;
      const beat = (Math.sin(offset * 0.05) > 0.8) ? Math.sin(x * 0.1) * 15 : 0;
      const y = height / 2 + freq1 + freq2 + beat;
      points.push({ x, y });
    }

    if (points.length) {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      // Soft filled gradient beneath
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, 'rgba(175, 201, 234, 0.12)');
      grad.addColorStop(1, 'rgba(175, 201, 234, 0.00)');
      ctx.fillStyle = grad;
      ctx.fill();
    }

    offset += 1.8;
    requestAnimationFrame(renderWave);
  }

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
    }
  });

  renderWave();
}

// Global Keyboard Controls (Escape & Spacebar)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeShowcaseModal();
    window.closeStudioCMS();
  }
  if (e.code === 'Space') {
    const modal = document.getElementById('video-modal');
    if (modal && !modal.classList.contains('hidden')) {
      e.preventDefault();
      window.togglePlayback();
    }
  }
});

// Initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initLiveSMPTE();
  initFilters();
  initFAQ();
  initBookingForm();
  initPulseCanvas();
});
