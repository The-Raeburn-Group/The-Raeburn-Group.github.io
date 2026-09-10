(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ambient = document.querySelector('.ambient');
  if (!reduced && ambient && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      ambient.style.background = `radial-gradient(560px circle at ${event.clientX}px ${event.clientY}px, rgba(92,103,255,.085), transparent 70%)`;
    }, { passive: true });
  }
})();