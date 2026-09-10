(() => {
  const WHITE_LOGO = 'https://res.cloudinary.com/u7dpgaxh/image/upload/c_limit,w_640/f_auto/q_auto/v1789046452/1white_raeburn_engineering_logo.png';
  const WHITE_R = 'https://res.cloudinary.com/u7dpgaxh/image/upload/v1789046455/white_R_orb_logo.png';
  const WHITE_R_FAVICON = 'https://res.cloudinary.com/u7dpgaxh/image/upload/c_fit,h_128,w_128/f_png/q_auto/v1789046455/white_R_orb_logo.png';

  document.querySelectorAll('.site-logo-image').forEach((img) => {
    img.src = WHITE_LOGO;
  });
  document.querySelectorAll('.brand-r-image, .inline-r-image').forEach((img) => {
    img.src = WHITE_R;
  });
  document.querySelectorAll('link[rel="icon"]').forEach((link) => {
    link.type = 'image/png';
    link.href = WHITE_R_FAVICON;
  });
  document.querySelectorAll('link[rel="apple-touch-icon"]').forEach((link) => {
    link.href = WHITE_R;
  });

  const loadStyle = (href, version = '20260910-11') => {
    if (document.querySelector(`link[href^="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${href}?v=${version}`;
    document.head.appendChild(link);
  };

  const page = document.body?.dataset?.page;
  if (page === 'home') {
    loadStyle('/home-v3.css');
    loadStyle('/home-v4.css');
    loadStyle('/home-v5.css');
    loadStyle('/brand-assets.css');
  }
  if (page === 'tools') {
    loadStyle('/tools-v3.css');
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ambient = document.querySelector('.ambient');
  if (!reduced && ambient && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      ambient.style.background = `radial-gradient(560px circle at ${event.clientX}px ${event.clientY}px, rgba(92,103,255,.085), transparent 70%)`;
    }, { passive: true });
  }
})();