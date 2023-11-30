import { skillsData } from "@/data/data";


export default function Skills() {
    return(
        <section className="mb-28 scroll-mt-28 text-center sm:mb-40">
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">
                My skills
            </h2>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <li key={index} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">{skill}</li>
                ))}
            </ul>
        </section>
    )
}