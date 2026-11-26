export const uploadImage = async (image: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    },
  );
  if (!res.ok) {
    return "";
  }
  const data = await res.json();
  if (!data) {
    return "Image upload failed";
  }
  return data.data.url;
};
