(function() {
  var PDFJS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  var WORKER_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function renderResume() {
    var container = document.getElementById('resume-pages');
    var loadingEl = document.getElementById('resume-loading');
    if (!container) return;
    var pdfUrl = container.getAttribute('data-pdf-url');
    if (!pdfUrl) {
      if (loadingEl) loadingEl.textContent = 'Resume PDF not configured.';
      return;
    }

    var pdfjsLib = window.pdfjsLib || window['pdfjs-dist/build/pdf'];
    if (!pdfjsLib) {
      if (loadingEl) loadingEl.textContent = 'PDF viewer failed to load.';
      return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;

    var maxWidth = container.clientWidth || 800;
    var scale = 1.5;

    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
      if (loadingEl) loadingEl.remove();
      var numPages = pdf.numPages;
      var renderNext = function(pageNum) {
        if (pageNum > numPages) return;
        pdf.getPage(pageNum).then(function(page) {
          var viewport = page.getViewport({ scale: scale });
          var wrapper = document.createElement('div');
          wrapper.className = 'resume-page';
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          wrapper.appendChild(canvas);
          container.appendChild(wrapper);
          page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function() {
            renderNext(pageNum + 1);
          });
        });
      };
      renderNext(1);
    }).catch(function(err) {
      if (loadingEl) loadingEl.textContent = 'Unable to load resume. You can download the PDF using the link above.';
    });
  }

  function init() {
    if (window.pdfjsLib) {
      renderResume();
      return;
    }
    loadScript(PDFJS_URL).then(function() {
      renderResume();
    }).catch(function() {
      var loadingEl = document.getElementById('resume-loading');
      if (loadingEl) loadingEl.textContent = 'PDF viewer failed to load. Please use the download link above.';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
