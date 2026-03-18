(function () {
  /* ── Brand Tokens ── */
  var D = '#201a1a', CARD = '#2a2222', CARD2 = '#252020',
      T = '#a79c8e', L = '#d2c6b6', W = '#ffffff',
      BORDER = 'rgba(167,156,142,0.18)', BORDERL = 'rgba(167,156,142,0.10)';
  var FONT = "'Space Grotesk', sans-serif";

  /* ════════════════════════════════════════
     1.  INJECT CSS
  ═════════════════════════════════════════ */
  function injectCSS() {
    var s = document.createElement('style');
    s.id = 'aumana-global';
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

      /* ════ OVERRIDE ALL FRAMER CSS TOKENS ════
         This is the root fix — replaces all black/grey tokens with Aumana palette.
         Every Framer component that uses these tokens will automatically update. */
      body {
        background-color: ${D};
        /* Background tokens */
        --token-f0d82284-1bdb-4217-8712-49f49232c61e: ${D};
        --token-f3162355-178b-4392-8762-e9117bec3c11: ${CARD};
        --token-8631c71a-9144-461a-9f81-e70aca350629: ${D}f2;
        /* Border tokens */
        --token-eb886c4a-da1e-4c4a-a43f-6e3075c86cbc: ${BORDER};
        --token-33b10254-3b91-4509-a4f2-d7f991d7e507: ${BORDER};
        --token-dba99623-581f-4bfc-9e8a-9ad9917909ae: ${BORDERL};
        --token-b9d4b451-944c-48a7-8ae7-e419f413cc6a: ${BORDERL};
        /* Text / accent tokens */
        --token-685f5e1b-3d2a-4c61-8c5e-1e4438849d78: ${L};
        --token-37395742-0754-4478-b2fd-b2f291033e9e: ${T};
        --token-38458496-5ae2-4b42-8bcc-1c95cd689547: ${T};
        --token-431c75b2-ce4c-4ba5-b96e-65c36e23d32a: ${T};
        /* Link color */
        --framer-link-text-color: ${T};
      }

      /* ════ PAGE & SECTION BACKGROUNDS ════ */
      html, body,
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
      [data-framer-name="container"],
      [data-framer-name="Dashboard"],
      [data-framer-name="Content"]
        { background-color: ${D} !important; border-top: none !important; }

      /* ════ NAV — actual name is "Mobile Top" ════ */
      /* Kill the 10px decorative bar with the original blue image */
      .framer-n3ctgz { display: none !important; }
      .framer-2x5gj1-container { background: transparent !important; }

      [data-framer-name="Mobile Top"],
      .framer-xkNf7 {
        background-color: rgba(32,26,26,0.93) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border-top: none !important;
        border-bottom: 1px solid ${BORDER} !important;
        box-shadow: none !important;
      }
      [data-framer-name="Mobile Top"] *,
      .framer-xkNf7 * {
        background-color: transparent !important;
        border-top: none !important;
      }
      /* Restore nav button */
      [data-framer-name="Mobile Top"] [data-framer-name="Primary"],
      [data-framer-name="Mobile Top"] [data-framer-name="Button"],
      .framer-xkNf7 [data-framer-name="Primary"] {
        background-color: ${L} !important;
        color: ${D} !important;
        border-radius: 99px !important;
      }

      /* ════ FRAMEWORK ROW CARDS ════ */
      [data-framer-name="Framework Row"],
      .framer-1g690uk {
        background-color: ${CARD} !important;
        border-radius: 28px !important;
        border: 1px solid ${BORDER} !important;
        overflow: hidden !important;
        padding: 0 !important;
      }

      /* Graphic panel — gradient bg + metallic gradient border */
      [data-framer-name="graphic"],
      .framer-1v4uzgz {
        background:
          radial-gradient(circle at 30% 25%, #2e2828 0%, ${D} 65%) padding-box,
          linear-gradient(145deg, #5a5a5a 0%, #1a1818 30%, #4a4a4a 55%, #1c1a1a 80%, #3a3a3a 100%) border-box !important;
        border: 1.5px solid transparent !important;
        overflow: hidden !important;
      }
      [data-framer-name="graphic"] [data-framer-background-image-wrapper],
      [data-framer-name="M1"] [data-framer-background-image-wrapper],
      [data-framer-name="AI"] [data-framer-background-image-wrapper],
      [data-framer-name="Booked"] [data-framer-background-image-wrapper]
        { display: none !important; }

      /* ════ CHAT BUBBLES ════ */
      .framer-lW3xC { width: 270px !important; }
      .framer-lW3xC .framer-1xgtqzl p,
      .framer-lW3xC .framer-1xgtqzl .framer-text {
        font-size: 13px !important;
        line-height: 1.6 !important;
      }
      .framer-lW3xC .framer-1ynvukd,
      .framer-lW3xC .framer-lunykw .framer-text {
        font-size: 11px !important;
      }

      /* ════ DASHBOARD M1 MOCKUP ════ */
      [data-framer-name="M1"],
      .framer-KPdzG {
        background: radial-gradient(circle at 30% 20%, #2e2828 0%, ${D} 70%) !important;
        border-radius: 24px !important;
        border: 1px solid ${BORDER} !important;
        overflow: hidden !important;
      }

      /* ════ RESULTS / STATS CARDS ════ */
      /* framer-w9mk5u = the stat/logo cards inside Results Box */
      .framer-w9mk5u {
        background-color: ${CARD} !important;
        border-radius: 20px !important;
        border: 1px solid ${BORDER} !important;
        overflow: hidden !important;
      }

      /* ════ BENEFITS / VARIANT / PROCESS CARDS ════ */
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

      /* ════ TESTIMONIALS ════ */
      [data-framer-name="testimonial"] {
        background-color: ${CARD} !important;
        border-radius: 20px !important;
        border: 1px solid ${BORDER} !important;
      }

      /* ════ FAQ ════ */
      [data-framer-name="Accordion Button"] {
        border-radius: 14px !important;
        border: 1px solid ${BORDER} !important;
        background-color: ${CARD} !important;
      }

      /* ════ FOOTER ════ */
      [data-framer-name="Footer"] {
        background-color: ${D} !important;
        border-top: 1px solid ${BORDER} !important;
      }

      /* ════ HERO BACKGROUND ════ */
      .framer-WxcRn { background-color: ${D} !important; }
      .framer-WxcRn .framer-15asv5r { display: none !important; }
      .framer-WxcRn .framer-fcbkq9 { background: ${D} !important; opacity: 1 !important; }
      [data-framer-name="Hero"] [data-framer-background-image-wrapper],
      [data-framer-name="Main"] [data-framer-background-image-wrapper]
        { display: none !important; }

      /* ════ CATCH-ALL remaining blacks ════ */
      [style*="background-color: rgb(0, 0, 0)"],
      [style*="background-color: rgb(15, 15, 15)"],
      [style*="background-color: rgb(17, 17, 17)"],
      [style*="background-color: rgb(33, 33, 33)"]
        { background-color: ${D} !important; }
      [style*="color: rgb(0, 153, 255)"] { color: ${T} !important; }
      [style*="background-color: rgb(0, 153, 255)"] { background-color: ${T} !important; }
      [style*="border-color: rgb(0, 153, 255)"] { border-color: ${BORDER} !important; }

      /* ════ BUTTONS ════ */
      [data-framer-name="Primary"],
      [data-framer-name="Button"]
        { background-color: ${L} !important; color: ${D} !important; border-radius: 99px !important; }

      /* ════ INJECTED BRANDS ════ */
      #aumana-brands {
        display: flex !important; flex-wrap: wrap !important;
        justify-content: center !important; align-items: center !important;
        gap: 32px 48px !important; padding: 40px 24px !important;
        background: ${D} !important;
        border-top: 1px solid ${BORDER} !important;
        border-bottom: 1px solid ${BORDER} !important;
      }
      #aumana-brands .ab-logo {
        display: flex; align-items: center; gap: 7px;
        font-family: ${FONT}; font-size: 13px; font-weight: 600;
        color: ${T}; opacity: 0.65; letter-spacing: 0.04em; transition: opacity 0.2s;
      }
      #aumana-brands .ab-logo:hover { opacity: 1; }

      /* ════ INJECTED REVIEWS ════ */
      #aumana-reviews {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
        gap: 20px !important; margin-top: 24px !important;
      }
      .ar-card {
        background: ${CARD} !important; border: 1px solid ${BORDER} !important;
        border-radius: 20px !important; padding: 28px !important;
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

      /* ════ INJECTED STATS ════ */
      #aumana-stats {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important; margin: 24px auto 0 !important;
        max-width: 1100px !important; padding: 0 20px !important;
        box-sizing: border-box !important;
      }
      @media (min-width: 640px) {
        #aumana-stats { grid-template-columns: repeat(4, 1fr) !important; }
      }
      .as-card {
        background: ${CARD2} !important; border: 1px solid ${BORDER} !important;
        border-radius: 20px !important; padding: 26px 22px !important;
        font-family: ${FONT} !important;
      }
      .as-num {
        font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 700;
        background: linear-gradient(135deg, ${L} 0%, ${T} 55%, ${W} 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; line-height: 1; margin-bottom: 10px;
      }
      .as-label { font-size: 12px; color: ${T}; font-weight: 300; line-height: 1.55; }

      /* ════ HIDE JUST THE LOGO IMAGE BOX (not the anchor itself) ════ */
      [data-framer-name="Logo"],
      .framer-15x9g5k { display: none !important; }

      /* ════ AUMANA LOGO ANCHOR — strip all Framer sizing constraints ════ */
      a[data-framer-name="logo"] {
        display: flex !important; align-items: center !important;
        gap: 10px !important; text-decoration: none !important;
        width: auto !important; height: auto !important;
        overflow: visible !important; flex-shrink: 0 !important;
        padding: 0 !important; margin: 0 !important;
        background: transparent !important; border: none !important;
      }
    `;
    document.head.appendChild(s);
  }

  /* ════════════════════════════════════════
     2.  AUMANA SUN LOGO SVG — tapered rays
  ═════════════════════════════════════════ */
  function makeSunSVG(size) {
    size = size || 30;
    var n = 34, cx = size / 2, cy = size / 2, paths = '';
    for (var i = 0; i < n; i++) {
      var a = (i * 2 * Math.PI / n) - Math.PI / 2;
      var pa = a + Math.PI / 2;
      var isLong = (i % 3 !== 2);
      var rIn = size * 0.09, rOut = size * (isLong ? 0.83 : 0.60);
      var maxW = size * (isLong ? 0.030 : 0.022);
      var tx = cx + rIn * Math.cos(a), ty = cy + rIn * Math.sin(a);
      var rMid = rIn + (rOut - rIn) * 0.60;
      var mx = cx + rMid * Math.cos(a), my = cy + rMid * Math.sin(a);
      var mlx = mx + maxW * Math.cos(pa), mly = my + maxW * Math.sin(pa);
      var mrx = mx - maxW * Math.cos(pa), mry = my - maxW * Math.sin(pa);
      var capHW = maxW * 0.72;
      var ox = cx + rOut * Math.cos(a), oy = cy + rOut * Math.sin(a);
      var clx = ox + capHW * Math.cos(pa), cly = oy + capHW * Math.sin(pa);
      var crx = ox - capHW * Math.cos(pa), cry = oy - capHW * Math.sin(pa);
      var col = (i % 9 === 0) ? W : L;
      var op = isLong ? '0.85' : '0.50';
      paths += '<path d="M ' + tx.toFixed(2) + ',' + ty.toFixed(2) +
        ' Q ' + mlx.toFixed(2) + ',' + mly.toFixed(2) + ' ' + clx.toFixed(2) + ',' + cly.toFixed(2) +
        ' A ' + capHW.toFixed(2) + ',' + capHW.toFixed(2) + ' 0 0 0 ' + crx.toFixed(2) + ',' + cry.toFixed(2) +
        ' Q ' + mrx.toFixed(2) + ',' + mry.toFixed(2) + ' ' + tx.toFixed(2) + ',' + ty.toFixed(2) +
        ' Z" fill="' + col + '" opacity="' + op + '"/>';
    }
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size +
      '" fill="none" xmlns="http://www.w3.org/2000/svg">' + paths + '</svg>';
  }

  /* ════════════════════════════════════════
     3.  INJECT LOGO — create fresh element, hide original
         Avoids ALL Framer CSS class constraints
  ═════════════════════════════════════════ */
  function replaceLogo() {
    // Work directly on the existing anchor – no sibling injection needed
    var anchor = document.querySelector('a[data-framer-name="logo"]');
    if (!anchor || anchor._aumanaLogoSet) return;
    anchor._aumanaLogoSet = true;

    // Blow away all Framer inline constraints with our own inline styles
    anchor.removeAttribute('style');
    anchor.style.cssText = [
      'display:flex',
      'align-items:center',
      'gap:10px',
      'text-decoration:none',
      'cursor:pointer',
      'width:auto',
      'height:auto',
      'overflow:visible',
      'flex-shrink:0',
      'background:transparent',
      'border:none',
      'padding:0',
      'position:relative',
      'z-index:10'
    ].join(';');

    // Replace inner content – removes constrained image div completely
    anchor.innerHTML =
      makeSunSVG(30) +
      '<span style="font-family:' + FONT + ';font-weight:700;font-size:16px;color:#ffffff;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;">AUMANA</span>';
  }

  /* ════════════════════════════════════════
     4.  REPLACE TRUSTED BRANDS
  ═════════════════════════════════════════ */
  function replaceBrands() {
    var tb = document.querySelector('[data-framer-name="Trusted Brands"]');
    if (!tb || tb._aumanaSet) return;
    tb._aumanaSet = true;
    var div = document.createElement('div');
    div.id = 'aumana-brands';
    [
      {name:'Zapier',icon:'⚡'}, {name:'VAPI',icon:'◎'}, {name:'Airtable',icon:'⊞'},
      {name:'HubSpot',icon:'⬡'}, {name:'Make',icon:'◈'}, {name:'OpenAI',icon:'○'},
      {name:'Calendly',icon:'▣'}, {name:'GHL',icon:'△'}
    ].forEach(function(b) {
      var d = document.createElement('div');
      d.className = 'ab-logo';
      d.innerHTML = '<span style="font-size:16px;">' + b.icon + '</span><span>' + b.name + '</span>';
      div.appendChild(d);
    });
    tb.parentNode.insertBefore(div, tb);
    tb.style.display = 'none';
  }

  /* ════════════════════════════════════════
     5.  INJECT STATS
  ═════════════════════════════════════════ */
  function injectStats() {
    var done = false;
    document.querySelectorAll('[data-framer-name="Results Box"], [data-framer-name="Results"]').forEach(function(el) {
      if (done || el._aumanaStats) return;
      done = true; el._aumanaStats = true;
      var grid = document.createElement('div');
      grid.id = 'aumana-stats';
      [{v:'3x',l:'Average lead conversion lift within 60 days'},
       {v:'80%',l:'Reduction in manual follow-up time'},
       {v:'24/7',l:'AI coverage with zero added headcount'},
       {v:'14 days',l:'Avg. time from kickoff to live deployment'}
      ].forEach(function(s) {
        var c = document.createElement('div');
        c.className = 'as-card';
        c.innerHTML = '<div class="as-num">' + s.v + '</div><div class="as-label">' + s.l + '</div>';
        grid.appendChild(c);
      });
      el.after(grid);
    });
  }

  /* ════════════════════════════════════════
     6.  INJECT REVIEWS
  ═════════════════════════════════════════ */
  function injectReviews() {
    var allText = document.querySelectorAll('h1,h2,h3,p,span');
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
    [
      {stars:5, quote:'The AI receptionist handles 90% of our inbound calls. Our team spends zero time on scheduling — it just happens automatically. No-show rate dropped 40% in the first month.',
       name:'Marcus Reynolds', role:'Founder', company:'Revive MedSpa',
       avatar:'https://randomuser.me/api/portraits/men/32.jpg', logo:'◎ MedSpa'},
      {stars:5, quote:'Three months in, we doubled booked consultations without adding a single team member. The system qualifies, books, and reminds clients automatically.',
       name:'Priya Sharma', role:'CEO', company:'LuxDerm Clinics',
       avatar:'https://randomuser.me/api/portraits/women/44.jpg', logo:'⬡ LuxDerm'},
      {stars:5, quote:"Two weeks from kickoff to live. Full visibility into every call and message. ROI was clear within 30 days — I can't imagine running the agency without it.",
       name:'Jordan Kellerman', role:'Operations Director', company:'Scale Agency',
       avatar:'https://randomuser.me/api/portraits/men/75.jpg', logo:'△ Scale'}
    ].forEach(function(r) {
      var card = document.createElement('div');
      card.className = 'ar-card';
      card.innerHTML = '<div class="ar-stars">' + '★'.repeat(r.stars) + '</div>' +
        '<p class="ar-quote">"' + r.quote + '"</p>' +
        '<hr class="ar-divider">' +
        '<div class="ar-profile">' +
          '<img class="ar-avatar" src="' + r.avatar + '" alt="' + r.name + '">' +
          '<div><div class="ar-name">' + r.name + '</div>' +
          '<div class="ar-role">' + r.role + ' · ' + r.company + '</div>' +
          '<div class="ar-company">' + r.logo + '</div></div>' +
        '</div>';
      grid.appendChild(card);
    });
    section.after(grid);
  }

  /* ════════════════════════════════════════
     7.  WORKFLOW STEP ICONS
         Replace Voice Agent circle with Aumana sun logo
  ═════════════════════════════════════════ */
  function replaceWorkflowIcons() {
    // Find every bubble component rendered on page
    document.querySelectorAll('[data-framer-name="Variant 1"]').forEach(function(bubble) {
      if (bubble._aumanaIconSet) return;

      // Find the sender name text inside this bubble
      var nameEl = bubble.querySelector('.framer-1ynvukd');
      if (!nameEl) return;
      var label = nameEl.textContent.trim();

      // Only target Voice Agent bubble
      if (label !== 'Voice Agent') return;
      bubble._aumanaIconSet = true;

      // Find the icon circle element
      var iconEl = bubble.querySelector('.framer-exm5is, .framer-IUAWB');
      if (!iconEl) return;

      // Hide the background image
      var imgWrapper = iconEl.querySelector('[data-framer-background-image-wrapper]');
      if (imgWrapper) imgWrapper.style.display = 'none';

      // Inject Aumana sun SVG into the circle
      iconEl.style.overflow = 'visible';
      iconEl.style.background = 'transparent';
      var svgWrap = document.createElement('div');
      svgWrap.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;';
      svgWrap.innerHTML = makeSunSVG(17);
      iconEl.appendChild(svgWrap);
    });
  }

  /* ════════════════════════════════════════
     9.  TEXT REPLACEMENTS
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
      if (nv !== v) changes.push({node: node, val: nv});
    }
    changes.forEach(function(c) { c.node.nodeValue = c.val; });
  }

  /* ════════════════════════════════════════
     8.  FAVICON
  ═════════════════════════════════════════ */
  function setFavicon() {
    document.querySelectorAll('link[rel*="icon"]').forEach(function(e) { e.remove(); });
    var svg = makeSunSVG(32);
    var encoded = 'data:image/svg+xml;base64,' + btoa(svg);
    var l = document.createElement('link');
    l.rel = 'icon'; l.type = 'image/svg+xml'; l.href = encoded;
    document.head.appendChild(l);
  }

  /* ════════════════════════════════════════
     9.  MUTATION OBSERVER
  ═════════════════════════════════════════ */
  function watch() {
    var obs = new MutationObserver(function(mutations) {
      var needsLogo = false, needsBrands = false;
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(n) {
          if (n.nodeType !== 1) return;
          replaceText(n);
          if (n.querySelector && n.querySelector('[data-framer-name="left"]')) needsLogo = true;
          if (n.querySelector && n.querySelector('[data-framer-name="Trusted Brands"]')) needsBrands = true;
        });
      });
      if (needsLogo) setTimeout(replaceLogo, 60);
      if (needsBrands) setTimeout(replaceBrands, 60);
    });
    obs.observe(document.body, {childList: true, subtree: true});
  }

  /* ════════════════════════════════════════
     INIT
  ═════════════════════════════════════════ */
  function run() {
    injectCSS();
    setFavicon();
    replaceText();
    [100, 400, 900, 1800, 3500].forEach(function(delay) {
      setTimeout(function() {
        replaceLogo();
        replaceBrands();
        injectStats();
        injectReviews();
        replaceWorkflowIcons();
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
