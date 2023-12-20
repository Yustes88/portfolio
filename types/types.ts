import { navigation } from "@/data/data";

export type Project = {
    name: string,
    href: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    tools: string[],
}

type NavItem = {
  name: string;
  href: string;
};

export type NavProps = {
  navigation: NavItem[];
};

export type SectionName = (typeof navigation)[number]["name"];