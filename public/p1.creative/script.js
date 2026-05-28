/* P1 Creative — page interactions */

(function () {
  "use strict";

  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if (prefersReduce || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }

  // FAQ single-open accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });

  // CTA click tracking
  document.querySelectorAll('a[href^="#cta"], .btn-primary').forEach((cta) => {
    cta.addEventListener("click", () => {
      if (typeof window.plausible === "function") {
        window.plausible("CTA click", { props: { label: cta.textContent.trim().slice(0, 40) } });
      }
    });
  });

  // Shrink Wistia play buttons to a small, faint circle (lives in shadow DOM)
  const PLAY_BTN_CSS =
    ".w-bpb-wrapper{width:54px!important;height:54px!important;margin:-27px 0 0 -27px!important;border-radius:50%!important;overflow:hidden!important;opacity:0.22!important;}" +
    ".w-big-play-button{width:100%!important;height:100%!important;}";
  function stylePlayButton(player) {
    const sr = player.shadowRoot;
    if (!sr || sr.getElementById("p1-play-btn")) return;
    const style = document.createElement("style");
    style.id = "p1-play-btn";
    style.textContent = PLAY_BTN_CSS;
    sr.appendChild(style);
  }
  let btnTries = 0;
  const btnTimer = setInterval(() => {
    document.querySelectorAll("wistia-player").forEach(stylePlayButton);
    if (++btnTries > 40) clearInterval(btnTimer);
  }, 250);
})();
