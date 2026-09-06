# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio SPA for a product designer: a work index plus per-project case studies. Create React App 5 + React 17 + react-router-dom v6 + Bootstrap 5 + Sass (CSS Modules). Deployed on Netlify.

## Commands

```bash
yarn start   # dev server on :3000
yarn build   # production build -> build/
yarn test    # react-scripts test (no test files exist in src/)
```

Node 24 (`.nvmrc`, `.node-version`, and `NODE_VERSION` in `netlify.toml`); `engines` allows >=20.

**If you see `EACCES ... node_modules/.cache`:** `node_modules/` has become root-owned, usually from a `sudo npm install`. The dev server shows it as a full-screen `Compiled with problems:` overlay and dies on the next rebuild; `yarn build` fails outright. Do not work around it with `DISABLE_ESLINT_PLUGIN` — that only dodges the ESLint cache, and webpack's own cache write fails next.

Fix it by making the tree user-owned again. With sudo:

```bash
sudo chown -R "$(whoami)" node_modules
```

Without sudo, rename it aside and reinstall (a same-parent rename only needs write permission on the repo directory, which you have; a cross-directory move does not work):

```bash
mv node_modules node_modules_old && yarn install --frozen-lockfile
```

The leftover `node_modules_old` still needs `sudo rm -rf` to remove.

## Architecture

### Case studies own their content

Each case study is a self-contained module in `src/constrains/cases/`, exporting one default object. **Never import content from another case module** — copy the values instead. The whole point of this layout is that editing one study can't silently change another. (The Sales Tool study deliberately repeats the CRM's design-system panel, `/assets/manageCRM/ds.png` included, rather than sharing it.)

Module shape:

```js
{
  meta:     { key, layout, title, status, desc, url, cover },  // desc = work-index card blurb
  overview: { title, desc },                                    // page intro; may differ from meta.desc
  metrics:  [{ title, metric }],        // bento only  — 3 or 4; ImpactMetrics sizes columns from the count
  insights: [{ title, desc }],          // narrative only — exactly 3 (SummaryInsights hardcodes col-lg-4)
  status:   [{ title, collection: [{ subTitle?, bio?, italic? }] }],
  liveUrls: [{ label, url }],
  sections: [...],                       // see layouts below
  outro:    [...],                       // bento only: FullPresent blocks after the grid
}
```

`meta.status` must come from `STATUS` in `cases/status.js`. `components/WorkFlowStatus` switches on exact strings and renders **nothing** for an unrecognized one — the constants exist so a typo can't silently drop the badge.

`src/constrains/cases/index.js` is the registry. `caseLinks` is *derived* from each module's `meta`, so a work-index card can never drift from the study it links to. Array order is display order.

`src/constrains/data.js` now holds only site chrome: nav, about, contact, the work-index intro, plus dormant content (`coin*` for the commented-out CoinApp route, and `sak*` leftovers for a Sakneen page that no longer exists — both are dead but harmless).

### Two layouts

The page components are thin; the layout components do the rendering.

- **Bento** (`components/BentoCaseStudy`) — `FlynasImpact`, `ManageCRM`, `SalesTool`. `sections` are grid cells with `span` (the `cell-lg-*` width out of 12; everything is full width on mobile) and one of three kinds:
  - `bento` (default) — `BentoCard`, title + one paragraph, stacked above its image. Built for small cells; at `span: 12` with a tall image it leaves a dead gutter, so use `impact` there instead.
  - `descriptive` — `DescriptiveBentoCard`, one run-on paragraph beside its image.
  - `impact` — `ImpactCard`, an optional `category` eyebrow plus a `blocks` array beside its image. Each block carries its own `label` (so one study says "Approach" where another says "Contribution") and an optional `highlight` for the outcome line. A block with no `label` renders as plain body copy.

  Optional per-section `className`, `descWidth`, `assetWidth`. The layout imports `sass/_grid.scss`, whose `.grid` / `.cell-*` classes are a **separate** CSS Grid system, not Bootstrap's `row`/`col`.
