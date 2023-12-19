import { navigation } from "@/data/data";

export type Project = {
    name: string,
    href: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    tools: string[],
}

export type NavigationItem = {
    name: string;
    href: string;
  };

export type SectionName = (typeof navigation)[number]["name"];