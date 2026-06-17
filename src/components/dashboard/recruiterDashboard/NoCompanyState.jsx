"use client";

import { Button, Card } from "@heroui/react";
import { useState } from "react";
import CompanyForm from "./CompanyForm";

export default function NoCompanyState() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <CompanyForm />;
  }

  return (
    <Card className="border border-divider bg-content1/50 p-12">
      <div className="text-center">
        <div className="mb-6 text-6xl">🏢</div>

        <h1 className="text-3xl font-bold">
          Register Your Company
        </h1>

        <p className="mt-3 text-foreground/60">
          Before posting jobs, you need to create and verify your company.
        </p>

        <Button
          color="primary"
          size="lg"
          className="mt-8"
          onPress={() => setShowForm(true)}
        >
          Register Company
        </Button>
      </div>
    </Card>
  );
}