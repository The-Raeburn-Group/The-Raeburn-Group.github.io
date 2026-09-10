(() => {
  const isHome = document.body?.dataset?.page === 'home';

  if (isHome) {
    const loadStyle = (href) => {
      if (document.querySelector(`link[href^="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${href}?v=20260910-4`;
      document.head.appendChild(link);
    };

    loadStyle('/home-v3.css');
    loadStyle('/home-v4.css');
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ambient = document.querySelector('.ambient');
  if (!reduced && ambient && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      ambient.style.background = `radial-gradient(560px circle at ${event.clientX}px ${event.clientY}px, rgba(92,103,255,.085), transparent 70%)`;
    }, { passive: true });
  }
})();