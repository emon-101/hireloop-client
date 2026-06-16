"use client";

import { useState } from "react";
import { Button, Input, Card, Switch, TextArea } from "@heroui/react";

export default function NewJobForm() {
  const [isRemote, setIsRemote] = useState(false);
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Remote",
    "Contract",
    "Internship",
  ];

  const categories = [
    "Software Development",
    "Design",
    "Marketing",
    "Sales",
    "Product Management",
    "Customer Support",
  ];

  const currencies = ["USD", "EUR", "GBP", "BDT"];

  const selectClass =
    "w-full rounded-xl border border-divider bg-content1 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const jobData = {
      title: formData.get("title"),
      category: formData.get("category"),
      type: formData.get("type"),
      minSalary: formData.get("minSalary"),
      maxSalary: formData.get("maxSalary"),
      currency: formData.get("currency"),
      city: formData.get("city"),
      country: formData.get("country"),
      deadline: formData.get("deadline"),
      responsibilities: formData.get("responsibilities"),
      requirements: formData.get("requirements"),
      benefits: formData.get("benefits"),
      remote: isRemote,
      status: "active",
    };

    console.log(jobData);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black">Post a New Job</h1>

        <p className="mt-2 text-foreground/60">
          Create a professional job listing and attract top talent through
          HireLoop.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Job Information */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          {/* Header */}
          <div className="mb-8 border-b border-divider pb-5">
            <h2 className="text-2xl font-bold">Job Information</h2>

            <p className="mt-2 text-sm text-foreground/60">
              Define the core details of your job posting. This information will
              be visible to candidates browsing opportunities on HireLoop.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Job Title */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Job Title
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Use a clear and searchable title.
              </p>

              <Input
                name="title"
                placeholder="Senior Frontend Developer"
                required
              />
            </div>

            {/* Job Category */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Job Category
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Choose the department or field this role belongs to.
              </p>

              <select name="category" required className={selectClass}>
                <option value="">Select Category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Employment Type
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Define how candidates will work with your company.
              </p>

              <select name="type" required className={selectClass}>
                <option value="">Select Employment Type</option>

                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Application Deadline
                <span className="ml-1 text-danger">*</span>
              </label>

              <p className="text-xs text-foreground/50">
                Applications will close automatically after this date.
              </p>

              <Input type="date" name="deadline" required />
            </div>
          </div>

          {/* Tip Box */}
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm text-primary">
              💡 Jobs with clear titles, detailed categories, and realistic
              deadlines typically receive more qualified applicants.
            </p>
          </div>
        </Card>

        {/* Compensation & Location */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          {/* Header */}
          <div className="mb-8 border-b border-divider pb-5">
            <h2 className="text-2xl font-bold">Compensation & Location</h2>

            <p className="mt-2 text-sm text-foreground/60">
              Set salary expectations and define where candidates will work.
              Transparent compensation helps attract higher-quality applicants.
            </p>
          </div>

          {/* Salary Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Salary Information</h3>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="block text-sm font-semibold">
                  Minimum Salary
                </label>

                <p className="text-xs text-foreground/50">
                  Starting compensation offered for this role.
                </p>

                <Input type="number" name="minSalary" placeholder="1000" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">
                  Maximum Salary
                </label>

                <p className="text-xs text-foreground/50">
                  Highest compensation available.
                </p>

                <Input type="number" name="maxSalary" placeholder="5000" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Currency</label>

                <p className="text-xs text-foreground/50">
                  Select the salary currency.
                </p>

                <select name="currency" className={selectClass}>
                  <option value="">Select Currency</option>

                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Remote Toggle */}
          <div className="mt-8 rounded-2xl border border-divider bg-content2 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">Remote Position</h3>

                <p className="mt-1 text-sm text-foreground/60">
                  Enable this if employees can work remotely from anywhere.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-divider bg-content2 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Remote Position</h3>

                    <p className="mt-1 text-sm text-foreground/60">
                      Enable this if employees can work remotely from anywhere.
                    </p>
                  </div>

                  <Switch isSelected={isRemote} onChange={setIsRemote}>
                    <Switch.Content>
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                    </Switch.Content>
                  </Switch>
                </div>

                <div className="mt-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isRemote
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    {isRemote ? "Remote Enabled" : "Office Required"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Fields */}
          {!isRemote && (
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Office Location</h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">City</label>

                  <p className="text-xs text-foreground/50">
                    Enter the city where employees will work.
                  </p>

                  <Input name="city" placeholder="Dhaka" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Country</label>

                  <p className="text-xs text-foreground/50">
                    Select the country for this position.
                  </p>

                  <Input name="country" placeholder="Bangladesh" />
                </div>
              </div>
            </div>
          )}

          {/* Tip Box */}
          <div className="mt-8 rounded-2xl border border-success/20 bg-success/5 p-4">
            <p className="text-sm text-success">
              💰 Jobs with a visible salary range receive significantly more
              applications and improve candidate trust.
            </p>
          </div>
        </Card>

        {/* Job Description */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          <div className="mb-8 border-b border-divider pb-4">
            <h2 className="text-xl font-bold">Job Description</h2>

            <p className="mt-1 text-sm text-foreground/60">
              Provide detailed information about the role, expectations, and
              benefits.
            </p>
          </div>

          <div className="space-y-8">
            {/* Responsibilities */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Responsibilities
                <span className="ml-1 text-danger">*</span>
              </label>

              <textarea
                name="responsibilities"
                rows={6}
                required
                placeholder="Example:
                • Develop and maintain web applications
                • Collaborate with UI/UX designers
                • Optimize application performance"
                className="w-full rounded-2xl border border-divider bg-content1 p-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Requirements
                <span className="ml-1 text-danger">*</span>
              </label>

              <textarea
                name="requirements"
                rows={6}
                required
                placeholder="Example:
                • 2+ years experience with React
                • Strong JavaScript knowledge
                • Familiarity with REST APIs"
                className="w-full rounded-2xl border border-divider bg-content1 p-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Benefits */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Benefits
              </label>

              <textarea
                name="benefits"
                rows={5}
                placeholder="Example:
                • Health Insurance
                • Remote Work Allowance
                • Performance Bonus
                • Flexible Working Hours"
                className="w-full rounded-2xl border border-divider bg-content1 p-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </Card>

        {/* Company Information */}
        <Card className="border border-divider bg-content1/50 p-8 shadow-sm backdrop-blur-md">
          <div className="mb-6 border-b border-divider pb-4">
            <h2 className="text-xl font-bold">Company Information</h2>

            <p className="mt-1 text-sm text-foreground/60">
              Posting limits based on your current subscription.
            </p>
          </div>

          <div className="rounded-2xl border border-divider bg-content2 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">TechNova Ltd.</h3>

                <p className="text-sm text-success">✓ Approved Company</p>
              </div>

              <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Growth Plan
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Active Jobs Usage</span>
                <span>4 / 10</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-default-200">
                <div className="h-full w-[40%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            className="bg-linear-to-r from-violet-600 to-indigo-500 px-12 text-white shadow-lg"
          >
            Publish Job
          </Button>
        </div>
      </form>
    </div>
  );
}
