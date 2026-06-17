"use client";

import { Button, Card, Chip } from "@heroui/react";
import { useState } from "react";
import CompanyForm from "./CompanyForm";
import Image from "next/image";

export default function CompanyProfile({ recruiter, company }) {
  const [editMode, setEditMode] = useState(false);
  if (editMode) {
    return (
      <CompanyForm
        recruiter={recruiter}
        company={company}
        isEdit={true}
      />
    );
  }

  const statusColor = {
    pending: "warning",
    approved: "success",
    rejected: "danger",
  };

  return (
    <Card className="border border-divider bg-content1/50 p-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex gap-5">
          <Image
            src={company.logo}
            alt={company.companyName}
            width={100}
            height={100}
            className="rounded-3xl border object-cover"
          />

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">
                {company.companyName}
              </h1>

              <Chip
                color={statusColor[company.status]}
                variant="flat"
              >
                {company.status}
              </Chip>
            </div>

            <p className="mt-2 text-foreground/60">
              {company.industry}
            </p>

            <a
              href={company.website}
              target="_blank"
              className="text-primary"
            >
              {company.website}
            </a>
          </div>
        </div>

        <Button
          color="primary"
          onPress={() => setEditMode(true)}
        >
          Update Company
        </Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-foreground/50">
            Location
          </p>
          <p>{company.location}</p>
        </div>

        <div>
          <p className="text-sm text-foreground/50">
            Employee Count
          </p>
          <p>{company.employeeCount}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-2 text-sm text-foreground/50">
          Description
        </p>

        <p>{company.description}</p>
      </div>
    </Card>
  );
}