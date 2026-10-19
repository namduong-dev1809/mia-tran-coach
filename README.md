# Mia Tran — lead magnet landing page demo

A one-page landing page that gives away a free guide in exchange for an email, then introduces a paid course. The coach, figures and reviews are **fictional**, built as a portfolio demo of the kind of page coaches and course creators run Meta ads to.

## Features

- **Ebook cover drawn in HTML/CSS** with a gentle float animation (no image files)
- **Lead form** (first name + email) with per-field validation and a personalised thank-you state
- **Early-bird countdown** that always runs to the coming Sunday at midnight in the visitor's time zone
- 7-step guide outline, about section, sample reviews, course offer card, FAQ accordion
- Fade-in on scroll, mobile-first, honours reduced-motion settings

## Tech

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · deployed on Vercel

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # countdown maths and email check
```

| Path | What it holds |
|---|---|
| `lib/offer.ts` | Deadline and countdown maths, email check |
| `components/LeadForm.tsx` | Sign-up form and thank-you state |
| `components/Countdown.tsx` | Live countdown |
| `components/EbookCover.tsx` | The CSS ebook cover |

Made by [Duong Thanh Nam](https://duongthanhnam.vercel.app).
