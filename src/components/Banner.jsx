"use client";

import { Button, Chip } from "@heroui/react";
import { Search, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export default function Banner() {
  const tags = [
    "Frontend Developer",
    "UI/UX Designer",
    "Remote Jobs",
    "Marketing",
    "Product Manager",
  ];

  return (
    <section className="relative overflow-hidden mt-40">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[150px]"
        />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-divider bg-content1 px-4 py-2 text-sm text-foreground/80 backdrop-blur-md"
        >
          🚀 Trusted by 50,000+ professionals worldwide
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
        >
          Find Your Next
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            {" "}
            Career Opportunity
          </span>
          <br />
          Faster with HireLoop
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-foreground/70"
        >
          Discover jobs, connect with top companies, and manage applications
          seamlessly through one intelligent hiring platform.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mt-10 flex w-full max-w-3xl flex-col gap-3 md:flex-row items-center"
        >
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-divider bg-content1 px-4 py-4">
            <Briefcase size={20} className="text-default-500" />

            <input
              type="text"
              placeholder="Job title, keyword, or company"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <Button color="primary" size="lg" className="px-8">
            <Search size={18} />
            Search Jobs
          </Button>
        </motion.div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.1,
              }}
              whileHover={{
                scale: 1.08,
              }}
            >
              <Chip variant="flat" className="cursor-pointer">
                {tag}
              </Chip>
            </motion.div>
          ))}
        </div>
        {/* Stats */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 py-8">
          {[
            ["25K+", "Active Jobs"],
            ["10K+", "Companies"],
            ["50K+", "Candidates"],
            ["95%", "Success Rate"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1 + index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-divider bg-content1/60 p-6 backdrop-blur-lg"
            >
              <h3 className="text-3xl font-bold text-primary">{value}</h3>

              <p className="mt-2 text-sm text-foreground/70">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
