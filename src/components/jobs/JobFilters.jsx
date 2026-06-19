"use client";

import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  Switch,
} from "@heroui/react";

const categories = [
  "Software Development",
  "Design",
  "Marketing",
  "Data Science",
  "DevOps",
  "Entertainment",
  "Automotive Technology",
  "Hospitality Technology",
  "Telecommunications",
  "E-Commerce",
];

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
];

export default function JobFilters({
  filters,
  setFilters,
  onReset,
}) {
  return (
    <div className="rounded-3xl border border-divider bg-content1 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Search Jobs
        </h2>

        <p className="text-sm text-foreground/60">
          Find opportunities matching your skills.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {/* Search */}
        <div>
          <Label>Job Title</Label>

          <Input
            value={filters.search}
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value,
              })
            }
            placeholder="Search jobs..."
          />
        </div>

        {/* Category */}
        <Select
          selectedKey={filters.category}
          onSelectionChange={(key) =>
            setFilters({
              ...filters,
              category: key || "",
            })
          }
        >
          <Label>Category</Label>

          <Select.Trigger>
            <Select.Value placeholder="All Categories" />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {categories.map((category) => (
                <ListBox.Item
                  key={category}
                  id={category}
                  textValue={category}
                >
                  {category}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Job Type */}
        <Select
          selectedKey={filters.type}
          onSelectionChange={(key) =>
            setFilters({
              ...filters,
              type: key || "",
            })
          }
        >
          <Label>Job Type</Label>

          <Select.Trigger>
            <Select.Value placeholder="All Types" />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {jobTypes.map((type) => (
                <ListBox.Item
                  key={type}
                  id={type}
                  textValue={type}
                >
                  {type}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Location */}
        <div>
          <Label>Location</Label>

          <Input
            value={filters.location}
            onChange={(e) =>
              setFilters({
                ...filters,
                location: e.target.value,
              })
            }
            placeholder="Dhaka, Bangladesh"
          />
        </div>

        {/* Salary */}
        <div>
          <Label>Minimum Salary</Label>

          <Input
            type="number"
            value={filters.salary}
            onChange={(e) =>
              setFilters({
                ...filters,
                salary: e.target.value,
              })
            }
            placeholder="20000"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <Switch
          isSelected={filters.remote}
          onValueChange={(value) =>
            setFilters({
              ...filters,
              remote: value,
            })
          }
        >
          Remote Only
        </Switch>

        <Button
          color="danger"
          variant="flat"
          onPress={onReset}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}