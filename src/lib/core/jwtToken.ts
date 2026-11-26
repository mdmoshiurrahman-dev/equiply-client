"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const jwtToken = async () => {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  if (!jwtToken.token) {
    console.log("cant get jwt token");
  }
  return jwtToken.token;
};
