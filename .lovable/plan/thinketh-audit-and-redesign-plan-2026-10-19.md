# Thinketh — Audit and Redesign Plan

Note: your current site is built outside this project, so I can't edit it directly. This plan rebuilds Thinketh here, keeping your content, the assessment and the contact form. Your existing site keeps running until you switch over.

## 1. Audit of the live site (thinketh-five.vercel.app)

What works
- Strong, warm idea: learning as a habit, not a last-minute sprint.
- A real 15-question assessment by class level — the best thing on the site.
- Clear course stages (Foundation, Intermediate, Advanced) with durations.
- Parent call-back form with consent checkbox.

What holds it back
- Message mismatch: the brief says "teach how to think" with six pillars (Think, Life, Money, Civic, Tech, World); the site lists school subjects plus six different skill groups. Visitors get two different stories.
- Everything sits on one long page, so Google sees one page for every topic — no page can rank for "financial literacy for students" or "critical thinking for Class 8".
- The page title appears empty in the HTML; only one description exists.
- Hero opens mid-thought ("Getting somewhere is a byproduct...") with no clear headline or next step.
- Topic lists (Spell bee, Debate, Chess...) are labels only — nothing to click or learn from.
- Team section shows names with no roles or photos, which weakens trust.
- Class range is inconsistent: "Class 5 to 11" vs "5 to 12".
- Support/donation section has no detail on what support funds.
- No free learning content a student would come back to or share.

## 2. Module-by-module plan

1. Header — short nav: Pillars, Assessment, Courses, About, Contact. Works with keyboard.
2. Opening screen — one clear headline ("Don't just learn what to think. Learn how to think."), one sentence, two buttons: "Take the 5-minute challenge" and "Explore topics". Includes a live "Question of the day" the student can answer right there.
3. Six pillars — an interactive grid; each card opens its own page.
4. Pillar pages (6) — what it is, why it matters, 3 sample questions with explained answers, links to related pillars.
5. Assessment — keep the 15-question format by class level; after each answer show why it's right, and finish with suggested pillars to explore.
6. Courses — the three stages shown as a timeline with durations.
7. Activities — Debate, Spell bee, "What would you do?" etc. each flip to show a sample prompt.
8. About/team — names, roles, a line each, Instagram link.
9. Support a student — what support pays for, then the interest form.
10. Contact — the parent call-back form, stored securely.

## 3. Priorities

Launch-critical: new opening screen, six pillar pages, assessment, contact form, page titles and descriptions, sitemap.
High-impact: question of the day, explained answers, activities flip cards, team page.
Future: weekly question archive, printable worksheets, parent guides, short articles per pillar.

## 4. Search plan (page per intent)

| Page | Intent it answers |
|---|---|
| / | Online life-skills and critical-thinking classes for Class 5–12 |
| /think | Critical thinking for students |
| /money | Financial literacy for school students |
| /civic | Civic sense and rights for students in India |
| /tech | Digital safety and AI basics for kids |
| /life | Life skills and communication for teenagers |
| /world | General knowledge and current affairs for students |
| /assessment | Free critical thinking test by class |
| /courses | Online classes, Foundation to Advanced |
| /about, /contact | Brand and enquiries |

No made-up search volumes; once live, we confirm real queries in Google Search Console. Each page gets its own title, description, heading and share card, plus sitemap and robots file. Quiz pages get structured data only where it matches what's on screen.

## 5. Look and feel
Near-black background, cyan accent (#00C7D9), white and soft-grey text, sparing yellow and purple highlights, bold editorial headings, thin borders, calm motion that switches off for users who prefer less movement.

## Technical details
- Built on this project's stack (TanStack Start + Tailwind), not Next.js; one route file per page listed above.
- Contact and support forms saved with Lovable Cloud (replaces your current database setup; existing records stay where they are).
- Assessment questions and pillar content kept in typed data files; scoring logic covered by a small test.
- Build in stages: (1) design system + home + header/footer, (2) pillar pages, (3) assessment, (4) courses/about/activities, (5) forms + Cloud, (6) sitemap, robots, metadata check.
