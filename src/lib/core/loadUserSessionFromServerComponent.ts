import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export const loadUserSessionFromServerComponent = async () => {
  await connection();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect('/sign-in');
  }
  return session;
};

export const getOptionalUserSession = async () => {
  await connection();
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch {
    return null;
  }
};
