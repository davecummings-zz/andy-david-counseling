# Andy David Counseling Website

Modern, professional counseling website built with Next.js 14, React 18, TypeScript, and Tailwind CSS. Features a refined minimalist design with elegant typography, responsive layouts, and integrated booking.

## Features

- **Professional Typography** - Cinzel elegant serif headings + Inter clean body text
- **Minimalist Design** - Subtle borders, refined shadows, and warm sage accents
- **Responsive Layout** - Mobile-first design with full tablet/desktop support
- **Google Maps Integration** - Embedded location map in contact section
- **Responsive Calendly Booking** - 600px height on mobile, 820px on desktop (no scrollbar)
- **Navigation** - Sticky header with uppercase links and mobile hamburger menu
- **Services Overview** - 15 therapy types, multiple specialties, clear pricing
- **Testimonials** - Client endorsements with Psychology Today verification
- **Tidio Live Chat** - Real-time support available site-wide
- **Parallax Background** - Marble texture on desktop (scroll on mobile)
- **Professional Credentials** - Texas License #81023, 11 years experience, IFS Institute certified

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting & deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd andy-david-counseling
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
npm run start
```

## Configuration

### Calendly Integration

The Calendly booking embed is in the Contact section with responsive heights:

```tsx
<div className="h-[600px] md:h-[820px]">
  <iframe
    src="https://calendly.com/luna-theaiassistant/free-consultation?month=2026-03"
    width="100%"
    height="100%"
    scrolling="no"
    style={{ border: 'none' }}
  ></iframe>
</div>
```

To update:
- Change the Calendly URL to your actual booking link
- Mobile height: adjust `h-[600px]` as needed
- Desktop height: adjust `h-[820px]` for full content visibility

### Google Maps Embed

Located in Contact section below contact info card. Update the address coordinates:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.85...YOUR-EMBED-CODE"
  // ...
/>
```

### Contact Information

All contact details are centralized in the Contact section (app/page.tsx):
- Phone: 512.842.7572
- Email: andy@andy-david.com
- Address: 4131 Spicewood Springs Road, Bldg. N-12, Austin, TX 78759
- Hours: Mon & Wed in-person, Fri online (10am-4pm)
- Response time: 1-2 business days

### Tidio Live Chat

Tidio live chat widget (ID: ih6mxptb5srh0hlq5xo5xrlho5l9setv) is embedded site-wide and auto-initializes.

## Color Scheme

- **Primary Background** - White (#ffffff)
- **Text** - Warm Sage (#72827F)
- **Borders** - Sage Accent (#A8B8B2)
- **Accents** - Light Sage (#D5E1DF)
- **CTA** - Ocean Blue (#78A3C3)
- **Footer** - Light Gray (bg-gray-50)

## Typography

- **Headings (h1-h6)** - Cinzel (weights 400-900) - elegant serif
- **Body Text** - Inter (weights 100-900, optimized 400/600/700) - clean sans-serif
- **Font Loading** - Google Fonts with display=swap for Core Web Vitals optimization

## Sections

1. **Navigation** - Sticky header with UPPERCASE links, mobile hamburger menu
2. **Hero** - Welcome message, CTA button, embedded booking form
3. **About** - IFS (Internal Family Systems) approach + credentials
4. **What I Help With** - 5 primary specialties + additional issues (15 total)
5. **Areas of Expertise** - 11 therapy types + 4 additional modalities
6. **Services** - Session rates ($160), payment methods, insurance accepted, hours
7. **Testimonials** - Kaylia Schunemann endorsement (Psychology Today verified)
8. **Contact** - Single column layout:
   - Contact info card (Phone, Email, Address, Hours)
   - Google Map (embedded location)
   - Calendly booking (responsive: 600px mobile / 820px desktop)
9. **Footer** - Crisis resources and legal notice

## File Structure

```
andy-david-counseling/
├── app/
│   ├── page.tsx           # Main page with all sections
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles (parallax, shadows, typography)
├── public/
│   └── images/
│       ├── andy.avif      # Profile photo
│       ├── verified.png   # Psychology Today badge
│       └── marble-backround.jpg  # Parallax background
└── README.md             # This file
```

## Key CSS Classes

- `.parallax-section` - Marble background with parallax effect (desktop only)
- `.border-l-4` - Left border accent (0 2px 4px subtle shadow)
- `h-[600px] md:h-[820px]` - Responsive Calendly container heights

## Recent Updates (March 16-17, 2026)

### Latest Commits
- **e758420** - Fix parallax effect on mobile devices
- **a8652fc** - Contact section redesign with Google Map, responsive Calendly, uppercase nav, refined shadows

### What Changed
1. Contact section completely redesigned:
   - Moved from 2-column grid to single column flex layout
   - Added embedded Google Map below contact info
   - Responsive Calendly heights (600px mobile, 820px desktop)
   - No vertical scrollbar on booking form

2. Navigation:
   - All links now uppercase
   - Reduced font size (text-xs) with tight spacing (gap-6)
   - Added whitespace-nowrap to prevent wrapping

3. Visual refinements:
   - Box shadows simplified: 0 2px 4px (removed hover effects)
   - Testimonials section: no shadow
   - Parallax background: disabled on mobile for better performance

4. Mobile parallax fix:
   - Desktop: background-attachment fixed (parallax effect)
   - Mobile: background-attachment scroll (normal background)

## Deployment

### Vercel (Recommended)

1. Repository is already connected: https://github.com/davecummings-zz/andy-david-counseling
2. Vercel auto-deploys on GitHub push
3. Configure custom domain (andy-david.com) in Vercel project settings

### Environment Variables

None required - all configuration is in `app/page.tsx`

### Build Command

```bash
npm run build
```

### Start Command

```bash
npm run start
```

## Maintenance

### Adding Testimonials

Edit the testimonials section in `app/page.tsx`:

```tsx
<div className="space-y-8">
  {/* Add new testimonial card */}
  <div className="p-8 md:p-12 rounded border-l-4 bg-gray-50">
    {/* New testimonial content */}
  </div>
</div>
```

### Updating Services

Modify the services section in `app/page.tsx`:
- Session rates
- Payment methods
- Insurance accepted
- Availability hours

### Adding Images

Place images in `/public/images/` and reference with relative paths:

```tsx
<img src="/images/filename.ext" alt="description" />
```

## Performance

- **Fonts** - Google Fonts with display=swap for Core Web Vitals
- **Images** - Use .avif format for modern browsers
- **Parallax** - Disabled on mobile to reduce jank and improve performance
- **Responsive** - Mobile-first Tailwind approach

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For technical questions or assistance:
- GitHub Issues: https://github.com/davecummings-zz/andy-david-counseling/issues
- Contact Andy: 512.842.7572 or andy@andy-david.com

## License

Private project for Andy David Counseling. All rights reserved.
