"use client";

import Link from "next/link";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const { data, error } = await authClient.signIn.email({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        toast.error(error.message || "Login failed");
        return;
      }

      if (data) {
        toast.success("Welcome back!");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 mt-12">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      <Card className="w-full max-w-xl border border-divider bg-content1/80 shadow-2xl backdrop-blur-xl">
        <div className="p-8">
          {/* Logo */}
          <div className="mb-6 text-center">
            <Link href="/">
              <h1 className="text-4xl font-black tracking-tight">
                <span className="text-primary">hire</span>
                <span className="text-warning">loop</span>
              </h1>
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">
              Welcome Back
            </h2>

            <p className="mt-2 text-default-500">
              Sign in to continue your job search journey
              and manage your applications.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <TextField name="email" isRequired>
              <Label>Email Address</Label>

              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField name="password" isRequired>
              <Label>Password</Label>

              <Input
                type="password"
                placeholder="Enter your password"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              color="primary"
              className="w-full"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 border-t border-divider" />
            <span className="text-sm text-default-500">
              OR
            </span>
            <div className="flex-1 border-t border-divider" />
          </div>

          {/* Google Login */}
          <Button
            variant="bordered"
            className="w-full"
            onPress={handleGoogleLogin}
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm">
            Don&#39;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold text-primary hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;