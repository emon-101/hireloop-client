"use client";

import {
  Table,
  Chip,
  Button,
  Tooltip,
} from "@heroui/react";

import {
  Eye,
  Edit2,
  Trash2,
} from "lucide-react";

export default function JobsTable({ jobs }) {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "success";
      case "inactive":
        return "danger";
      default:
        return "warning";
    }
  };

  return (
    <Table aria-label="Company jobs management table">
      <Table.ResizableContainer>
        <Table.Content className="min-w-[1100px]">
          <Table.Header>
            <Table.Column
              isRowHeader
              defaultWidth="2fr"
              id="job"
              minWidth={220}
            >
              Job
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              defaultWidth="1.5fr"
              id="type"
              minWidth={160}
            >
              Type / Category
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              defaultWidth="1.5fr"
              id="salary"
              minWidth={180}
            >
              Salary
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              defaultWidth="1.2fr"
              id="location"
              minWidth={140}
            >
              Location
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              defaultWidth="1fr"
              id="deadline"
              minWidth={120}
            >
              Deadline
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              defaultWidth="1fr"
              id="status"
              minWidth={120}
            >
              Status
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              defaultWidth="1.2fr"
              id="actions"
              minWidth={160}
            >
              Actions
            </Table.Column>
          </Table.Header>

          <Table.Body emptyContent="No jobs found.">
            {jobs.map((job) => (
              <Table.Row
                key={job._id?.$oid || job._id}
              >
                <Table.Cell>
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {job.title}
                    </span>

                    <span className="text-xs text-default-500">
                      {job.category}
                    </span>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {job.type}
                    </span>

                    <span className="text-xs text-default-500">
                      {job.category}
                    </span>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  {job.currency} {job.minSalary} -{" "}
                  {job.maxSalary}
                </Table.Cell>

                <Table.Cell>
                  {job.remote
                    ? "Remote"
                    : `${job.city || "-"}, ${
                        job.country || "-"
                      }`}
                </Table.Cell>

                <Table.Cell>
                  {job.deadline}
                </Table.Cell>

                <Table.Cell>
                  <Chip
                    color={getStatusColor(
                      job.status
                    )}
                    size="sm"
                    variant="soft"
                    className="capitalize"
                  >
                    {job.status}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Job">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Tooltip>

                    <Tooltip content="Edit Job">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </Tooltip>

                    <Tooltip content="Delete Job">
                      <Button
                        isIconOnly
                        size="sm"
                        color="danger"
                        variant="light"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ResizableContainer>
    </Table>
  );
}