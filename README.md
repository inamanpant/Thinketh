# Thinketh — website

Marketing site for Thinketh: critical thinking and life skills for Class 5–12, live online classes in India. Built with TanStack Start, React, TypeScript and Tailwind CSS.

## Running it on your own Supabase + Vercel

### 1. Create the database tables

Open your Supabase project -> **SQL Editor** and run the three files in `drizzle/migrations/` in order:

1. `0000_migration.sql` — creates `contact_enquiries` and `support_interest`
2. `0001_lock_form_tables_to_insert_only.sql` — visitors may only insert; no reading, editing or deleting
3. `0002_validate_public_form_inserts.sql` — rejects empty or oversized entries

### 2. Set your environment variables

Copy `.env.example` to `.env` and fill in your project's URL and **anon public key** (Supabase -> Project Settings -> API).

**Never put the service role key in this file or in any `VITE_*` variable.** Those values are sent to every visitor's browser. The anon key is safe to expose — the table rules from step 1 are what keep submissions private. The service role key is only for trusted server-side code, and this site needs none.

For Vercel: **Project -> Settings -> Environment Variables**, add `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID` and the two unprefixed versions (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`), then redeploy.

### 3. Local development

```sh
npm i
npm run dev
```

### 4. Deploy

This app is a TanStack Start app. Vercel support requires the TanStack Start self-hosting setup — see the TanStack Start "Deploying to Vercel" docs if the default build does not pick up the server output automatically.

## Project structure

- `src/data/` — course pricing, assessment questions, mission and pillar content (all typed; copy changes never touch layout)
- `src/routes/` — one file per page; `/pillars` and `/$pillar` drive the six pillar pages
- `src/integrations/supabase/` — database client (auto-generated; do not edit)
- `drizzle/migrations/` — the SQL that creates and protects the form tables

## Tests

```sh
npx vitest run
```
