/* Costa Cafe Dolce Amore — site interactions More — site interactions */
(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile nav ---- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  function closeMenu() {
    if (!links) return;
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
  function openMenu() {
    links.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.contains("is-open") ? closeMenu() : openMenu();
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (
        links.classList.contains("is-open") &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ---- Sticky nav shadow on scroll ---- */
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Scroll spy: section nav + menu category nav ---- */
  function spy(linkSelector, sectionSelector, offset) {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(linkSelector));
    var map = {};
    navLinks.forEach(function (l) {
      var id = l.getAttribute("href");
      if (id && id.charAt(0) === "#") {
        var sec = document.querySelector(id);
        if (sec) map[id] = { link: l, section: sec };
      }
    });
    function update() {
      var pos = window.scrollY + offset;
      var currentId = null;
      Object.keys(map).forEach(function (id) {
        if (map[id].section.offsetTop <= pos) currentId = id;
      });
      navLinks.forEach(function (l) {
        l.classList.toggle("is-active", l.getAttribute("href") === currentId);
      });
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }
  spy(".nav__links a:not(.btn)", "section[id]", 140);

  /* ---- Photo lightbox (menu photos) ---- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var btnClose = document.getElementById("lightboxClose");
  var btnPrev = document.getElementById("lightboxPrev");
  var btnNext = document.getElementById("lightboxNext");

  if (lightbox) {
    var items = Array.prototype.slice.call(document.querySelectorAll(".taste, .gallery__item"));
    var sources = items.map(function (it) {
      return { src: it.getAttribute("data-full"), alt: it.querySelector("img").getAttribute("alt") };
    });
    var current = 0;
    var lastFocused = null;

    function show(i) {
      current = (i + sources.length) % sources.length;
      lightboxImg.src = sources[current].src;
      lightboxImg.alt = sources[current].alt;
    }
    function openLb(i) {
      lastFocused = document.activeElement;
      show(i);
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }
    function closeLb() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    items.forEach(function (it, i) {
      it.addEventListener("click", function () { openLb(i); });
    });
    btnClose.addEventListener("click", closeLb);
    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ---- Live "Open now" status (Mon–Sat 7a–7p, Sun 7a–2p) ---- */
  var statusEls = document.querySelectorAll("[data-open-status]");
  if (statusEls.length) {
    var now = new Date();
    var day = now.getDay();                 // 0 = Sun … 6 = Sat
    var mins = now.getHours() * 60 + now.getMinutes();
    var openMin = 7 * 60;
    var closeMin = (day === 0 ? 14 : 19) * 60;
    var isOpen = mins >= openMin && mins < closeMin;
    var label, closed;
    if (isOpen) {
      var ch = day === 0 ? 2 : 7;           // closing hour (12h)
      label = "Open now · until " + ch + " PM";
      closed = false;
    } else {
      label = mins < openMin ? "Opens today at 7 AM" : "Closed · opens 7 AM";
      closed = true;
    }
    statusEls.forEach(function (el) {
      el.textContent = label;
      el.classList.toggle("is-closed", closed);
    });
  }

  /* ---- Floating order button: reveal after scrolling past the hero ---- */
  var fab = document.querySelector(".fab");
  if (fab) {
    function fabToggle() {
      fab.classList.toggle("is-visible", window.scrollY > 620);
    }
    fabToggle();
    window.addEventListener("scroll", fabToggle, { passive: true });
  }
})();
