// Experience — scroll-driven pinned timeline. The section is made tall here; as
// it scrolls past, the inner pin sticks to the viewport and the card row slides
// left in lockstep with vertical scroll. The lime timeline lead fills across,
// and each year lights up as its card reaches the active line. Disabled below
// 900px (and without JS), where the row falls back to a plain horizontal scroll.
(function () {
  var section = document.querySelector('.experience');
  if (!section) return;
  var track = section.querySelector('.experience__track');
  var scroller = section.querySelector('.experience__scroller');
  var progress = section.querySelector('.experience__progress');
  var timeline = section.querySelector('.experience__timeline');
  var cards = Array.prototype.slice.call(section.querySelectorAll('.exp-card'));
  if (!track || !scroller) return;

  var BASE = 0.06;     // fraction of lime shown before any scrolling
  var ACTIVATE = 0.5;  // a year lights up once its card centre passes this line
  var maxTranslate = 0;
  var enabled = false;
  var ticking = false;

  var mq = window.matchMedia('(min-width: 901px)');

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  function measure() {
    enabled = mq.matches;
    if (!enabled) {
      // Hand layout back to CSS (plain horizontal-scroll fallback).
      section.style.height = '';
      scroller.style.transform = '';
      return;
    }
    maxTranslate = Math.max(0, scroller.scrollWidth - track.clientWidth);
    // Don't over-scroll past the final card: if it's wider than the track it
    // would otherwise clip on the left, so cap the travel to land its left edge
    // just inside the viewport (a no-op once the track is wide enough for it).
    var finalCard = section.querySelector('.exp-card--final');
    if (finalCard) {
      maxTranslate = Math.min(maxTranslate, Math.max(0, finalCard.offsetLeft - 40));
    }
    // 1:1 mapping — scroll down N px, cards slide left N px.
    section.style.height = (window.innerHeight + maxTranslate) + 'px';
    // Drop the timeline just under the year row.
    var firstYear = section.querySelector('.exp-card__year');
    if (timeline && firstYear) {
      var y = firstYear.getBoundingClientRect();
      var t = track.getBoundingClientRect();
      timeline.style.top = (y.bottom - t.top + 24) + 'px';
    }
  }

  function update() {
    ticking = false;
    if (!enabled) return;
    var denom = section.offsetHeight - window.innerHeight;
    var p = denom > 0 ? clamp(-section.getBoundingClientRect().top / denom, 0, 1) : 0;

    scroller.style.transform = 'translate3d(' + (-p * maxTranslate).toFixed(1) + 'px,0,0)';
    if (progress) progress.style.width = ((BASE + (1 - BASE) * p) * 100).toFixed(2) + '%';

    // Light each year green once its card centre crosses the active line.
    var line = track.clientWidth * ACTIVATE;
    var trackLeft = track.getBoundingClientRect().left;
    for (var i = 0; i < cards.length; i++) {
      var year = cards[i].querySelector('.exp-card__year');
      if (!year) continue;
      var cr = cards[i].getBoundingClientRect();
      var centre = (cr.left + cr.width / 2) - trackLeft;
      year.classList.toggle('is-active', centre <= line);
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }

  function onResize() { measure(); update(); }

  measure();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  // Card widths can shift once fonts/images settle.
  window.addEventListener('load', onResize);
}());
