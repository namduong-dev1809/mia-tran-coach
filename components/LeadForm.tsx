"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/offer";

// shortcut: demo only, nothing is sent; connect an email tool (ConvertKit, Mailchimp…) for a real launch
export default function LeadForm() {
  const [done, setDone] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "");
    const next = { name: !name, email: !isValidEmail(email) };
    setErrors(next);
    if (!next.name && !next.email) return setDone(name);
    // move focus to the first field that needs fixing
    (e.currentTarget.elements.namedItem(next.name ? "name" : "email") as HTMLInputElement).focus();
  }

  if (done) {
    return (
      <div role="status" className="rounded-2xl bg-white p-6 ring-1 ring-blush">
        <p className="font-serif text-2xl">Thank you, {done}!</p>
        <p className="mt-2 text-muted">
          Your guide is on its way. Check your inbox (and the Promotions tab) in the next few minutes.
        </p>
        <p className="mt-4 text-xs text-muted">Demo: no email was actually sent.</p>
      </div>
    );
  }

  const field = "w-full rounded-xl border bg-white px-4 py-3 focus:border-clay";

  return (
    <form onSubmit={submit} noValidate className="grid gap-3 rounded-2xl bg-white p-5 ring-1 ring-blush sm:p-6">
      <label className="grid gap-1 text-sm font-medium">
        First name
        <input name="name" autoComplete="given-name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={`${field} ${errors.name ? "border-clay" : "border-blush"}`} />
      </label>
      {errors.name && (
        <p id="name-error" role="alert" className="-mt-2 text-sm text-clay-dark">
          Please tell me your first name.
        </p>
      )}
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={`${field} ${errors.email ? "border-clay" : "border-blush"}`} />
      </label>
      {errors.email && (
        <p id="email-error" role="alert" className="-mt-2 text-sm text-clay-dark">
          Please enter a valid email address.
        </p>
      )}
      <button type="submit" className="mt-1 rounded-xl bg-clay px-5 py-3.5 font-semibold text-white hover:bg-clay-dark">
        Send me the free guide →
      </button>
      <p className="text-center text-xs text-muted">No spam. Unsubscribe in one click.</p>
    </form>
  );
}
