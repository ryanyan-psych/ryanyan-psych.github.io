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

<!-- Rendered page-by-page onto <canvas> by assets/js/cv-viewer.js. Keep that logic in its
     own file: the theme's compress_html layout strips newlines from inline scripts in
     production, which silently breaks any script containing `//` comments. -->
<div class="cv-viewer" id="cv-viewer" data-pdf-url="{{ cv_url }}" aria-label="{{ site.author.name }} — curriculum vitae">
  <p class="cv-viewer__status">Loading CV…</p>
</div>

<noscript>
  <p class="cv-viewer__message">
    This preview needs JavaScript. Use the links above to download or open the CV.
  </p>
</noscript>

<script type="module" src="{{ base_path }}/assets/js/cv-viewer.js"></script>

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
