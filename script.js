(function () {
  const cfg = window.FORME_CONFIG || {};
  const appStoreUrl = cfg.appStoreUrl || '#';
  const email = cfg.supportEmail || 'formevirtualcloset@gmail.com';

  document.querySelectorAll('[data-app-store]').forEach(a => {
    a.href = appStoreUrl;
    if (appStoreUrl === '#') {
      a.classList.add('disabled');
      a.addEventListener('click', e => e.preventDefault());
      a.title = 'Public App Store link coming soon';
    } else {
      a.target = '_blank';
      a.rel = 'noopener';
    }
  });
  document.querySelectorAll('[data-support-email]').forEach(a => {
    a.textContent = email;
    a.href = `mailto:${email}`;
  });
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));
})();
