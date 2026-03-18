(function () {
  /* ── Brand Tokens ── */
  var D = '#201a1a', CARD = '#2a2222', CARD2 = '#252020',
      T = '#a79c8e', L = '#d2c6b6', W = '#ffffff',
      B = 'rgba(167,156,142,0.14)', BORDER = 'rgba(167,156,142,0.18)';
  var FONT = "'Space Grotesk', sans-serif";

  /* ════════════════════════════════════════
     1.  INJECT COMPREHENSIVE CSS
  ═════════════════════════════════════════ */
  function injectCSS() {
    var s = document.createElement('style');
    s.id = 'aumana-global';
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

      /* ── Page background ── */
      html, body { background-color: ${D} !important; }

      /* ── Framer page/section backgrounds ── */
      .framer-page-container,
      [data-framer-name="Main"],
      [data-framer-name="Hero"],
      [data-framer-name="Frameworks"],
      [data-framer-name="Process"],
      [data-framer-name="Results"],
      [data-framer-name="FAQs"],
      [data-framer-name="Footer"],
      [data-framer-name="Trusted Brands"],
      [data-framer-name="Background"],
      [data-framer-name="Scroll"]
        { background-color: ${D} !important; }

      /* ── Cards / boxes ── */
      [data-framer-name="Framework Row"],
      [data-framer-name="Results Box"],
      [data-framer-name="Dashboard"],
      [data-framer-name="M1"],
      [data-framer-name="Benefits"],
      [data-framer-name="Variant 1"],
      [data-framer-name="Variant 2"],
      [data-framer-name="Variant 3"],
      [data-framer-name="Variant 4"],
      [data-framer-name="Variant 5"],
      [data-framer-name="Variant 6"]
        { background-color: ${CARD} !important; border-color: ${BORDER} !important; }

      /* ── Catch all remaining black/near-black elements ── */
      [style*="background-color: rgb(0, 0, 0)"],
      [style*="background-color: rgb(32, 26, 26)"],
      [style*="background-color: rgb(15, 15, 15)"],
      [style*="background: rgb(0, 0, 0)"],
      [style*="background: rgb(32, 26, 26)"]
        { background-color: ${D} !important; }

      /* ── Blue → Taupe everywhere ── */
      [style*="color: rgb(167, 156, 142)"],
      [style*="color: rgb(0, 153, 255)"]
        { color: ${T} !important; }
      [style*="background-color: rgb(167, 156, 142)"],
      [style*="background-color: rgb(0, 153, 255)"]
        { background-color: ${T} !important; }
      [style*="border-color: rgb(0, 153, 255)"],
      [style*="border-color: rgb(167, 156, 142)"]
        { border-color: ${BORDER} !important; }

      /* ── Buttons ── */
      [data-framer-name="Primary"],
      [data-framer-name="Button"],
      a[class*="framer"][style*="rgb(167, 156, 142)"],
      a[class*="framer"][style*="rgb(0, 153, 255)"]
        { background-color: ${L} !important; color: ${D} !important; border-radius: 99px !important; }

      /* ── Nav fix ── */
      [data-framer-name="Navigation"] {
        background-color: rgba(32,26,26,0.92) !important;
        backdrop-filter: blur(16px) !important;
        border-bottom: 1px solid ${BORDER} !important;
      }
      [data-framer-name="Navigation"] * { background-color: transparent !important; }

      /* ── Footer fix ── */
      [data-framer-name="Footer"] {
        background-color: ${D} !important;
        border-top: 1px solid ${BORDER} !important;
      }

      /* ── Trusted Brands section ── */
      #aumana-brands {
        display: flex !important;
        flex-wrap: wrap !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 32px 48px !important;
        padding: 40px 24px !important;
        background: ${D} !important;
        border-top: 1px solid ${BORDER} !important;
        border-bottom: 1px solid ${BORDER} !important;
      }
      #aumana-brands .ab-logo {
        display: flex; align-items: center; gap: 7px;
        font-family: ${FONT}; font-size: 13px; font-weight: 600;
        color: ${T}; opacity: 0.65; letter-spacing: 0.04em;
        transition: opacity 0.2s;
      }
      #aumana-brands .ab-logo:hover { opacity: 1; }

      /* ── Reviews ── */
      #aumana-reviews {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
        gap: 20px !important;
        margin-top: 24px !important;
      }
      .ar-card {
        background: ${CARD} !important;
        border: 1px solid ${BORDER} !important;
        border-radius: 20px !important;
        padding: 28px !important;
        font-family: ${FONT} !important;
        display: flex; flex-direction: column; justify-content: space-between;
      }
      .ar-stars { color: ${T}; font-size: 14px; margin-bottom: 14px; letter-spacing: 2px; }
      .ar-quote { color: ${L}; font-size: 14px; font-weight: 300; line-height: 1.75; flex: 1; margin-bottom: 20px; }
      .ar-divider { border: none; border-top: 1px solid ${BORDER}; margin-bottom: 14px; }
      .ar-profile { display: flex; align-items: center; gap: 12px; }
      .ar-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 2px solid ${BORDER}; flex-shrink: 0; }
      .ar-name { font-size: 13px; font-weight: 600; color: ${W}; }
      .ar-role { font-size: 12px; color: ${T}; margin-top: 2px; }
      .ar-company { display: flex; align-items: center; gap: 5px; margin-top: 6px; font-size: 11px; color: ${T}; opacity: 0.6; font-weight: 500; letter-spacing: 0.05em; }

      /* ── Stats injection ── */
      #aumana-stats {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
        margin-top: 20px !important;
      }
      @media (min-width: 640px) {
        #aumana-stats { grid-template-columns: repeat(4, 1fr) !important; }
      }
      .as-card {
        background: ${CARD2} !important;
        border: 1px solid ${BORDER} !important;
        border-radius: 16px !important;
        padding: 22px 18px !important;
        font-family: ${FONT} !important;
      }
      .as-num {
        font-size: clamp(1.8rem, 3.5vw, 2.6rem);
        font-weight: 700;
        background: linear-gradient(135deg, ${L} 0%, ${T} 55%, ${W} 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; line-height: 1; margin-bottom: 8px;
      }
      .as-label { font-size: 12px; color: ${T}; font-weight: 300; line-height: 1.55; }
    `;
    document.head.appendChild(s);
  }

  /* ════════════════════════════════════════
     2.  AUMANA SUN LOGO SVG
  ═════════════════════════════════════════ */
  function makeSunSVG(size) {
    size = size || 26;
    var lines = '';
    for (var i = 0; i < 24; i++) {
      var a = (i * 360 / 24) * Math.PI / 180;
      var inner = size * 0.4, outer = size * 0.85;
      lines += '<line x1="' + (size/2 + inner*Math.cos(a)).toFixed(1) + '" y1="' + (size/2 + inner*Math.sin(a)).toFixed(1) +
               '" x2="' + (size/2 + outer*Math.cos(a)).toFixed(1) + '" y2="' + (size/2 + outer*Math.sin(a)).toFixed(1) +
               '" stroke="' + L + '" stroke-width="0.9" stroke-linecap="round" opacity="' + (i%3===0?'0.9':'0.6') + '"/>';
    }
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" fill="none" xmlns="http://www.w3.org/2000/svg">' + lines + '</svg>';
  }

  /* ════════════════════════════════════════
     3.  REPLACE LOGO
  ═════════════════════════════════════════ */
  function replaceLogo() {
    var logoEls = document.querySelectorAll('[data-framer-name="Logo"], [data-framer-name="logo"]');
    logoEls.forEach(function(el) {
      var anchor = el.closest('a') || el.closest('[data-framer-name="Navigation"]')?.querySelector('a') || el.parentElement;
      if (!anchor || anchor._aumanaLogoSet) return;
      anchor._aumanaLogoSet = true;
      anchor.innerHTML = '<div style="display:flex;align-items:center;gap:9px;text-decoration:none;cursor:pointer;">' +
        makeSunSVG(26) +
        '<span style="font-family:' + FONT + ';font-weight:700;font-size:15px;color:' + W + ';letter-spacing:0.2em;text-transform:uppercase;">AUMANA</span>' +
        '</div>';
    });
  }

  /* ════════════════════════════════════════
     4.  REPLACE TRUSTED BRANDS LOGOS
  ═════════════════════════════════════════ */
  var BRAND_LOGOS = [
    { name: 'Zapier', icon: '⚡' },
    { name: 'VAPI', icon: '◎' },
    { name: 'Airtable', icon: '⊞' },
    { name: 'HubSpot', icon: '⬡' },
    { name: 'Make', icon: '◈' },
    { name: 'OpenAI', icon: '○' },
    { name: 'Calendly', icon: '▣' },
    { name: 'GHL', icon: '△' },
  ];

  function replaceBrands() {
    var tb = document.querySelector('[data-framer-name="Trusted Brands"]');
    if (!tb || tb._aumanaSet) return;
    tb._aumanaSet = true;
    var div = document.createElement('div');
    div.id = 'aumana-brands';
    BRAND_LOGOS.forEach(function(b) {
      var span = document.createElement('div');
      span.className = 'ab-logo';
      span.innerHTML = '<span style="font-size:16px;">' + b.icon + '</span><span>' + b.name + '</span>';
      div.appendChild(span);
    });
    tb.parentNode.insertBefore(div, tb);
    tb.style.display = 'none';
  }

  /* ════════════════════════════════════════
     5.  INJECT STATS UNDER "Clarity in numbers"
  ═════════════════════════════════════════ */
  var STATS = [
    { v: '3x', l: 'Average lead conversion lift within 60 days' },
    { v: '80%', l: 'Reduction in manual follow-up time' },
    { v: '24/7', l: 'AI coverage with zero added headcount' },
    { v: '14 days', l: 'Avg. time from kickoff to live deployment' },
  ];

  function injectStats() {
    var done = false;
    document.querySelectorAll('[data-framer-name="Results Box"], [data-framer-name="Results"]').forEach(function(el) {
      if (done || el._aumanaStats) return;
      done = true; el._aumanaStats = true;
      var grid = document.createElement('div');
      grid.id = 'aumana-stats';
      STATS.forEach(function(s) {
        var c = document.createElement('div');
        c.className = 'as-card';
        c.innerHTML = '<div class="as-num">' + s.v + '</div><div class="as-label">' + s.l + '</div>';
        grid.appendChild(c);
      });
      el.after(grid);
    });
  }

  /* ════════════════════════════════════════
     6.  INJECT REVIEWS under "Proof in motion"
  ═════════════════════════════════════════ */
  var REVIEWS = [
    {
      stars: 5,
      quote: 'The AI receptionist handles 90% of our inbound calls. Our team spends zero time on scheduling — it just happens automatically. No-show rate dropped 40% in the first month.',
      name: 'Marcus Reynolds', role: 'Founder', company: 'Revive MedSpa',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      logo: '◎ MedSpa'
    },
    {
      stars: 5,
      quote: 'Three months in, we doubled booked consultations without adding a single team member. The system qualifies, books, and reminds clients automatically.',
      name: 'Priya Sharma', role: 'CEO', company: 'LuxDerm Clinics',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      logo: '⬡ LuxDerm'
    },
    {
      stars: 5,
      quote: 'Two weeks from kickoff to live. Full visibility into every call and message. ROI was clear within 30 days — I can\'t imagine running the agency without it.',
      name: 'Jordan Kellerman', role: 'Operations Director', company: 'Scale Agency',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      logo: '△ Scale'
    },
  ];

  function injectReviews() {
    // Find "Proof in motion" heading then inject after its parent section
    var allText = document.querySelectorAll('h1, h2, h3, p, span');
    var proofEl = null;
    allText.forEach(function(el) {
      if (!proofEl && el.textContent.trim() === 'Proof in motion.') proofEl = el;
    });
    if (!proofEl || proofEl._aumanaReviews) return;
    proofEl._aumanaReviews = true;

    var section = proofEl.closest('[data-framer-name]') || proofEl.parentElement;
    var grid = document.createElement('div');
    grid.id = 'aumana-reviews';
    grid.style.cssText = 'padding:0 24px 64px;max-width:1100px;margin:0 auto;';

    REVIEWS.forEach(function(r) {
      var card = document.createElement('div');
      card.className = 'ar-card';
      card.innerHTML =
        '<div class="ar-stars">' + '★'.repeat(r.stars) + '</div>' +
        '<p class="ar-quote">"' + r.quote + '"</p>' +
        '<hr class="ar-divider">' +
        '<div class="ar-profile">' +
          '<img class="ar-avatar" src="' + r.avatar + '" alt="' + r.name + '">' +
          '<div>' +
            '<div class="ar-name">' + r.name + '</div>' +
            '<div class="ar-role">' + r.role + ' · ' + r.company + '</div>' +
            '<div class="ar-company">' + r.logo + '</div>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
    });

    // Insert after the section that contains "Proof in motion"
    section.after(grid);
  }

  /* ════════════════════════════════════════
     7.  TEXT REPLACEMENTS
  ═════════════════════════════════════════ */
  function replaceText(root) {
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null, false);
    var node, changes = [];
    while ((node = walker.nextNode())) {
      var v = node.nodeValue;
      if (!v.trim()) continue;
      var nv = v
        .replace(/\bAIC\b/g, 'AUMANA')
        .replace(/AI Consultin\b/g, 'Aumana Consulting')
        .replace(/Ironclad Constructions/g, 'Aumana Consulting')
        .replace(/Verdana Wellness Spa/g, 'Revive MedSpa')
        .replace(/AgencyFlux/g, 'Aumana')
        .replace(/WEB DESIGN BY/g, '')
        .replace(/MADE BY/g, '');
      if (nv !== v) changes.push({ node: node, val: nv });
    }
    changes.forEach(function(c) { c.node.nodeValue = c.val; });
  }

  /* ════════════════════════════════════════
     8.  FAVICON
  ═════════════════════════════════════════ */
  function setFavicon() {
    document.querySelectorAll('link[rel*="icon"]').forEach(function(e) { e.remove(); });
    var l = document.createElement('link');
    l.rel = 'icon'; l.type = 'image/svg+xml'; l.href = './aumana-favicon.svg';
    document.head.appendChild(l);
  }

  /* ════════════════════════════════════════
     9.  MUTATION OBSERVER (Framer hydrates async)
  ═════════════════════════════════════════ */
  function watch() {
    var obs = new MutationObserver(function(mutations) {
      var needsLogo = false, needsBrands = false;
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(n) {
          if (n.nodeType !== 1) return;
          replaceText(n);
          if (n.querySelector && n.querySelector('[data-framer-name="Logo"]')) needsLogo = true;
          if (n.querySelector && n.querySelector('[data-framer-name="Trusted Brands"]')) needsBrands = true;
        });
      });
      if (needsLogo) setTimeout(replaceLogo, 50);
      if (needsBrands) setTimeout(replaceBrands, 50);
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  /* ════════════════════════════════════════
     INIT
  ═════════════════════════════════════════ */
  function run() {
    injectCSS();
    setFavicon();
    replaceText();

    // Retry multiple times since Framer hydrates in stages
    [100, 400, 900, 1800, 3500].forEach(function(delay) {
      setTimeout(function() {
        replaceLogo();
        replaceBrands();
        injectStats();
        injectReviews();
        replaceText();
      }, delay);
    });

    watch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
