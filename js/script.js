// Sticky Nav
window.addEventListener('scroll', event => {
  const height = 1000;
  const { scrollTop } = event.target.scrollingElement;
  document.querySelector('.header__navegacion').classList.toggle('sticky-nav', scrollTop >= height);
});
