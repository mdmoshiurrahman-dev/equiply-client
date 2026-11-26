"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/auth/password-input";
import { AuthDivider } from "@/components/auth/auth-divider";
import { GoogleButton, LinkedInButton } from "@/components/auth/social/social-buttons";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
export function SignInForm() {
  const route = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handelSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const fromData = new FormData(event.currentTarget);
    const submissionData = Object.fromEntries(fromData.entries()) as {
      email: string;
      password: string;
      rememberMe: string;
    };
    const { data, error } = await signIn.email({
      email: submissionData.email,
      password: submissionData.password,
      rememberMe: submissionData.rememberMe ? true : false,
    });
    if (error) {
      toast.add({
        type: "error",
        description: error.message,
      });
      setIsSubmitting(false);
      return;
    }

    if (data?.user) {
      route.push('/')
      toast.add({
        type: "success",
        description: "Login Successfully",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
        {/* Email Address */}
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          className="h-11 bg-muted/50"
        />

        {/* Password */}
        <PasswordInput
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          className="h-11 bg-muted/50"
        />

        {/* Remember me / Forgot password */}
        <div className="flex items-center justify-between ">
          <div className="w-full">
            <label
              htmlFor="box"
              className="flex cursor-pointer items-center gap-2 text-sm font-medium"
            >
              <input
                id="box"
                type="checkbox"
                name="rememberMe"
                className="size-4 shrink-0 cursor-pointer accent-primary"
              />
              Remember me
            </label>
          </div>

          <div className="w-full flex justify-end items-center">
            <Link
              href="/forgot-password"
              className="text-sm font-medium  underline underline-offset-2 outline-none hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-11 w-full rounded-lg text-sm"
        >
          {isSubmitting ? <Spinner /> : "Sign In"}
        </Button>
      </form>
      {/* Divider */}
      <AuthDivider className="my-5" />

      {/* Social providers */}
      <div className="flex flex-col gap-3.5">
        <GoogleButton />
        {/* <LinkedInButton /> */}
      </div>
    </div>
  );
}
