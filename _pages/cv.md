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

<!-- #view=FitH tells the browser's built-in PDF viewer to fit the page width -->
<div class="cv-embed">
  <iframe src="{{ cv_url }}#view=FitH" title="{{ site.author.name }} — curriculum vitae"></iframe>
</div>

<p class="cv-embed-fallback">
  Mobile browsers cannot display PDFs inline. Use one of the links above to read the CV.
</p>

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

  .cv-embed {
    /* Tall enough for a full letter page without pushing the footer far off-screen */
    height: 85vh;
    min-height: 600px;
    margin-bottom: 2em;
    border: 1px solid var(--global-border-color);
    border-radius: 4px;
    overflow: hidden;
    background-color: var(--global-code-background-color);
  }

  .cv-embed iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* The fallback text is only for the screen sizes where the embed is hidden */
  .cv-embed-fallback {
    display: none;
    color: var(--global-text-color-light);
    font-style: italic;
  }

  @media (max-width: 767px) {
    .cv-embed {
      display: none;
    }

    .cv-embed-fallback {
      display: block;
    }
  }
</style>
