# AAR Security Solutions Website

Premium Apple-inspired Next.js website for AAR Security Solutions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this project to GitHub.
2. In Vercel, import the GitHub repository.
3. Keep the framework preset as `Next.js`.
4. Vercel will use `vercel.json`:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Dev command: `npm run dev`

## Replace brand assets

- Current logo files: `public/aar-logo.png` is the original, and `public/aar-logo-wide.png` is the cropped website header/footer version.
- Replace image placeholders in `public/images/services/` with real, high-resolution, watermark-free service images.
- Replace social URLs in `lib/constants.ts`.
- Replace analytics IDs in `components/Analytics.tsx`.

## Lead form

The inquiry form posts to `app/api/inquiry/route.ts`. It currently logs submissions and returns `{ ok: true }`. Connect it later to email, CRM, WhatsApp automation, Google Sheets, or a database.
