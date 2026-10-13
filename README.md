# Thinketh — Next.js starter

This project refactors the supplied Thinketh HTML into reusable Next.js components and adds a server-side enquiry endpoint backed by Supabase.

## Requirements

- Node.js 20.9+ recommended
- A Supabase project
- GitHub/Vercel account for deployment (optional while developing locally)

## Run locally

1. Extract this ZIP and open the `thinketh-nextjs` folder in VS Code.
2. In the terminal:

   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.
3. Open `http://localhost:3000`.
4. Add your Supabase values to `.env.local`, then restart the dev server.

## Connect the form to Supabase

1. Create a project in Supabase.
2. Open **SQL Editor**, paste and run `supabase/schema.sql`.
3. Go to **Project Settings → API** and copy the Project URL and `service_role` key.
4. Add these to `.env.local`:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

5. Restart `npm run dev` and submit a test enquiry.
6. View saved rows in **Table Editor → enquiries**.

**Security:** Never prefix `SUPABASE_SERVICE_ROLE_KEY` with `NEXT_PUBLIC_`, never commit `.env.local`, and never put the service role key in client components. It bypasses Row Level Security and belongs only on the server.

## What is modular

- `components/Navbar.tsx` — navigation and theme toggle
- `components/Hero.tsx` — hero and learning-path SVG
- `components/ContentSections.tsx` — main educational content and reusable row/chip components
- `components/Assessment.tsx` — interactive sample quiz
- `components/TeamSection.tsx` — team placeholders
- `components/Contribution.tsx` — UPI amount selector and contact shortcuts
- `components/ContactSection.tsx` — validated enquiry form and submission states
- `components/Footer.tsx` — footer
- `app/api/enquiries/route.ts` — server-side API route
- `supabase/schema.sql` — database table definition

## Important before launch

- Replace the placeholder team names and image.
- Confirm that `thinketh@upi` is the correct UPI ID before accepting contributions.
- The API currently stores enquiries in Supabase; it does not yet send an email or WhatsApp notification.
- Add rate limiting/CAPTCHA and a privacy notice before public launch to reduce spam and clearly explain how parent contact details are used.
- Test the contact form, assessment, mobile layout, theme toggle and UPI deep link on real devices.
