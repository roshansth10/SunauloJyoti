# Sunaulo Jyoti — Website

A Next.js (App Router) + Tailwind CSS rebuild of the Sunaulo Jyoti landing
page design, plus About, Products, Testimonials, and Contact pages.

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Images:** `next/image` for automatic optimization/resizing (AVIF/WebP)
- **Contact form:** [Web3Forms](https://web3forms.com) — a serverless form
  endpoint, so no backend is needed. Swap in Formspree the same way if you
  prefer it (same `fetch`-a-FormData pattern in `components/contact/ContactForm.tsx`).

## Getting started

```bash
npm install
cp .env.example .env.local
# put your free Web3Forms access key in .env.local
npm run dev
```

Open http://localhost:3000.

### Setting up the contact form

1. Go to https://web3forms.com and create a free access key with your email.
2. Put it in `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. Submissions on `/contact` will be emailed to you directly — no server or
   database required. A hidden honeypot field (`botcheck`) is included to
   cut down on spam.

## Project structure

```
app/
  layout.tsx          # root layout — fonts, header, footer
  globals.css
  page.tsx             # Home
  about/page.tsx
  products/page.tsx
  testimonials/page.tsx
  contact/page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
  ui/                   # shared, reused across pages
    Button.tsx
    SectionHeading.tsx
    ProductCard.tsx
  home/
    Hero.tsx
    SignatureMasala.tsx
    ProductsSection.tsx
    Promo.tsx
    WhyChooseUs.tsx
    Lifestyle.tsx
    PaymentPartners.tsx
  about/
    AboutHero.tsx
    ProductionProcess.tsx
    MissionVision.tsx
    OurPromise.tsx
  products/
    ProductPromoBanner.tsx
    Categories.tsx
    FeaturedProduct.tsx
    NewArrival.tsx
    BestSellingProduct.tsx
  contact/
    ContactForm.tsx

public/images/           # optimized product & lifestyle photos (WebP/JPEG)
```

## Notes

- **Payment partner logos:** the footer/home "Our Payment Partners" section
  currently ships with plain text badges (NIC Asia, eSewa, Khalti, Nabil
  Bank, connectIPS) instead of the real brand marks, since those logos are
  trademarked assets you'll need to source under each brand's usage
  guidelines. Drop the official SVG/PNG files into `public/icons/` and swap
  the `<span>` badges in `components/home/PaymentPartners.tsx` for
  `next/image` tags once you have them.
- All product/lifestyle photos were compressed and converted to WebP/JPEG
  (from the originals you supplied) to keep page weight low — total image
  payload is under 1&nbsp;MB.
- Colors, spacing, and section order follow the supplied landing page mock
  (`Landing_Page.png`) and file structure notes.

## Build

```bash
npm run build
npm start
```
