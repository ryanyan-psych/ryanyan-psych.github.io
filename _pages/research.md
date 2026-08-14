---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

My main research questions are:
======
1. **Physiological basis of subjective affect** — What physiological signals underpin our subjective feeling states (e.g., valence and arousal), and how are they coupled overtime? ([Yan, Srirangarajan, Bailenson & Knutson, 2026, *Journal of Neuroscience*](https://www.jneurosci.org/content/early/2026/08/06/JNEUROSCI.0157-26.2026))
2. **Affect, value and decision making** — How does affect arise from the decisions we make and the outcome we receive? What computational mechanism could explain it? ([Yan, Halahakoon & Browning, 2026, in press at *Psychological Science*](https://osf.io/preprints/psyarxiv/zafjn_v2))
3. **Physiological and behavioral signatures of affective trait** — How do affective traits and psychiatric symptoms relate to neural activity, decision-making, and affect dynamics? ([Xu#, Yan#, Saunders, Geddes & Browning, 2025, *EBioMedicine*](https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964(25)00120-3/fulltext))

Working papers
======

* **Yan, Y.**, Westwater, M., Juechems, K., Hunt, L., Browning, M., Anhedonic realism: Efficient two-dimensional reward trade-offs in individuals with anhedonia
* **Yan, Y.**, Mortazavi, L., Yang, C., Knutson, B., Hedonic Capacity and Positive Arousal Differentially Relate to Univariate and Multivariate Neural Signatures of Reward Anticipation.
* **Yan, Y.**, Wu, C., Srirangarajan, T., Dayan, P., Knutson, B., Temporal Dynamics in the Neural Representation of Positive and Negative Affect
* Mortazavi, L., Gore, F., Hernandez, M., **Yan, Y.**, Deng, W., Deisseroth, K., Knutson, B., Projections from insula to accumbens drive avoidance of negative outcomes in humans and rats
* Mortazavi, L., **Yan, Y.**, MacNiven, K., Zhang, X., Deisseroth, K., Williams, L., Knutson, B., Acute effects of ketamine during reward processing


All publications
======
1. (In press at *Psychological Science*) **Yan, Y.**, Halahakoon, D. C., & Browning, M. (2026). Evaluating the ecological validity and mechanism of a generative model-based decomposition of affective variability.  osf.io/preprints/psyarxiv/zafjn_v1
2. (In press at *Journal of Neuroscience*) **Yan, Y.**, Srirangarajan, T., Bailenson, J., Knutson, B., (2026). Pupil size dynamics predict momentary changes in self-reported arousal.
3. Xu, N.#, Yan, Y#., Saunders, K. E. A., Geddes, J. R., & Browning, M. (2025). Effect of lithium on circadian activity level and flexibility in patients with bipolar disorder: Results from the Oxford Lithium Trial. eBioMedicine, 115, 105676. https://doi.org/10.1016/j.ebiom.2025.105676
4. **Yan, Y.**, Hunt, L. T., & Hassall, C. D. (2024). Reward positivity affects temporal interval production in a continuous timing task. Psychophysiology. https://doi.org/10.1111/psyp.14589
5. Hassall, C. D., **Yan, Y.**, & Hunt, L. T. (2023). The Neural Correlates of Continuous Feedback Processing. Psychophysiology. https://doi.org/10.1111/psyp.14399
6. Zhang, J.-X., ten Brink, M., **Yan, Y.**, Goldstein-Piekarski, A., Krause, A. J., Manber, R., Kreibig, S., & Gross, J. J. (2023). Daytime affect and sleep EEG activity: A data-driven exploration. Journal of Sleep Research, e13916. https://doi.org/10.1111/jsr.13916
7. Hamilton, E. M., Rassam, W., **Yan, Y.**, Singh, A., Ng, S. Y. A., Zhang, J., ... & Chen, Z. (2023). Correlates of chronic hepatitis B virus infection in the general adult population of China: Systematic review and meta‐analysis. Journal of Viral Hepatitis.
8. Ten Brink, M., **Yan, Y.**, Zhang, J., Goldstein-Piekarski, A., Krause, A., Kreibig, S., ... & Gross, J. (2023). Pre-sleep affect predicts subsequent REM frontal theta in nonlinear fashion. Cognitive, Affective, & Behavioral Neuroscience, 1-17.
9. Liu, L.#, **Yan, Y.**#, Nazhalati, N., Kuerban, A., Li, J., & Huang, L. (2020). The effect of PM2. 5 exposure and risk perception on the mental stress of Nanjing citizens in China. Chemosphere, 254, 126797
10. **严严#**,黄玲#,华弥之,陈思佚,杨萌,周仁来. 幼儿情绪能力训练的理论构思与实证检验 [J]. 心理学通讯. 2018 (01). Yan, Y.#, Huang, L.#, Hua, M., Chen, S.., Yang, M.., & Zhou, R.., et al., (2018)., The Theoretical Conception and Empirical Test of an Emotional Competence Training Program for Preschool Children. Psychological Communications., 2018, 1(1): 5-15, DOI: 10.12100/j.issn.2096-5494.218001. 

**# Joint first authors.**


{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<!-- Each publication is a Markdown file in the _publications/ directory. Its `category`
     field decides which heading below it appears under; the categories and their
     headings are defined in _config.yml under `publication_category`. -->
{% if site.publication_category %}
  {% for category in site.publication_category %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h3>{{ category[1].title }}</h3><hr />
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