- **Narrative** (`components/NarrativeCaseStudy`) — `DrivingApp`. `sections` are `FullPresent` blocks in order, supporting `title`, `subTitle`, `desc`, `descSecondry`, `lists`, `img` (`[{ src }]`), `url`, `urlLabel`.

A page is then just:

```js
export default function ManageCRM() {
  return <BentoCaseStudy caseStudy={manageCRM} />;
}
```

### Adding a case study

1. **Assets** — `public/assets/<project>/`, WebP only (most existing screenshots are still PNG). Cover ~1600px wide, screenshots <=1200px.
2. **Case module** — `src/constrains/cases/<project>.js`. Copy the closest existing module; use `STATUS` for `meta.status`.
3. **Registry** — add it to `cases` in `src/constrains/cases/index.js`, in the position you want on the work index. The index card is generated from `meta`; there is no second list to update.
4. **Route constant** — `src/constrains/routes.js`. Use a clean slug (`/geo-tool`); avoid the spaces-and-`&` pattern of `CASE_3`.
5. **Page + route** — a 5-line page under `src/pages/` wrapping the right layout, then a `<Route>` in `src/pages/App/index.js`.

Steps 4 and 5 are skipped for an external entry — see `cases/geoTool.js`, which is `meta` only and links the card straight out to the live product.

Verify with `CI=false DISABLE_ESLINT_PLUGIN=true yarn build`, then hard-refresh the new URL to confirm the `_redirects` rewrite catches it.

### Components

Each component is a folder with `index.js` and (usually) `index.module.scss`. Styling is split: Bootstrap utility classes inline in JSX for spacing/layout, CSS Modules for component-specific structure. Module files pull shared mixins with `@use "../../sass/dynamics" as ut;`.

Some components manipulate the DOM directly rather than using React state — `Nav` toggles `.show` on `#navbarNav` via `getElementById`, `BackToTop` attaches a raw `document` scroll listener. Bootstrap's JS bundle is imported globally in `src/index.js` for the navbar collapse behavior.

Full-size image viewing comes from `react-medium-image-zoom` (`<Zoom>` wrappers in `BentoCard`, `DescriptiveBentoCard`, `ClassicScroll`). It generates a random `rmiz-modal-*` id per render, so rendered HTML is never byte-stable across loads — normalize those ids before diffing DOM.

### Global styles

`src/index.js` imports `src/sass/_shared.scss` once. That file `@import`s `_customBootstrap.scss`, which overrides `$theme-colors` (primary `#2563eb`) and navbar vars **before** `@import "~bootstrap/scss/bootstrap"` — Bootstrap variable overrides must go there, above that import.

`_shared.scss` also defines the site-wide type scale used across pages: `.present-heading`, `.present-subheading`, `.present-p`, and the `.compact-page` max-width wrapper. `_dynamics.scss` exposes the `aspectRatio()` and `present-spacing()` mixins; `_fonts.scss` exposes `Font()` / `fontSize()`.

### Assets

Images and the CV PDF live in `public/assets/<project>/` and are referenced as plain strings, so they are never bundled or hashed. Prefer root-absolute paths (`/assets/...`). Relative forms like `./assets/...` and `../assets/...` appear in older `data.js` entries and only happen to work because every route is a single path segment — they would break under a nested route.

`public/assets/cJungle/` is ~17 MB serving a case study whose route is commented out; it still ships on every deploy.

### Deploy

`netlify.toml` (build command + publish dir `build`) and `public/_redirects` (`/* /index.html 200`) — the redirect is what makes client-side routing survive a hard refresh on a case-study URL. `build/` is generated locally but gitignored and untracked.

### Known gaps

- **No per-route metadata.** `public/index.html` has one static `<title>` and `<meta description>` for the whole site; there is no Helmet or prerendering, so every case study shares them and link previews show the generic portfolio blurb.
- `ClassicScroll` passes an object into a template string for `alt`, producing `alt="[object Object]-1"` on narrative-study images.
