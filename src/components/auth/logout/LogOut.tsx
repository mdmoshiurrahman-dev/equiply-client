import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const LogOut = () => {
  const router = useRouter();
  const handelSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };
  return (
    <>
      <Button
        onClick={handelSignOut}
        size={"lg"}
        className={"h-9 rounded-lg px-5"}
      >
        LogOut
      </Button>
    </>
  );
};

export default LogOut;
