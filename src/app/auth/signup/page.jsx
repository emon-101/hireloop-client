"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  TextField,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      photoURL: formData.get("photoURL"),
      password: formData.get("password"),
      role: formData.get("role")
    };

    const password = userData.password;

    // Password Validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    setPasswordError("");

    try {
      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.photoURL,
        role: userData.role
      });

      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      if (data) {
        toast.success("Account created successfully");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Registration successful");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 mt-12">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
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
            <h2 className="text-3xl font-bold">Create Your Account</h2>

            <p className="mt-2 text-default-500">
              Join thousands of professionals and discover opportunities from
              top companies worldwide.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <TextField name="name" isRequired>
              <Label>Full Name</Label>

              <Input placeholder="John Doe" className="rounded-2xl" />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField name="email" isRequired>
              <Label>Email Address</Label>

              <Input
                type="email"
                placeholder="john@example.com"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="photoURL" isRequired>
              <Label>Profile Photo URL</Label>

              <Input
                type="url"
                placeholder="https://your-photo-url.com/profile.jpg"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField name="password" isRequired>
              <Label>Password</Label>

              <Input
                type="password"
                placeholder="Create a strong password"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Role Selection */}
            <div className="flex flex-col gap-4">
              <Label>Select Role</Label>
              <RadioGroup
                defaultValue="seeker"
                name="role"
                orientation="horizontal"
              >
                <Radio value="seeker">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>Job Seeker</Label>
                  </Radio.Content>
                </Radio>
                <Radio value="recruiter">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>Recruiter</Label>
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>
            {/* Validation Error */}
            {passwordError && (
              <p className="text-sm text-danger">{passwordError}</p>
            )}

            {/* Password Requirements */}
            <div className="rounded-2xl border border-divider bg-content2 p-4 text-sm">
              <p className="mb-2 font-medium">Password Requirements</p>

              <ul className="ml-5 list-disc space-y-1 text-default-600">
                <li>Minimum 6 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
              </ul>
            </div>

            {/* Register Button */}
            <Button type="submit" color="primary" className="w-full">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 border-t border-divider" />

            <span className="text-sm text-default-500">OR</span>

            <div className="flex-1 border-t border-divider" />
          </div>

          {/* Google Register */}
          <Button
            variant="bordered"
            className="w-full"
            onPress={handleGoogleRegister}
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm">
            Already have a HireLoop account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
