import { navigation } from "@/data/data";

export type Project = {
    name: string,
    href: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    tools: string,
}

type NavItem = {
  name: string;
  href: string;
};

export type NavProps = {
  navigation: NavItem[];
};

export type AboutProps = {
  intro: string, iam: string, fr: string, ont: string, dev: string, enjoy: string, websites: string, focus: string, react: string, btDownload: string, btContact: string
}

export type SkillsProps = {
  title: string
}

export type SectionName = (typeof navigation)[number]["name"];