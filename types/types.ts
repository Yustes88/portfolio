import { navigation } from "@/data/data";

export type Project = {
    name: string,
    href: string,
    price: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    tools: string[],
}

export type SectionName = (typeof navigation)[number]["name"];