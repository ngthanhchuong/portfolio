// Toggle a "scrolled" state on the header so it morphs into a floating pill
// once the user scrolls away from the top of the page.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var THRESHOLD = 24; // px scrolled before the pill appears

  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > THRESHOLD);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
}());
