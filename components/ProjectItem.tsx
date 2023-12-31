import Image from "next/image"

import {FaExternalLinkAlt} from 'react-icons/fa'

import { Project } from "@/types/types"
import { motion } from "framer-motion";



//TODO: fix types
type ProjectItemProps = {
    data: Project;
    scope: string;
    link: string;
}


const ProjectItem:React.FC<ProjectItemProps> = ({
  data, 
  scope,
  link
}) => {

  return (
    <motion.div  
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
      ease: 'easeIn'
    }} 
    className={`mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 items-center lg:gap-x-8 lg:px-8`}>
    {/* Project details */}
    <div className="lg:max-w-lg">
      <div className="mt-4">
        <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{data.name}</h3>
      </div>

      <section aria-labelledby="information-heading" className="mt-4">
        <h2 id="information-heading" className="sr-only">
          Product information
        </h2>


        <div className="mt-4 space-y-6">
          <p className="text-sm tracking-wide leading-6 text-slate-300">{data.description}</p>
        </div>
      </section>
      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
      <section aria-labelledby="options-heading">
        <h4 id="options-heading">
           {scope}
        </h4>
            <div className="text-sm tracking-wide leading-6 text-slate-300">
                {data.tools}
            </div>

      </section>
    </div>
    </div>

    {/* Project image */}
    <a href={data.href} className="container relative">
    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
        <Image src={data.imageSrc} alt={data.imageAlt} width={300} height={300} className=" w-full object-cover" />
      </div>
    </div>
    <div className="overlay overlay-fade">
      <div className="flex justify-center gap-x-2 h-full items-center text-white bg-black">
        <div className="bg-black">{link}</div>
        <FaExternalLinkAlt/>
      </div>
    </div>
    </a>

    {/* Project tools */}

  </motion.div>
  )
}

export default ProjectItem