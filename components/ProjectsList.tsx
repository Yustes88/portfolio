"use client";

import ProjectItem from "./ProjectItem";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import Heading from "./Heading";

import clsx from "clsx";
import { Project } from "@/types/types";

type ProjectListProps = {
  title: string;
  intro: string;
  scope: string;
  link: string;
  projects: Project[];
};

export default function ProjectsList({
  title,
  intro,
  scope,
  projects,
  link,
}: ProjectListProps) {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      className="text-white pt-20"
      id="projects"
      ref={ref}
    >
      <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl lg:px-8">
        <div className="border-b border-slate-500 pb-10">
          <Heading>{title}</Heading>
          <p className="mt-4 text-base text-gray-500">{intro}</p>
        </div>
        {projects.map((project) => (
          <div
            key={project.name}
            className={clsx(
              "bg-gradient-to-tl to-[#1D1C21] to-50%",
              project.name === "Spotify Clone"
                ? "from-[#065f46]"
                : project.name === "Blog"
                ? "from-[#fff]"
                : "from-[#ffd99d]"
            )}
          >
            <ProjectItem data={project} scope={scope} link={link} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
