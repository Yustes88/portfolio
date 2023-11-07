import { Project } from "@/types/types"
import Image from "next/image"

//TODO: fix types
type ProjectItemProps = {
    data: Project;
}


const ProjectItem:React.FC<ProjectItemProps> = (data) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    {/* Project details */}
    <div className="lg:max-w-lg">
      <div className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{data.data.name}</h1>
      </div>

      <section aria-labelledby="information-heading" className="mt-4">
        <h2 id="information-heading" className="sr-only">
          Product information
        </h2>


        <div className="mt-4 space-y-6">
          <p className="text-base text-gray-500">{data.data.description}</p>
        </div>
      </section>
      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
      <section aria-labelledby="options-heading">
        <h2 id="options-heading">
          Used tools
        </h2>
            <ul>
                {data.data.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>

      </section>
    </div>
    </div>

    {/* Project image */}
    <a href="">
    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
        <Image src={data.data.imageSrc} alt={data.data.imageAlt} width={400} height={400} className=" w-full object-cover" />
      </div>
    </div>
    </a>

    {/* Project tools */}

  </div>
  )
}

export default ProjectItem