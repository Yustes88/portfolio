'use client' 

import { skillsData } from "@/data/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

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

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    return(
        <section className="mb-28 scroll-mt-28 text-center sm:mb-40" id="skills" ref={ref}>
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">
                My skills
            </h2>
            <ul className="grid grid-cols-5 gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                    className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
            </ul>
        </section>
    )
}