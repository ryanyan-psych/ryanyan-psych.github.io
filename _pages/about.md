---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<img class="headshot" src="{{ base_path }}/images/profile.png" alt="Ryan Yan" />

Hi! I am glad you are here. I am Ryan Yan (Chinese name: 严严/嚴嚴), and I use she/her pronouns. I am interested in how decision-making and incentive processing interact with people's subjective experience, both within-person over time, and as personality traits. To investigate these processes, I integrate fMRI, pupillometry, behavioral experiments, time-intensive self-reports, and computational modeling.

Currently, I am a [fifth-year PhD student in Psychology at Stanford University](https://psychology.stanford.edu/people/ryan-yan-yan) (affective area) supervised by Brian Knutson. Before moving to California, I completed two Master's degrees in psychiatry and clinical neuroscience at the University of Oxford funded by the Rhodes Scholarship, working with Michael Browning and Laurence Hunt. I completed my BSc in psychology at Nanjing University in China.

You can reach me at [ryany98@stanford.edu](mailto:ryany98@stanford.edu).

<style>
  .headshot {
    float: right;
    width: 260px;
    /* The source image is very slightly wider than tall; crop to a square rather than
       letting it squash */
    aspect-ratio: 1;
    object-fit: cover;
    margin: 0 0 1.25em 1.75em;
    border-radius: 6px;
  }

  /* Stack above the text on narrow screens instead of squeezing it into a column */
  @media (max-width: 600px) {
    .headshot {
      float: none;
      display: block;
      width: 190px;
      margin: 0 auto 1.5em;
    }
  }
</style>
