import type { UserData } from "@/types/type";

export interface RegistrationTrendPoint {
  date: string;
  renters: number;
  providers: number;
}

export const registrationSeriesColors = {
  renters: "#5CB985",
  providers: "#4D96E0",
} as const;

export const registrationTickIndexes: readonly number[] = [
  0, 1, 2, 3, 4, 5, 6,
];

interface DailyRegistrationCounts {
  renters: number;
  providers: number;
}

const DAY_IN_MS = 24 * 60 * 60 * 1000;

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_IN_MS);
}

export function createSevenDayRegistrationData(
  users: UserData[],
  now: Date,
): RegistrationTrendPoint[] {
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  const firstDay = addDays(today, -6);
  const firstDateKey = toDateKey(firstDay);

  let renters = 0;
  let providers = 0;
  const countsByDay = new Map<string, DailyRegistrationCounts>();

  for (const user of users) {
    const role = user.role.toLowerCase();
    if (role !== "renter" && role !== "provider") continue;

    const createdAt = new Date(user.createdAt);
    if (Number.isNaN(createdAt.getTime())) {
      throw new Error("The users API returned an invalid createdAt value");
    }

    const createdDay = new Date(
      Date.UTC(
        createdAt.getUTCFullYear(),
        createdAt.getUTCMonth(),
        createdAt.getUTCDate(),
      ),
    );
    if (createdDay.getTime() > today.getTime()) continue;

    if (toDateKey(createdDay) < firstDateKey) {
      if (role === "renter") renters += 1;
      else providers += 1;
      continue;
    }

    const dateKey = toDateKey(createdDay);
    const dailyCounts = countsByDay.get(dateKey) ?? {
      renters: 0,
      providers: 0,
    };
    if (role === "renter") dailyCounts.renters += 1;
    else dailyCounts.providers += 1;
    countsByDay.set(dateKey, dailyCounts);
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  const points: RegistrationTrendPoint[] = [];

  for (let offset = 0; offset < 7; offset += 1) {
    const date = addDays(firstDay, offset);
    const dateKey = toDateKey(date);
    const dailyCounts = countsByDay.get(dateKey);
    renters += dailyCounts?.renters ?? 0;
    providers += dailyCounts?.providers ?? 0;
    points.push({
      date: formatter.format(date),
      renters,
      providers,
    });
  }

  return points;
}
