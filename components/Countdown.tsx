"use client";

import { useEffect, useState } from "react";
import { nextDeadline, timeLeft, type TimeLeft } from "@/lib/offer";

const units: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];

export default function Countdown() {
  // starts empty: the server can't know the visitor's clock, so the numbers appear after mount
  const [left, setLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const deadline = nextDeadline(new Date());
    const tick = () => setLeft(timeLeft(new Date(), deadline));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div role="timer" aria-label="Early-bird price ends Sunday at midnight" className="flex justify-center gap-3">
      {units.map((u) => (
        <div key={u} className="w-16 rounded-xl bg-white/10 py-3 text-center sm:w-20">
          <p className="font-serif text-3xl tabular-nums sm:text-4xl">{left ? String(left[u]).padStart(2, "0") : "--"}</p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-widest text-white/70">{u}</p>
        </div>
      ))}
    </div>
  );
}
