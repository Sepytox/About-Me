(function(){
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();

function toggleTheme() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = next === 'dark' ? '☀' : '🌙';
}

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '🌙';

  // Scroll progress bar
  var bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  // Back to top button
  var topBtn = document.createElement('button');
  topBtn.id = 'back-to-top';
  topBtn.title = 'Nach oben';
  topBtn.textContent = '↑';
  topBtn.addEventListener('click', function() { window.scrollTo({top: 0, behavior: 'smooth'}); });
  document.body.appendChild(topBtn);

  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
    topBtn.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', onScroll, {passive: true});
});
