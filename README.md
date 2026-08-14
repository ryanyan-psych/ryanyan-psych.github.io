# ryanyan-psych.github.io

Personal academic website, built with [Jekyll](https://jekyllrb.com) on the
[Academic Pages](https://github.com/academicpages/academicpages.github.io) template
(itself a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)).
GitHub Pages builds and serves it automatically on every push to `main`.

Live at <https://ryanyan-psych.github.io>.

## Where things live

| What you want to change | File |
| --- | --- |
| Name, sidebar bio, photo, social links, site description | [`_config.yml`](_config.yml) |
| The header menu | [`_data/navigation.yml`](_data/navigation.yml) |
| About Me (the front page) | [`_pages/about.md`](_pages/about.md) |
| Research | [`_pages/research.md`](_pages/research.md) |
| CV | [`_pages/cv.md`](_pages/cv.md) |
| Miscellaneous | [`_pages/miscellaneous.md`](_pages/miscellaneous.md) |
| Individual publications | [`_publications/`](_publications) |
| PDFs and other downloads | [`files/`](files) — served at `/files/<name>.pdf` |
| Images | [`images/`](images) — served at `/images/<name>.png` |

Everything left to fill in is marked `TODO` in those files.

### Sidebar photo

Replace `images/profile.png` with your own headshot, keeping the filename (or update
`author.avatar` in `_config.yml`). Roughly square, at least 400×400.

### Colour scheme

`site_theme` in `_config.yml` accepts `default`, `air`, `sunrise`, `mint`, `dirt`, or
`contrast`.

### Adding a publication

Copy [`_publications/EXAMPLE-2026-01-01-paper-title.md`](_publications/EXAMPLE-2026-01-01-paper-title.md)
to a new file, fill in the front matter, and delete the `published: false` line. Its
`category` field decides which heading it appears under on the Research page; the
categories and their headings are defined under `publication_category` in `_config.yml`.
Entries are sorted by their `date` field, newest first.

### Adding a page

Add a Markdown file to `_pages/` with `permalink: /your-page/` in the front matter, then
add an entry to `_data/navigation.yml` if you want it in the header menu. Pages without a
navigation entry still work — they are just unlisted.

## Running it locally

Optional; GitHub Pages will build the site without any of this. Requires Ruby 3.x (macOS
system Ruby 2.6 is too old — `brew install ruby` and put it on your `PATH`).

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. `bundle exec jekyll build --strict_front_matter`
checks that the site builds without starting a server; the
[`jekyll-build`](.github/workflows/jekyll-build.yml) workflow runs exactly that on every
push and pull request.

## What was removed from the template

The upstream template ships demo blog posts, talks, teaching and portfolio collections, a
talk map, a JSON-driven CV, Docker files, and a Markdown feature guide. All of it is gone
here. To bring any of it back, copy the relevant files from
[the upstream repository](https://github.com/academicpages/academicpages.github.io) and
re-add the matching `collections` and `defaults` entries in `_config.yml`.

## License

Template code is MIT licensed — see [LICENSE](LICENSE). Site content is not.
