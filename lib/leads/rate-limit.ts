const COOLDOWN_MS = 60_000;
const MAX_ENTRIES = 500;

const recentSubmissions = new Map<string, number>();

function pruneExpired(now: number): void {
  for (const [key, timestamp] of recentSubmissions) {
    if (now - timestamp > COOLDOWN_MS) {
      recentSubmissions.delete(key);
    }
  }

  if (recentSubmissions.size > MAX_ENTRIES) {
    const oldest = [...recentSubmissions.entries()].sort(
      (a, b) => a[1] - b[1],
    );

    for (let i = 0; i < oldest.length - MAX_ENTRIES; i++) {
      recentSubmissions.delete(oldest[i][0]);
    }
  }
}

export function isDuplicateSubmission(phone: string): boolean {
  const now = Date.now();
  pruneExpired(now);

  const lastSent = recentSubmissions.get(phone);
  return lastSent !== undefined && now - lastSent < COOLDOWN_MS;
}

export function markSubmission(phone: string): void {
  recentSubmissions.set(phone, Date.now());
}
