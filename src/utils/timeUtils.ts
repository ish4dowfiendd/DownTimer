export function convertTimeToTimestamp (hours: number, minutes: number): number {
  const now = new Date();
  const target = new Date(now);

  target.setHours(hours, minutes, 0, 0);

  if (target.getTime() < now.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  return target.getTime();
};

export function convertCountdownToTimestamp (hours: number, minutes: number): number {
  const durationMs = (hours * 60 + minutes) * 60_000;
  return Date.now() + durationMs;
};