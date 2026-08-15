// Auto-resize same-origin document embeds so they render inline with no inner scrollbar.
(function () {
  function resize() {
    document.querySelectorAll('iframe.doc-embed').forEach(function (f) {
      try {
        var doc = f.contentWindow.document;
        var h = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
        if (h) { f.style.height = (h + 24) + 'px'; }
      } catch (e) { /* cross-origin or not ready; ignore */ }
    });
  }
  window.addEventListener('load', resize);
  window.addEventListener('resize', resize);
  [400, 900, 1600, 2600].forEach(function (t) { setTimeout(resize, t); });
})();
