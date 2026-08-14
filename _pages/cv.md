---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- Drop a PDF into the files/ directory and set the filename here; it is the only place
     the name appears, so swapping in an updated CV means editing this one line. -->
{% assign cv_file = "Resume_academic_YYan.pdf" %}
{% assign cv_url = cv_file | prepend: "/files/" | prepend: base_path %}

<p class="cv-actions">
  <a class="btn" href="{{ cv_url }}" download><i class="fas fa-download" aria-hidden="true"></i> Download PDF</a>
  <a class="btn btn--inverse" href="{{ cv_url }}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Open in new tab</a>
</p>

<!-- The PDF is rendered page-by-page onto <canvas> elements by PDF.js rather than handed
     to the browser in an <iframe>. An iframe defers to the browser's PDF handling, so
     anyone whose browser is set to "download PDFs" gets a file download on page load
     instead of a preview. Canvas rendering sidesteps that, and works on mobile too. -->
<div class="cv-viewer" id="cv-viewer" data-pdf-url="{{ cv_url }}" aria-label="{{ site.author.name }} — curriculum vitae">
  <p class="cv-viewer__status">Loading CV…</p>
</div>

<noscript>
  <p class="cv-viewer__message">
    This preview needs JavaScript. Use the links above to download or open the CV.
  </p>
</noscript>

<script type="module">
  const PDFJS_VERSION = "4.10.38";
  const container = document.getElementById("cv-viewer");
  const url = container.dataset.pdfUrl;

  // Cap the render resolution: enough for a sharp image on retina screens without
  // allocating a huge canvas per page
  const MAX_CANVAS_WIDTH = 1400;

  const fail = (detail) => {
    container.innerHTML =
      '<p class="cv-viewer__message">The preview could not load' +
      (detail ? " (" + detail + ")" : "") +
      ". Use the links above to download or open the CV.</p>";
  };

  try {
    const pdfjsLib = await import(
      `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.min.mjs`
    );
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;

    const pdf = await pdfjsLib.getDocument(url).promise;
    container.innerHTML = "";

    // Render a page only once it is near the viewport, so a long CV does not paint
    // every page (or hold every canvas in memory) on load
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          renderPage(entry.target);
        }
      },
      { rootMargin: "300px 0px" }
    );

    async function renderPage(slot) {
      const page = await pdf.getPage(Number(slot.dataset.pageNumber));
      const base = page.getViewport({ scale: 1 });
      const targetWidth = Math.min(
        MAX_CANVAS_WIDTH,
        slot.clientWidth * Math.min(window.devicePixelRatio || 1, 2)
      );
      const viewport = page.getViewport({ scale: targetWidth / base.width });

      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;

      slot.replaceChildren(canvas);
      slot.classList.add("is-rendered");
    }

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const { width, height } = page.getViewport({ scale: 1 });

      const slot = document.createElement("div");
      slot.className = "cv-viewer__page";
      slot.dataset.pageNumber = String(pageNumber);
      // Reserve the right height up front so the page does not jump as canvases arrive
      slot.style.aspectRatio = `${width} / ${height}`;
      container.appendChild(slot);
      observer.observe(slot);
    }
  } catch (error) {
    fail(error && error.message);
  }
</script>

<style>
  .cv-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-bottom: 1.5em;
  }

  /* The theme underlines links inside .page__content; buttons should not be */
  .cv-actions .btn {
    margin-bottom: 0;
    text-decoration: none;
  }

  .cv-viewer {
    margin-bottom: 2em;
  }

  .cv-viewer__page {
    margin-bottom: 1em;
    border: 1px solid var(--global-border-color);
    border-radius: 4px;
    overflow: hidden;
    /* Visible while the page is still off-screen or mid-render */
    background-color: var(--global-code-background-color);
  }

  .cv-viewer__page canvas {
    display: block;
    width: 100%;
    height: auto;
  }

  .cv-viewer__status,
  .cv-viewer__message {
    color: var(--global-text-color-light);
    font-style: italic;
  }
</style>
