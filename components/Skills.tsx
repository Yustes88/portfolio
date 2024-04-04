"use client";

import { skillsData } from "@/data/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { SkillsProps } from "@/types/types";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills({ title }: SkillsProps) {
  const { ref } = useSectionInView("Skills", 0.5);

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
      className="mb-28 pt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <Heading>{title}</Heading>
      <ul className="flex flex-wrap flex-row justify-center gap-2 p-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white md:basis-1/4 borderBlack rounded-xl px-5 py-3 bg-white/10 text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
