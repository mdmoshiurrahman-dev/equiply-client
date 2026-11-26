"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleButton } from "@/components/auth/social/social-buttons";
import { AuthDivider } from "@/components/auth/auth-divider";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";

const signUpUserSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .max(50, "Name must be at most 50 characters long."),
    email: z.email("Invalid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "At least one uppercase letter is required")
      .regex(/[a-z]/, "At least one lowercase letter is required"),
    conformPassword: z.string(),
  })
  .refine((data) => data.password === data.conformPassword, {
    message: "Passwords do not match",
    path: ["conformPassword"],
  });

export type signUpUserSchemaType = z.infer<typeof signUpUserSchema>;

export function SignUpForm() {
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signUpUserSchemaType>({
    resolver: zodResolver(signUpUserSchema),
  });

  const handelFormSubmit = async (data: signUpUserSchemaType) => {
    const submissionData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const { data: resData, error } = await signUp.email({
      ...submissionData,
    });
    if (resData?.user) {
      route.push("/account-type");
      toast.add({
        type: "success",
        description: "Account created successfully",
      });
    }
    if (error) {
      toast.add({
        type: "error",
        description: error.message,
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-3.5"
      onClick={handleSubmit(handelFormSubmit)}
    >
      <div>
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            className="h-10"
            required
            {...register("name")}
          />

          <p
            id="fullName-error"
            role="alert"
            className="mt-1.5 text-sm text-destructive"
          >
            {errors.name?.message}
          </p>
        </div>
      </div>

      {/* Email Address */}
      <div>
        <Input
          type="email"
          placeholder="Email Address"
          className="h-10"
          required
          {...register("email")}
        />

        <p
          id="email-error"
          role="alert"
          className="mt-1.5 text-sm text-destructive"
        >
          {errors.email?.message}
        </p>
      </div>

      {/* Password */}
      <div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pr-10 h-10"
            {...register("password")}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            aria-hidden="true"
            className="absolute cursor-pointer inset-y-0 right-3 flex items-center text-muted-foreground"
          >
            {showPassword ? (
              <Eye className="size-4 " />
            ) : (
              <EyeOff className="size-4" />
            )}
          </span>
        </div>
        <p
          id="password-error"
          role="alert"
          className="mt-1.5 text-sm text-destructive"
        >
          {errors.password?.message}
        </p>
      </div>

      {/* Confirm Password */}
      <div>
        <div className="relative">
          {" "}
          <Input
            type={showConformPassword ? "text" : "password"}
            placeholder="conform password"
            className="pr-10 h-10"
            {...register("conformPassword")}
          />
          <span
            onClick={() => setShowConformPassword(!showConformPassword)}
            aria-hidden="true"
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
          >
            {showConformPassword ? (
              <Eye className="size-4 " />
            ) : (
              <EyeOff className="size-4" />
            )}
          </span>
        </div>
        <p
          id="confirmPassword-error"
          role="alert"
          className="mt-1.5 text-sm text-destructive"
        >
          {errors.conformPassword?.message}
        </p>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-1 h-10 w-full rounded-lg text-sm"
      >
        {isSubmitting ? (
          <span>
            <Spinner />
          </span>
        ) : (
          "Create Account"
        )}
      </Button>

      <AuthDivider />

      <div className="flex flex-col gap-3">
        <GoogleButton />
        {/* <LinkedInButton /> */}
      </div>
    </form>
  );
}
