// Reveal [data-reveal] elements as they scroll into view by toggling
// `.is-revealed`. The hidden start-state lives behind a `.js` class (added in
// index.html) so content is always visible when scripting is unavailable.
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  // No observer support (or it never fires): just show everything.
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-revealed'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  els.forEach(function (el) { io.observe(el); });
}());
