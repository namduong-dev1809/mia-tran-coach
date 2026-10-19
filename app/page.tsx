import EbookCover from "@/components/EbookCover";
import LeadForm from "@/components/LeadForm";
import Countdown from "@/components/Countdown";

const steps = [
  { title: "Pick a niche clients can find", text: "Why “I design anything” gets ignored, and how to choose a niche in an afternoon." },
  { title: "Build a 3-project portfolio", text: "What to show when you have no clients yet, and the one page every portfolio needs." },
  { title: "Set your first prices", text: "A simple formula so you never undercharge or scare clients away." },
  { title: "Find 20 leads in a week", text: "Where small businesses actually look for designers, and how to spot the good ones." },
  { title: "Write messages that get replies", text: "My 4-line outreach template, with real before and after examples." },
  { title: "Run a smooth first call", text: "The 6 questions that turn a chat into a signed project." },
  { title: "Deliver and get the testimonial", text: "How to finish on time and turn client #1 into clients #2 and #3." },
];

const reviews = [
  { name: "Linh P.", role: "Brand designer", text: "I sent step 5's template to 15 cafés and booked two projects the same month." },
  { name: "Jonas K.", role: "UI designer", text: "The pricing chapter alone paid for itself. I raised my rate by 40% and nobody blinked." },
  { name: "Ama O.", role: "Illustrator", text: "Short, practical and kind. Exactly what I needed to finally quit my day job." },
];

const course = [
  "6 weekly video lessons (45 min each)",
  "Portfolio and pricing templates",
  "Live group call every Friday",
  "Private community of 300+ designers",
  "Lifetime access and updates",
];

const faqs = [
  { q: "Is the guide really free?", a: "Yes. Enter your name and email and it arrives in your inbox. No card, no catch." },
  { q: "I'm a complete beginner. Is this for me?", a: "Yes. The guide assumes you have design skills but zero clients and no business experience." },
  { q: "What's the difference between the guide and the course?", a: "The guide gives you the 7 steps. The course walks you through each one with templates, feedback and live calls." },
  { q: "What if the course isn't right for me?", a: "Ask for a refund within 14 days and you get every cent back." },
];

export default function Home() {
  return (
    <>
      <p className="bg-ink px-4 py-2 text-center text-xs text-cream/80">
        Demo landing page · fictional coach · built by{" "}
        <a href="https://duongthanhnam.vercel.app" className="underline hover:text-white">
          Duong Thanh Nam
        </a>
      </p>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#top" className="font-serif text-2xl">
          Mia Tran
        </a>
        <a href="#get-guide" className="rounded-full border border-ink px-4 py-2 text-sm font-medium hover:bg-ink hover:text-cream">
          Get the free guide
        </a>
      </header>

      <main>
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-8 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pt-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">Free guide for designers</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">Land your first freelance client in 30 days.</h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              The exact 7 steps I used to go from zero clients to fully booked, in a 24-page guide you can read over one coffee.
            </p>
            <ul className="mt-6 grid gap-2 text-sm">
              {["Copy-paste outreach template", "Simple pricing formula", "Checklist for your first client call"].map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden="true" className="text-clay">
                    ✔
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 max-w-md">
              <LeadForm />
            </div>
          </div>
          <div className="py-6">
            <EbookCover />
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="reveal text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">Inside the guide</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">7 steps, no fluff</h2>
            </div>
            <ol className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5">
                  <span className="font-serif text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-[auto_1fr]">
          <div aria-hidden="true" className="reveal mx-auto grid size-44 place-items-center rounded-full bg-blush font-serif text-6xl text-clay ring-8 ring-white">
            MT
          </div>
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">Hi, I&apos;m Mia</p>
            <h2 className="mt-3 font-serif text-4xl">I help designers turn their skills into a business.</h2>
            <p className="mt-4 text-muted">
              Eight years ago I quit my agency job with no clients and no plan. Today I run a fully booked studio and have coached over 1,200 designers through
              their first year of freelancing.
            </p>
            <dl className="mt-6 flex flex-wrap gap-8">
              {[
                ["1,200+", "designers coached"],
                ["8 yrs", "freelancing"],
                ["4.9/5", "course rating"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-serif text-3xl">{n}</dd>
                  <dd className="text-sm text-muted">{l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted">Fictional coach and sample figures for this demo.</p>
          </div>
        </section>

        <section className="bg-blush/50 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="reveal text-center font-serif text-4xl">What readers say</h2>
            <p className="reveal mt-2 text-center text-xs text-muted">Sample reviews for this demo</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal rounded-2xl bg-white p-7">
                  <blockquote className="font-serif text-xl leading-snug">“{r.text}”</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold">{r.name}</span> <span className="text-muted">· {r.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-4 py-24 text-white sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-blush">Ready to go further?</p>
            <h2 className="reveal mt-3 font-serif text-4xl sm:text-5xl">Client Ready: the 6-week course</h2>
            <p className="reveal mx-auto mt-4 max-w-xl text-white/80">Everything in the guide, done together, with templates, feedback and live calls.</p>
            <div className="reveal mt-10">
              <p className="mb-4 text-sm text-white/80">Early-bird price ends Sunday at midnight</p>
              <Countdown />
            </div>
            <div className="reveal mx-auto mt-10 max-w-md rounded-2xl bg-white p-8 text-left text-ink">
              <p className="flex items-baseline gap-3">
                <span className="font-serif text-5xl">$197</span>
                <span className="text-muted line-through">$297</span>
              </p>
              <ul className="mt-6 grid gap-3">
                {course.map((c) => (
                  <li key={c} className="flex gap-3 text-sm">
                    <span aria-hidden="true" className="text-clay">
                      ✔
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <a href="#get-guide" className="mt-8 block rounded-xl bg-clay px-5 py-3.5 text-center font-semibold text-white hover:bg-clay-dark">
                Start with the free guide
              </a>
              <p className="mt-3 text-center text-xs text-muted">14-day money-back guarantee</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <h2 className="reveal text-center font-serif text-4xl">Questions</h2>
          <div className="reveal mt-10 divide-y divide-blush rounded-2xl bg-white ring-1 ring-blush">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-semibold">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-clay transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-blush">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 Mia Tran · a fictional coach</p>
          <p>
            Design &amp; build:{" "}
            <a href="https://duongthanhnam.vercel.app" className="underline hover:text-ink">
              Duong Thanh Nam
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
