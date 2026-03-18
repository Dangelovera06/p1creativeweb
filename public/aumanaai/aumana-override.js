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
      html, body { background-color: ${D} !important; border-top: none !important; }

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
      [data-framer-name="Scroll"],
      [data-framer-name="container"]
        { background-color: ${D} !important; }

      /* ── NAV FIX (actual name is "Mobile Top") ── */
      /* Hide the 10px decorative top bar with blue gradient image */
      .framer-n3ctgz { display: none !important; }

      /* Fixed nav container - transparent wrapper */
      .framer-2x5gj1-container { background: transparent !important; }

      /* The actual nav component */
      [data-framer-name="Mobile Top"],
      .framer-xkNf7 {
        background-color: rgba(32,26,26,0.92) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border-top: none !important;
        border-bottom: 1px solid ${BORDER} !important;
        box-shadow: none !important;
      }
      /* Make all nav children backgrounds transparent */
      [data-framer-name="Mobile Top"] *,
      .framer-xkNf7 * {
        background-color: transparent !important;
        border-top: none !important;
      }
      /* Restore button background in nav */
      [data-framer-name="Mobile Top"] [data-framer-name="Primary"],
      [data-framer-name="Mobile Top"] [data-framer-name="Button"],
      .framer-xkNf7 [data-framer-name="Primary"] {
        background-color: ${L} !important;
        color: ${D} !important;
        border-radius: 99px !important;
      }

      /* ── Logo container: remove fixed 40×24px box constraint ── */
      .framer-15x9g5k,
      [data-framer-name="Logo"] {
        width: auto !important;
        height: auto !important;
        aspect-ratio: unset !important;
        min-width: unset !important;
        overflow: visible !important;
        position: relative !important;
      }
      /* Logo anchor — allow it to grow */
      .framer-u9kvgf,
      [data-framer-name="logo"] {
        width: auto !important;
        height: auto !important;
        overflow: visible !important;
        flex-shrink: 0 !important;
      }

      /* ── Framework Row cards — rounded, dark, bordered ── */
      [data-framer-name="Framework Row"],
      .framer-1g690uk {
        background-color: ${CARD} !important;
        border-radius: 28px !important;
        border: 1px solid ${BORDER} !important;
        overflow: hidden !important;
        padding: 0 !important;
      }

      /* ── Framework graphic panel: dark bg + grey/black gradient border ── */
      [data-framer-name="graphic"],
      .framer-1v4uzgz {
        background:
          radial-gradient(circle at 30% 25%, #2e2828 0%, ${D} 65%) padding-box,
          linear-gradient(145deg, #5a5a5a 0%, #1a1818 30%, #4a4a4a 55%, #1c1a1a 80%, #3a3a3a 100%) border-box !important;
        border: 1.5px solid transparent !important;
        overflow: hidden !important;
      }

      /* ── Chat bubble text — bigger size, wider container ── */
      .framer-lW3xC { width: 270px !important; }
      .framer-lW3xC .framer-1xgtqzl {
        --framer-font-size: 13px !important;
      }
      .framer-lW3xC .framer-1xgtqzl p,
      .framer-lW3xC .framer-1xgtqzl .framer-text {
        font-size: 13px !important;
        line-height: 1.6 !important;
      }
      .framer-lW3xC .framer-1ynvukd,
      .framer-lW3xC .framer-lunykw .framer-text {
        font-size: 11px !important;
      }
      [data-framer-name="graphic"] [data-framer-background-image-wrapper],
      [data-framer-name="M1"] [data-framer-background-image-wrapper],
      [data-framer-name="AI"] [data-framer-background-image-wrapper],
      [data-framer-name="Booked"] [data-framer-background-image-wrapper] {
        display: none !important;
      }
      [data-framer-name="M1"] {
        background: radial-gradient(circle at 30% 25%, #2e2828 0%, ${D} 65%) !important;
        border-color: ${BORDER} !important;
      }

      /* ── Benefits / Process / Variant cards — rounded ── */
      [data-framer-name="Benefits"],
      [data-framer-name="Variant 1"],
      [data-framer-name="Variant 2"],
      [data-framer-name="Variant 3"],
      [data-framer-name="Variant 4"],
      [data-framer-name="Variant 5"],
      [data-framer-name="Variant 6"] {
        background-color: ${CARD} !important;
        border-radius: 20px !important;
        border: 1px solid ${BORDER} !important;
      }

      /* ── Dashboard card ── */
      [data-framer-name="Dashboard"] {
        background-color: ${CARD} !important;
        border-radius: 24px !important;
        border: 1px solid ${BORDER} !important;
        overflow: hidden !important;
      }

      /* ── Results / testimonial cards ── */
      [data-framer-name="Results Box"] {
        background-color: transparent !important;
      }
      [data-framer-name="testimonial"] {
        background-color: ${CARD} !important;
        border-radius: 20px !important;
        border: 1px solid ${BORDER} !important;
      }

      /* ── FAQ accordion ── */
      [data-framer-name="Accordion Button"],
      [data-framer-name="FAQs"] > * > * {
        border-radius: 14px !important;
        border: 1px solid ${BORDER} !important;
        overflow: hidden !important;
      }

      /* ── Catch all remaining black/near-black elements ── */
      [style*="background-color: rgb(0, 0, 0)"],
      [style*="background-color: rgb(15, 15, 15)"],
      [style*="background-color: rgb(17, 17, 17)"],
      [style*="background-color: rgb(33, 33, 33)"],
      [style*="background: rgb(0, 0, 0)"]
        { background-color: ${D} !important; }

      /* ── Blue → Taupe everywhere ── */
      [style*="color: rgb(0, 153, 255)"] { color: ${T} !important; }
      [style*="background-color: rgb(0, 153, 255)"] { background-color: ${T} !important; }
      [style*="border-color: rgb(0, 153, 255)"] { border-color: ${BORDER} !important; }
      * { --framer-link-text-color: ${T} !important; }

      /* ── Buttons ── */
      [data-framer-name="Primary"],
      [data-framer-name="Button"],
      a[class*="framer"][style*="rgb(0, 153, 255)"]
        { background-color: ${L} !important; color: ${D} !important; border-radius: 99px !important; }

      /* ── Hero background image → hide, replace with Aumana dark ── */
      .framer-WxcRn { background-color: ${D} !important; }
      .framer-WxcRn .framer-15asv5r { display: none !important; }
      .framer-WxcRn .framer-fcbkq9 { background: ${D} !important; opacity: 1 !important; }
      [data-framer-name="Hero"] [data-framer-background-image-wrapper],
      [data-framer-name="Main"] [data-framer-background-image-wrapper] {
        display: none !important;
      }

      /* ── Footer ── */
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
     Tapered rays: pointed near center, rounded outer tip
     Matches the official Aumana starburst logo
  ═════════════════════════════════════════ */
  function makeSunSVG(size) {
    size = size || 26;
    var n = 34;
    var cx = size / 2, cy = size / 2;
    var paths = '';
    for (var i = 0; i < n; i++) {
      var a = (i * 2 * Math.PI / n) - Math.PI / 2;
      var pa = a + Math.PI / 2; // perpendicular
      // Alternate: 2 long rays then 1 short
      var isLong = (i % 3 !== 2);
      var rIn   = size * 0.09;
      var rOut  = size * (isLong ? 0.83 : 0.60);
      var maxW  = size * (isLong ? 0.030 : 0.022);
      // Inner tip (pointed)
      var tx = cx + rIn * Math.cos(a), ty = cy + rIn * Math.sin(a);
      // Max-width midpoint (60% out)
      var rMid = rIn + (rOut - rIn) * 0.60;
      var mx = cx + rMid * Math.cos(a), my = cy + rMid * Math.sin(a);
      var mlx = mx + maxW * Math.cos(pa), mly = my + maxW * Math.sin(pa);
      var mrx = mx - maxW * Math.cos(pa), mry = my - maxW * Math.sin(pa);
      // Outer cap
      var capHW = maxW * 0.72;
      var ox = cx + rOut * Math.cos(a), oy = cy + rOut * Math.sin(a);
      var clx = ox + capHW * Math.cos(pa), cly = oy + capHW * Math.sin(pa);
      var crx = ox - capHW * Math.cos(pa), cry = oy - capHW * Math.sin(pa);
      var op = isLong ? '0.82' : '0.48';
      var col = (i % 9 === 0) ? W : L;
      paths += '<path d="' +
        'M ' + tx.toFixed(2) + ',' + ty.toFixed(2) +
        ' Q ' + mlx.toFixed(2) + ',' + mly.toFixed(2) + ' ' + clx.toFixed(2) + ',' + cly.toFixed(2) +
        ' A ' + capHW.toFixed(2) + ',' + capHW.toFixed(2) + ' 0 0 0 ' + crx.toFixed(2) + ',' + cry.toFixed(2) +
        ' Q ' + mrx.toFixed(2) + ',' + mry.toFixed(2) + ' ' + tx.toFixed(2) + ',' + ty.toFixed(2) +
        ' Z" fill="' + col + '" opacity="' + op + '"/>';
    }
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" fill="none" xmlns="http://www.w3.org/2000/svg">' + paths + '</svg>';
  }

  /* ════════════════════════════════════════
     3.  REPLACE LOGO
  ═════════════════════════════════════════ */
  function replaceLogo() {
    var logoEls = document.querySelectorAll('[data-framer-name="Logo"], [data-framer-name="logo"]');
    logoEls.forEach(function(el) {
      var anchor = el.tagName === 'A' ? el : el.closest('a');
      if (!anchor) anchor = el.parentElement;
      if (!anchor || anchor._aumanaLogoSet) return;
      anchor._aumanaLogoSet = true;

      // Reset the anchor's own size constraints
      anchor.style.cssText += ';width:auto!important;height:auto!important;overflow:visible!important;flex-shrink:0!important;';

      // Reset the Logo inner box constraints too
      var logoBox = anchor.querySelector('[data-framer-name="Logo"]') || (el.getAttribute('data-framer-name') === 'Logo' ? el : null);
      if (logoBox) {
        logoBox.style.cssText += ';width:auto!important;height:auto!important;aspect-ratio:unset!important;overflow:visible!important;position:static!important;';
      }

      anchor.innerHTML =
        '<div style="display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none;">' +
          makeSunSVG(30) +
          '<span style="font-family:' + FONT + ';font-weight:700;font-size:16px;color:' + W + ';letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;">AUMANA</span>' +
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
