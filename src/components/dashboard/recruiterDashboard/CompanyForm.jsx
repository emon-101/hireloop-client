"use client";

import { useState } from "react";
import { Button, Card, Input } from "@heroui/react";
import Image from "next/image";

const industries = [
  "Software Development",
  "FinTech",
  "E-Commerce",
  "Healthcare",
  "Education",
  "Marketing",
  "Telecommunications",
  "Consulting",
];

const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
];

export default function CompanyForm() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectClass =
    "w-full rounded-2xl border border-divider bg-content1 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-content1 dark:text-foreground dark:bg-zinc-900 dark:text-white";

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const formData = new FormData(e.target);

      // 1. Upload logo to ImageBB
      const logoFile = formData.get("logo");

      let logoUrl = "";

      if (logoFile && logoFile.size > 0) {
        const imageData = new FormData();

        imageData.append("image", logoFile);

        const uploadRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
          {
            method: "POST",
            body: imageData,
          }
        );

        const uploadResult = await uploadRes.json();

        logoUrl = uploadResult?.data?.url || "";
      }

      // 2. Prepare company data
      const companyData = {
        companyName: formData.get("companyName"),
        industry: formData.get("industry"),
        website: formData.get("website"),
        location: formData.get("location"),
        employeeCount: formData.get("employeeCount"),
        description: formData.get("description"),
        logo: logoUrl,
        status: "pending",
      };

      // 3. Save to database
      const response = await fetch("/api/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      });

      const result = await response.json();

      console.log(result);

      // toast.success("Company registered successfully!");
    } catch (error) {
      console.error(error);

      // toast.error("Failed to register company");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Register Company
        </h1>

        <p className="mt-2 text-foreground/60">
          Create your company profile to start posting jobs and receiving
          applications from talented candidates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Company Identity */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          <div className="mb-8 border-b border-divider pb-5">
            <h2 className="text-2xl font-bold">
              Company Identity
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
              Basic information about your organization.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Company Name
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Enter your official company name.
              </p>

              <Input
                name="companyName"
                placeholder="TechNova Solutions"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Industry
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Select the industry your company belongs to.
              </p>

              <select
                name="industry"
                required
                className={selectClass}
              >
                <option value="">
                  Select Industry
                </option>

                {industries.map((industry) => (
                  <option
                    key={industry}
                    value={industry}
                  >
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-semibold">
                Website URL
              </label>

              <p className="text-xs text-foreground/50">
                Enter your company website.
              </p>

              <Input
                name="website"
                type="url"
                placeholder="https://company.com"
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm text-primary">
              💡 Companies with complete profiles receive more trust from
              candidates and attract higher-quality applicants.
            </p>
          </div>
        </Card>

        {/* Company Logo */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          <div className="mb-8 border-b border-divider pb-5">
            <h2 className="text-2xl font-bold">
              Company Branding
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
              Upload your company logo.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-divider bg-content2">
              {logoPreview ? (
                <Image
                  src={logoPreview}
                  alt="Company Logo"
                  className="h-full w-full object-cover"
                  height={40}
                  width={40}
                />
              ) : (
                <div className="text-center">
                  <div className="text-4xl">
                    🏢
                  </div>

                  <p className="mt-2 text-xs text-foreground/40">
                    Logo Preview
                  </p>
                </div>
              )}
            </div>

            <Input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-success/20 bg-success/5 p-4">
            <p className="text-sm text-success">
              🎨 Company logos increase profile engagement and employer branding.
            </p>
          </div>
        </Card>

        {/* Company Details */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          <div className="mb-8 border-b border-divider pb-5">
            <h2 className="text-2xl font-bold">
              Company Details
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
              Help candidates understand your company better.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Location
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Headquarters or primary office location.
              </p>

              <Input
                name="location"
                placeholder="Dhaka, Bangladesh"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Employee Count
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Select your company size.
              </p>

              <select
                name="employeeCount"
                required
                className={selectClass}
              >
                <option value="">
                  Select Employee Range
                </option>

                {employeeRanges.map((range) => (
                  <option
                    key={range}
                    value={range}
                  >
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8">
            <label className="mb-3 block text-sm font-semibold">
              Company Description
              <span className="ml-1 text-danger">*</span>
            </label>

            <textarea
              name="description"
              rows={7}
              required
              placeholder="Describe your company, mission, products, culture, values, and what makes your organization unique..."
              className="w-full rounded-2xl border border-divider bg-content1 p-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </Card>

        {/* Verification Notice */}
        <Card className="border border-warning/20 bg-warning/5 p-6">
          <h3 className="font-semibold text-warning">
            Company Verification Required
          </h3>

          <p className="mt-2 text-sm text-warning/80">
            After submission, your company will be created with
            <strong> Pending</strong> status. An administrator must review and
            approve the company before it becomes publicly visible and can post
            jobs.
          </p>
        </Card>

        {/* Submit */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="bg-linear-to-r from-violet-600 to-indigo-500 px-12 text-white shadow-lg"
          >
            Register Company
          </Button>
        </div>
      </form>
    </div>
  );
}