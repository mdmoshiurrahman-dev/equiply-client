
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/toast";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";

export function GoogleButton() {
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const handelGoogleSignin = async () => {
    setIsGoogleLogin(true);
    const { data, error } = await signIn.social({
      provider: "google",
      callbackURL:'/',
      newUserCallbackURL:'/account-type'
    });
    if (data) {
      setIsGoogleLogin(false);
    } else {
      setIsGoogleLogin(false);
      toast.add({
        type: "error",
        description: error.message,
      });
    }
  };

  return (
    <Button
      disabled={isGoogleLogin}
      onClick={handelGoogleSignin}
      variant="outline"
      className="h-10 w-full gap-2.5 rounded-lg text-sm"
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-4 ${isGoogleLogin ? "hidden" : "block"}`}
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.58-5.16 3.58-8.81Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.79-2.12-6.74-4.96H1.29v3.1A12 12 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M5.26 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.37-2.28v-3.1H1.29a12 12 0 0 0 0 10.76l3.97-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.43-3.43A11.98 11.98 0 0 0 12 0 12 12 0 0 0 1.29 6.62l3.97 3.1C6.21 6.88 8.87 4.77 12 4.77Z"
        />
      </svg>
      {isGoogleLogin ? <Spinner /> : "Google"}
    </Button>
  );
}

export function LinkedInButton() {
  const [isLinkedInLogin, setIsLinkedInLogin] = useState(false);
  const handelLinkedInSignin = async () => {
    setIsLinkedInLogin(true);
    const { data, error } = await signIn.social({
      provider: "linkedin",
    });
    if (data) {
      setIsLinkedInLogin(false);
    } else {
      setIsLinkedInLogin(false);
      toast.add({
        type: "error",
        description: error.message,
      });
    }
  };
  return (
    <Button
      disabled={isLinkedInLogin}
      onClick={handelLinkedInSignin}
      variant="outline"
      className="h-10 w-full gap-2.5 rounded-lg text-sm"
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-4 ${isLinkedInLogin ? "hidden" : "block"}`}
        aria-hidden="true"
      >
        <path
          fill="#0A66C2"
          d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z"
        />
      </svg>
      {isLinkedInLogin ? <Spinner /> : "LinkedIn"}
    </Button>
  );
}
