export const authFetch = async (
  token: string,
  api: string,
  fetchMethod: "POST" | "DELETE" | "PATCH",
  data = '',
) => {
  if (!token) {
    return { status: 401, message: "Unauthorized" };
  }

  const res = await fetch(api, {
    method: fetchMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res;
};
