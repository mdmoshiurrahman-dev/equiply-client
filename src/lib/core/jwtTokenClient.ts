import { authClient } from "../auth-client";

export const jwtTokenClient = async () => {
  const jwtToken = await authClient.token();
  if (jwtToken.error) {
    console.log(jwtToken.error);
  }
  return jwtToken.data?.token;
};
