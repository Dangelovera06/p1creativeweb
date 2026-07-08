// ===== Universal Fades — interactions =====
(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  // Sticky nav background
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // Reveal on scroll — with hard failsafes so content is NEVER left invisible
  var revealEls = document.querySelectorAll(
    '.service, .section__head, .feature__text, .feature__img, .gallery__item, .stat, .about__inner, .visit__info, .visit__card'
  );
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showAll() { revealEls.forEach(function (el) { el.classList.add('in'); }); }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('reveal', 'in'); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });

    // Failsafe: reveal anything already within the viewport on any scroll/resize,
    // and force-reveal everything shortly after load so nothing can get stuck.
    function sweep() {
      var vh = window.innerHeight;
      revealEls.forEach(function (el) {
        if (el.classList.contains('in')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add('in');
      });
    }
    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep, { passive: true });
    window.addEventListener('load', sweep);
    sweep();
    setTimeout(sweep, 400);
    setTimeout(showAll, 2500);
  }

  // Count-up stats
  var counted = false;
  var stats = document.querySelectorAll('.stat__num');
  var statSection = document.querySelector('.stats');
  var statIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && !counted) {
        counted = true;
        stats.forEach(function (el) {
          var target = parseInt(el.getAttribute('data-count'), 10);
          var n = 0;
          var step = Math.max(1, Math.ceil(target / 40));
          var t = setInterval(function () {
            n += step;
            if (n >= target) { n = target; clearInterval(t); }
            el.textContent = n;
          }, 28);
        });
      }
    });
  }, { threshold: 0.4 });
  if (statSection) statIO.observe(statSection);

  // Footer year
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
