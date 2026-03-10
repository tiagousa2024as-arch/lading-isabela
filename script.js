/**
 * Premium Landing — Pensão Alimentícia
 * Mobile menu, scroll reveal, footer year
 */

(function () {
  'use strict';

  // ----- Footer year -----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Mobile menu -----
  var menuBtn = document.querySelector('.header__menu');
  var mobileNav = document.querySelector('.header__mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menu');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Scroll reveal (section titles + main content blocks) -----
  var revealEls = document.querySelectorAll(
    '.section__title, .section__subtitle, .pain-grid, .stats-grid, .profile-block, .testimonials-grid, .process-list, .diff-grid, .cta__title, .cta__subtitle'
  );
  var revealClass = 'revealed';

  function reveal() {
    var viewportH = window.innerHeight;
    var trigger = viewportH * 0.82;
    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < trigger && rect.bottom > 0) {
        el.classList.add(revealClass);
      }
    });
  }

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });

  window.addEventListener('scroll', function () {
    requestAnimationFrame(reveal);
  });
  window.addEventListener('load', reveal);
  reveal();
})();
