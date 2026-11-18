// Kopfleiste aller Seiten: Menü und Sprachwahl (details) schließen bei Klick daneben und mit Esc.
// Ohne JavaScript bleibt alles bedienbar; das Skript ergänzt nur den Komfort.
(function () {
  var open = function () { return document.querySelectorAll('.heroband details[open]'); };
  document.addEventListener('click', function (e) {
    open().forEach(function (d) { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    open().forEach(function (d) { d.open = false; var s = d.querySelector('summary'); if (s) s.focus(); });
  });
})();

// Startseite: unteren Farbstreifen (nur Touch) nur ganz oben zeigen, damit Safaris untere Leiste beim Laden blau ist.
(function () {
  var root = document.documentElement;
  var upd = function () { root.classList.toggle('attop', window.scrollY < 4); };
  upd();
  window.addEventListener('scroll', upd, { passive: true });
})();
