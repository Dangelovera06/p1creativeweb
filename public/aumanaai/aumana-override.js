(function () {
  /* ── Aumana brand tokens ── */
  var DARK = '#201a1a';
  var CARD = '#2a2222';
  var TAUPE = '#a79c8e';
  var LINEN = '#d2c6b6';
  var WHITE = '#ffffff';

  /* ── Sun-ray SVG logo ── */
  var SUN_SVG = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    (function () {
      var lines = '';
      for (var i = 0; i < 24; i++) {
        var angle = (i * 360 / 24) * Math.PI / 180;
        var x1 = (14 + 6 * Math.cos(angle)).toFixed(2);
        var y1 = (14 + 6 * Math.sin(angle)).toFixed(2);
        var x2 = (14 + 12 * Math.cos(angle)).toFixed(2);
        var y2 = (14 + 12 * Math.sin(angle)).toFixed(2);
        var op = (i % 3 === 0) ? '0.9' : '0.65';
        lines += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + LINEN + '" stroke-width="0.9" stroke-linecap="round" opacity="' + op + '"/>';
      }
      return lines;
    })() +
    '</svg>';

  var LOGO_HTML = '<div style="display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="window.location=\'./\'">' +
    SUN_SVG +
    '<span style="font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:15px;color:' + WHITE + ';letter-spacing:0.18em;text-transform:uppercase;">AUMANA</span>' +
    '</div>';

  /* ── Favicon ── */
  function setFavicon() {
    document.querySelectorAll('link[rel*="icon"]').forEach(function (el) { el.remove(); });
    var lnk = document.createElement('link');
    lnk.rel = 'icon';
    lnk.type = 'image/svg+xml';
    lnk.href = './aumana-favicon.svg';
    document.head.appendChild(lnk);
  }

  /* ── Replace logo containers ── */
  function replaceLogo() {
    document.querySelectorAll('[data-framer-name="Logo"], [data-framer-name="logo"]').forEach(function (el) {
      var wrapper = el.closest('a') || el;
      var parent = wrapper.parentElement;
      if (!parent) return;
      var div = document.createElement('div');
      div.innerHTML = LOGO_HTML;
      div.style.cssText = 'display:flex;align-items:center;z-index:100;';
      parent.replaceChild(div, wrapper);
    });
  }

  /* ── Replace AIC text nodes ── */
  function replaceText(root) {
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    var changed = [];
    while ((node = walker.nextNode())) {
      if (/\bAIC\b/.test(node.nodeValue)) {
        changed.push({ node: node, val: node.nodeValue.replace(/\bAIC\b/g, 'AUMANA') });
      }
      if (/AI Consultin\b/.test(node.nodeValue)) {
        changed.push({ node: node, val: node.nodeValue.replace(/AI Consultin\b/g, 'Aumana Consulting') });
      }
      if (/AI consulting\?/.test(node.nodeValue)) {
        changed.push({ node: node, val: node.nodeValue.replace(/AI consulting\?/g, 'AI automation?') });
      }
    }
    changed.forEach(function (c) { c.node.nodeValue = c.val; });
  }

  /* ── Inject Aumana navbar style overlay ── */
  function injectNavStyle() {
    var style = document.createElement('style');
    style.textContent = [
      /* force dark bg on nav */
      '[data-framer-name="Main"], nav, header { background-color: ' + DARK + ' !important; }',
      /* override any remaining pure-black backgrounds */
      'body { background-color: ' + DARK + ' !important; }',
      /* taupe borders on cards */
      '[data-framer-name="Framework Row"], [data-framer-name="Results Box"] { border-color: rgba(167,156,142,0.15) !important; }',
      /* footer */
      '[data-framer-name="Footer"] { background-color: ' + DARK + ' !important; border-top: 1px solid rgba(167,156,142,0.1) !important; }'
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ── MutationObserver to catch Framer's dynamic renders ── */
  function watchMutations() {
    var obs = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === 1) {
            replaceText(n);
            /* re-check logo */
            if (n.querySelector && n.querySelector('[data-framer-name="Logo"]')) {
              setTimeout(replaceLogo, 50);
            }
          }
        });
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  /* ── Run ── */
  function init() {
    setFavicon();
    injectNavStyle();
    replaceText();
    replaceLogo();
    watchMutations();
    /* retry after Framer finishes hydrating */
    setTimeout(function () { replaceText(); replaceLogo(); }, 500);
    setTimeout(function () { replaceText(); replaceLogo(); }, 1500);
    setTimeout(function () { replaceText(); replaceLogo(); }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
