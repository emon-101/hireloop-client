"use client";

import {
  Code2,
  Palette,
  Briefcase,
  BarChart3,
  Database,
  Megaphone,
} from "lucide-react";

const categories = [
  {
    title: "Development",
    jobs: "1,250 Jobs",
    icon: Code2,
  },
  {
    title: "Design",
    jobs: "860 Jobs",
    icon: Palette,
  },
  {
    title: "Business",
    jobs: "620 Jobs",
    icon: Briefcase,
  },
  {
    title: "Marketing",
    jobs: "540 Jobs",
    icon: Megaphone,
  },
  {
    title: "Data Science",
    jobs: "430 Jobs",
    icon: Database,
  },
  {
    title: "Analytics",
    jobs: "390 Jobs",
    icon: BarChart3,
  },
];

export default function JobCategories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-medium text-primary">
            Explore Opportunities
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Popular Job Categories
          </h2>

          <p className="mt-4 text-foreground/70">
            Browse jobs by category and find your
            perfect career path.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-divider
                  bg-content1/70
                  p-6
                  backdrop-blur-xl
                  transition-all
                  hover:-translate-y-2
                  hover:border-primary
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-foreground/70">
                  {category.jobs}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}