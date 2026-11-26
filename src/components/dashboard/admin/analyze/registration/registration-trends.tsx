import "server-only";

import { jwtToken } from "@/lib/core/jwtToken";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import type { UserData } from "@/types/type";
import { RegistrationTrendsChart } from "./registration-trends-chart";
import { createSevenDayRegistrationData } from "./registration-trends-data";

export async function RegistrationTrends() {
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiBaseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured");
  }

  const response = await fetch(`${apiBaseUrl}/all-users`, {
    headers: {
      Authorization: `Bearer ${session?.session.token}`,
      "jwt-token": `Bearer ${jwt}`,
    },
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) {
    throw new Error(`Failed to load users for analytics: ${response.status}`);
  }

  const userDataInfo: UserData[] = await response.json();
  if (!Array.isArray(userDataInfo)) {
    throw new Error("The all-users API returned an invalid response");
  }

  return (
    <RegistrationTrendsChart
      data={createSevenDayRegistrationData(userDataInfo, new Date())}
    />
  );
}
