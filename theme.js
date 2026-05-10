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
  if (!btn) return;
  btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '🌙';
});
