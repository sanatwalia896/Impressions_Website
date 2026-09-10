export const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "About", href: "#about" },
  { label: "Visit us", href: "#visit" },
];

export const TICKER_ITEMS = [
  "STITCHED SUITS",
  "PARTY WEAR",
  "INDO-WESTERN",
  "SKIRTS",
  "DENIM",
  "NIGHTWEAR",
  "FORMAL TROUSERS",
  "TOPS",
];

// Swap the `image` values for real file paths once you drop photos into
// /public/images, e.g. image: "/images/hero-main.jpg"
export const HERO = {
  eyebrow: "Palampur · Multi-brand ladies showroom",
  title: "Impressions",
  subtitle:
    "Western. Indo-western. Nightwear. Every mood a woman gets dressed for, under one roof.",
  ctaLabel: "Explore the edit",
  ctaHref: "#collections",
  // MediaStack items — add as many as you want, they'll all rotate into
  // the deck. Swap `src: null` for a real path once you have the photo.
  images: [
    { src: "https://i.ibb.co/qSFMgK5/hero-1.png", alt: "Model in an indo-western fusion outfit", tone: "olive", label: "AI hero shot — indo-western, 3:4" },
    { src: "https://i.ibb.co/SDzhSK1S/hero-2.png", alt: "Jewellery and drape detail", tone: "brick", label: "Detail shot — jewellery / drape" },
    { src: "https://i.ibb.co/8Df0cxq8/cat2-2.png", alt: "Full-length party wear look", tone: "plum", label: "Party wear, full length" },
  ],
};

export const INTRO_TEXT =
  "Impressions is a multi-brand destination for the woman who dresses for more than one life — stitched suits for the everyday, party wear for the night, denim and formal wear for the in-between. Curated in store, styled online.";

export const CATEGORIES = [
  {
    index: "01",
    eyebrow: "Flagship",
    title: "Indo-Western & Party Wear",
    description:
      "Fusion silhouettes and statement pieces for weddings, sangeets, and nights out — drapes, fitted co-ords, and embellished separates.",
    points: ["Fusion co-ords & drapes", "Embellished separates", "Occasion-ready styling"],
    tone: "brick",
    images: [
      { src: "https://i.ibb.co/zV5tbdxS/cat1-1.png", alt: "Indo-western and party wear look" },
      { src: "https://i.ibb.co/39LGYjmk/cat1-2.png", alt: "Detail / texture", label: "Detail / texture" },
    ],
  },
  {
    index: "02",
    eyebrow: "Everyday",
    title: "Stitched Suits",
    description:
      "Ready-to-wear suits cut for daily comfort without losing shape — our steadiest, most trusted category.",
    points: ["Cotton & georgette staples", "True-to-size fitting", "New drops every season"],
    tone: "olive",
    images: [
      { src: "https://i.ibb.co/mCyNM59F/cat2-1.png", alt: "Stitched suit look" },
      { src: "https://i.ibb.co/8Df0cxq8/cat2-2.png", alt: "Detail / texture", label: "Detail / texture" },
    ],
    reverse: true,
  },
  {
    index: "03",
    eyebrow: "The essentials",
    title: "Western Edit",
    description:
      "Tops, jeans, skirts and formal trousers — the pieces that build the rest of the wardrobe around them.",
    points: ["Short & long tops", "Latest-fit denim", "Skirts & formal trousers"],
    tone: "ink",
    images: [
      { src: "https://i.ibb.co/VhdwWHd/cat3-1.png", alt: "Western wear edit look" },
      { src: "https://i.ibb.co/8gdBbML9/cat3-2.png", alt: "Detail / texture", label: "Detail / texture" },
    ],
  },
  {
    index: "04",
    eyebrow: "After dark",
    title: "Nightwear",
    description:
      "Soft, breathable pieces built for comfort — a quieter, calmer visual world than the rest of the store.",
    points: ["Breathable fabrics", "Loungewear sets", "Everyday comfort fits"],
    tone: "plum",
    images: [
      { src: "https://i.ibb.co/wNLqfDZC/cat4-1.png", alt: "Nightwear look" },
      { src: "https://i.ibb.co/R4TdQct6/cat4-2.png", alt: "Detail / texture", label: "Detail / texture" },
    ],
    reverse: true,
  },
];

export const LOOKBOOK_ITEMS = [
  { label: "Festive drape", tone: "brick", src: "https://i.ibb.co/WW2tPF4L/lookbook-1.png" },
  { label: "Office formal", tone: "sand", src: "https://i.ibb.co/Y494j75g/lookbook-2.png" },
  { label: "Night out", tone: "plum", src: "https://i.ibb.co/wZNLGtPK/lookbook-3.png" },
  { label: "Casual denim day", tone: "olive", src: "https://i.ibb.co/F4FKRSfk/lookbook-4.png"},
  { label: "Indo-western fusion", tone: "brick", src: "https://i.ibb.co/1Vt6JQ2/lookbook-5.png" },
  { label: "Evening party wear", tone: "plum", src: "https://i.ibb.co/ccPKvNsw/lookbook-6.png" },
];

export const ABOUT = {
  eyebrow: "About Impressions",
  title: "A showroom built around real women, not one mood",
  paragraphs: [
    "Impressions started as a single multi-brand showroom with one idea: a woman's wardrobe isn't one aesthetic. She needs a stitched suit for a Tuesday, denim for a weekend, something fitted for a party, and something soft to sleep in. We stock across all of it, curated from brands we trust and cut for Indian sizing.",
    "This site is our online front door — right now, a lookbook of who we are. Ordering online is coming next.",
  ],
  image: { src: "https://i.ibb.co/5h31pYQs/Store-Image.png", alt: "Store front interior" },
};

export const VISIT = {
  eyebrow: "Visit us",
  title: "Come try it on",
  details: ["Store address · Palampur,Himachal Pradesh", "Open daily, 10am – 7pm"],
  links: [
    { label: "WhatsApp", href: "https://wa.me/919418041613" },
    { label: "Call", href: "tel:+91 9418041613" },
  ],
  // Swap this for your real store's embed: on Google Maps, search your
  // shop, click Share > Embed a map, and copy the src="..." URL here.
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54069.47815131833!2d76.4588584486328!3d32.1140545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b3c4900b7b9d%3A0x1b880d795c2a33a2!2sImpression!5e0!3m2!1sen!2sin!4v1789015825438!5m2!1sen!2sin",
};

export const WHY_ITEMS = [
  {
    title: "Multi-brand, one visit",
    body: "Stitched suits, western wear, indo-western and nightwear from brands we've personally vetted — no running between five shops for one outfit.",
  },
  {
    title: "Fit for Indian sizing",
    body: "Every piece is checked against Indian body types and sizing, not just imported charts that don't translate.",
  },
  {
    title: "New drops every season",
    body: "We refresh the floor regularly instead of letting stock sit — what you see is current, not last year's leftovers.",
  },
  {
    title: "Styling help, not just sales",
    body: "Our team helps put full looks together — occasion wear, everyday fits, or building a capsule wardrobe.",
  },
];
