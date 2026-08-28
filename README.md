# Impressions — website

Rough draft of the brand/showroom site for Impressions (multi-brand ladies
showroom). Built with React + Vite, plain CSS files (no Tailwind), fully
responsive down to mobile.

## Project structure

```
impressions-website/
  index.html              entry HTML, loads fonts + mounts React
  src/
    main.jsx               React entry point
    App.jsx                assembles all sections
    App.css                page-level layout
    index.css               global reset, fonts, CSS variables, .reveal animation
    data/
      content.js            ALL text/copy/category data lives here — edit this
                             file to change wording without touching components
    hooks/
      useReveal.js           scroll-into-view fade-up animation hook
    components/
      Nav.jsx / Nav.css
      Ticker.jsx / Ticker.css
      Hero.jsx / Hero.css
      Intro.jsx / Intro.css
      CategorySection.jsx / CategorySection.css   (reused for all 4 categories)
      Lookbook.jsx / Lookbook.css
      About.jsx / About.css
      Visit.jsx / Visit.css
      Footer.jsx / Footer.css
      Placeholder.jsx / Placeholder.css   (image slot — shows a colored
                                            block with a label until you
                                            give it a real src)
  public/
    images/                 put real photos here
```

Every component has its own `.css` file sitting next to it, and all the
copy (headlines, category descriptions, nav links, contact info) lives in
one place: `src/data/content.js`. Change wording there instead of hunting
through components.

## Running it

You need [Node.js](https://nodejs.org) installed (version 18 or newer).
Check with:

```bash
node -v
```

Then, inside the `impressions-website` folder:

```bash
npm install
npm run dev
```

`npm install` pulls in React, Vite, and the Vite React plugin (only two
real dependencies). `npm run dev` starts a local dev server — it will
print a URL like `http://localhost:5173`, and the browser should open
automatically. The page hot-reloads as you edit files.

Other commands:

```bash
npm run build      # builds a production-ready version into /dist
npm run preview    # serves that /dist build locally to sanity-check it
```

## Adding your real images

1. Drop image files into `public/images/` (see the README there for
   suggested names).
2. Open `src/data/content.js` and set the `src` field for the relevant
   image, e.g.:

```js
image: { src: "/images/category-indo-western.jpg", alt: "Indo-western look" }
```

Leave `src: null` and it keeps showing the labeled color placeholder, so
you can wire up images gradually.

## What's already in place

- Mobile responsive layout (breakpoints at 860px and 520px)
- A scroll-triggered fade-up animation (`useReveal` hook + `.reveal` CSS
  class) applied to every major section
- Auto-scrolling category ticker (pure CSS animation, respects
  `prefers-reduced-motion`)
- Mobile hamburger nav

## Not built yet (by design — this is the presence/portfolio layer)

- Product listings, cart, checkout, online ordering
- CMS / backend — all content is static in `content.js` for now
