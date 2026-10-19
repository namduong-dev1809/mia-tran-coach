// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { isValidEmail, nextDeadline, timeLeft } from "./offer.ts";

test("deadline is the coming Sunday 23:59:59", () => {
  const wed = new Date(2026, 9, 21, 10, 0, 0); // Wed 21 Oct 2026
  const d = nextDeadline(wed);
  assert.equal(d.getDay(), 0);
  assert.equal(d.getDate(), 25);
  assert.deepEqual([d.getHours(), d.getMinutes(), d.getSeconds()], [23, 59, 59]);
});

test("on Sunday the deadline is the same evening", () => {
  const sun = new Date(2026, 9, 25, 8, 0, 0);
  assert.equal(nextDeadline(sun).getDate(), 25);
});

test("time left splits into days, hours, minutes, seconds", () => {
  const now = new Date(2026, 9, 21, 10, 0, 0);
  assert.deepEqual(timeLeft(now, nextDeadline(now)), { days: 4, hours: 13, minutes: 59, seconds: 59 });
});

test("past deadline shows zero, never negative", () => {
  const now = new Date(2026, 9, 26, 0, 0, 5);
  assert.deepEqual(timeLeft(now, new Date(2026, 9, 25, 23, 59, 59)), { days: 0, hours: 0, minutes: 0, seconds: 0 });
});

test("email check", () => {
  assert.ok(isValidEmail("mia@coach.io"));
  assert.ok(!isValidEmail("mia@coach"));
});
