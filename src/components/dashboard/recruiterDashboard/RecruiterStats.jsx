"use client";

import {
  BriefcaseBusiness,
  Users,
  CircleCheckBig,
  CircleX,
} from "lucide-react";

export default function RecruiterStats() {
  const stats = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: BriefcaseBusiness,
      color: "text-violet-500",
    },
    {
      title: "Total Applicants",
      value: "1,245",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: CircleCheckBig,
      color: "text-green-500",
    },
    {
      title: "Closed Jobs",
      value: "30",
      icon: CircleX,
      color: "text-red-500",
    },
  ];

  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 py-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-3xl border border-divider bg-content1/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60">
                    {stat.title}
                  </p>

                  <h3 className="mt-3 text-4xl font-bold">
                    {stat.value}
                  </h3>
                </div>

                <div className="rounded-2xl bg-background p-4">
                  <Icon
                    size={28}
                    className={stat.color}
                  />
                </div>
              </div>

              <div className="mt-6 h-1 rounded-full bg-divider">
                <div
                  className="h-full w-3/4 rounded-full bg-linear-to-r from-violet-500 to-indigo-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}