/*
 * Renders the CV PDF onto <canvas> elements with PDF.js.
 *
 * Why not an <iframe>? An iframe hands the PDF to the browser as a document, so anyone
 * whose browser is set to "download PDFs instead of opening them" gets a file download
 * when they merely visit the page. Canvas rendering sidesteps that, and works on mobile
 * browsers that refuse to scroll an iframed PDF.
 *
 * Why a separate file rather than an inline <script>? The theme's compress_html layout
 * (enabled in production, skipped by `jekyll serve`) strips newlines from inline scripts,
 * which silently comments out everything following a `//` comment. External scripts are
 * left alone.
 */

const PDFJS_VERSION = "4.10.38";
const CDN = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build`;

/* Cap the render resolution: sharp on retina screens without allocating a huge canvas
   for every page of a long CV */
const MAX_CANVAS_WIDTH = 1400;

/* A stalled CDN or PDF request would otherwise leave "Loading…" on screen forever */
const TIMEOUT_MS = 15000;

const container = document.getElementById("cv-viewer");

function showMessage(text) {
  const p = document.createElement("p");
  p.className = "cv-viewer__message";
  p.textContent = text;
  container.replaceChildren(p);
}

function fail(detail) {
  showMessage(
    "The preview could not load" +
      (detail ? " (" + detail + ")" : "") +
      ". Use the links above to download or open the CV."
  );
}

function withTimeout(promise, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(label + " timed out")), TIMEOUT_MS)
    ),
  ]);
}

async function main() {
  const url = container.dataset.pdfUrl;

  const pdfjsLib = await withTimeout(import(`${CDN}/pdf.min.mjs`), "PDF.js");
  pdfjsLib.GlobalWorkerOptions.workerSrc = `${CDN}/pdf.worker.min.mjs`;

  const pdf = await withTimeout(pdfjsLib.getDocument(url).promise, "CV");
  container.replaceChildren();

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

  /* Render a page only once it is near the viewport, so a long CV does not paint every
     page (or hold every canvas in memory) on load */
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

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const { width, height } = page.getViewport({ scale: 1 });

    const slot = document.createElement("div");
    slot.className = "cv-viewer__page";
    slot.dataset.pageNumber = String(pageNumber);
    /* Reserve the right height up front so the page does not jump as canvases arrive */
    slot.style.aspectRatio = `${width} / ${height}`;
    container.appendChild(slot);
    observer.observe(slot);
  }
}

main().catch((error) => fail(error && error.message));
