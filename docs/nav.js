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

// Seitenfuß: ab Tablet-Breite stehen die Linkgruppen offen nebeneinander, auf dem Handy klappen sie auf.
(function () {
  var mq = window.matchMedia('(min-width: 700px)');
  var sync = function () { document.querySelectorAll('.sitefoot .fg').forEach(function (d) { d.open = mq.matches; }); };
  sync();
  if (mq.addEventListener) mq.addEventListener('change', sync);
})();
