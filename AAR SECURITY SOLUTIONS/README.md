# AAR Security Solutions Website

Premium Apple-inspired Next.js website for AAR Security Solutions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replace brand assets

- Current logo file: `public/aar-logo.png`. Replace this file with an updated official logo if needed.
- Replace image placeholders in `public/images/services/` with real, high-resolution, watermark-free service images.
- Replace social URLs in `lib/constants.ts`.
- Replace analytics IDs in `components/Analytics.tsx`.

## Lead form

The inquiry form posts to `app/api/inquiry/route.ts`. It currently logs submissions and returns `{ ok: true }`. Connect it later to email, CRM, WhatsApp automation, Google Sheets, or a database.
