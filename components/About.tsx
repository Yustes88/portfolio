"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AboutProps } from "@/types/types";

export default function About({
  cv,
  intro,
  iam,
  fr,
  ont,
  dev,
  enjoy,
  websites,
  focus,
  react,
  btContact,
  btDownload,
}: AboutProps) {
  const { ref } = useSectionInView("About", 0.5);

  function setActiveSection(arg0: string) {
    console.log("Function not implemented.");
  }

  function setTimeOfLastClick(arg0: number) {
    console.log("Function not implemented.");
  }

  return (
    <>
      <section
        ref={ref}
        id="about"
        className="pt-36 md:pt-64 max-w-[50rem] flex flex-col items-center justify-center text-center mb-48 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/images/about.jpg"
                alt="Julia portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl text-white font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">{intro}</span> {iam}{" "}
          <span className="glowing-txt">
            {fr}
            <span className="faulty-letter">{ont}</span>
            {dev}
          </span>
          <p>
            {enjoy}
            <span className="italic">{websites}</span> {focus}{" "}
            <span className="underline">{react}</span>
          </p>
        </motion.h1>


        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contacts"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contacts");
              setTimeOfLastClick(Date.now());
            }}
          >
            {btContact}{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack bg-white/10"
            href={cv}
            download
          >
            {btDownload}{" "}
            {/* <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /> */}
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
            href="https://www.linkedin.com/in/iuliia-obruchkova"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
            href="https://github.com/Yustes88"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    </>
  );
}
