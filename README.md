# Gym City, Shaheen Bagh: website

Next.js 16 (App Router, TypeScript), fully static. The page is prerendered at build time.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No settings are needed.
If you use a custom domain, set the env var `SITE_URL=https://yourdomain.com` so social preview images use it.

## Where to edit things

| What | File |
| --- | --- |
| WhatsApp number, phone, address, hours, rating | `lib/site.ts` |
| Page text: zones, plans, programs, FAQ, reviews, gallery | `app/page.tsx` (arrays at the top) |
| Colours and fonts | `app/globals.css` (`:root` variables), `app/layout.tsx` |
| SEO title, description, structured data | `app/layout.tsx` |
| Photos | `assets/img/`, registered in `lib/images.ts` |

**WhatsApp:** set `whatsapp` in `lib/site.ts` (digits only, e.g. `919876543210`). Until it's set, every WhatsApp button calls the phone number instead.

## Structure

```
app/          layout.tsx (fonts, SEO, loader), page.tsx (all sections), globals.css, not-found.tsx, robots.ts, sitemap.ts
components/   Nav, HeroSlides, Bmi, Gallery, Loader (client components), Reveal (scroll animations), Icons
lib/          site.ts (contact config), images.ts (static image imports), url.ts (public site URL)
assets/img/   optimised gym photos and logo
public/       favicon.png, og.jpg (social preview)
```

## Photo credits

- Hero slideshow (`assets/img/hero-*.jpg`): free stock photos from [Pexels](https://www.pexels.com), Pexels License (free for commercial use, no attribution required). Photo IDs: 841130 (deadlift), 1229356 (dumbbell curl), 1552242 (battle ropes), 1552252 (barbell).
- All other photos were taken at Gym City, Shaheen Bagh, from the owner's own photos and the gym's FITPASS listing.
