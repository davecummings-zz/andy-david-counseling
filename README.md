# Andy David Counseling Website

Modern, professional counseling website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Features

- **Minimalist Design** - Clean, zen garden aesthetic with sage green accents
- **Responsive** - Mobile-first design for all devices
- **Services Overview** - Clear presentation of therapy specialties and formats
- **Testimonials** - Client endorsements section
- **Calendly Integration** - Self-service booking for clients
- **Tidio Live Chat** - Real-time support for inquiries
- **Contact Section** - Phone, address, map, and live chat
- **Professional Credentials** - Clear display of qualifications and experience

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

Update the Calendly embed URL in `app/page.tsx`:

```tsx
<iframe
  src="https://calendly.com/your-calendly-username/free-consultation"
  // ...
/>
```

### Tidio Live Chat

Add your Tidio script to `app/page.tsx` or `app/layout.tsx`:

```html
<script src="//code.tidio.co/YOUR-TIDIO-PROJECT-ID.js"></script>
```

### Contact Information

Update the contact details in `app/page.tsx`:
- Phone number
- Address
- Google Maps embed URL

## Color Scheme

- **Primary Background** - White (#ffffff)
- **Accent** - Sage Green (#D5E1DF)
- **Accent Dark** - Sage Dark (#A8B8B2)
- **Text** - Dark Gray (#1a1a1a, #3a3a3a)

## Sections

1. **Navigation** - Sticky header with mobile menu
2. **Hero** - Welcome message and CTA
3. **About** - IFS approach and credentials
4. **Services** - Specialties, formats, and pricing
5. **Testimonials** - Client endorsement
6. **Calendly** - Free consultation booking
7. **Contact** - Phone, address, map, live chat
8. **Footer** - Legal notice and crisis resources

## Deployment

Deploy to Vercel (recommended):

1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys on push

## Maintenance

### Adding New Testimonials

Update the testimonials section in `app/page.tsx` to add more client endorsements.

### Updating Services

Modify the services section with new specialties or pricing information.

### Analytics

Add analytics provider of choice (Google Analytics, Plausible, etc.) to `app/layout.tsx`.

## Support

For questions or assistance, contact Andy David directly at (737) 215-3986.

## License

Private project for Andy David Counseling.
