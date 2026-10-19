export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

/** The early-bird price always ends this coming Sunday at 23:59:59 (visitor's local time). */
export function nextDeadline(now: Date): Date {
  const d = new Date(now);
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7)); // getDay(): Sunday = 0
  d.setHours(23, 59, 59, 0);
  return d;
}

export function timeLeft(now: Date, deadline: Date): TimeLeft {
  let s = Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000));
  const days = Math.floor(s / 86400);
  s -= days * 86400;
  const hours = Math.floor(s / 3600);
  s -= hours * 3600;
  const minutes = Math.floor(s / 60);
  return { days, hours, minutes, seconds: s - minutes * 60 };
}

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
