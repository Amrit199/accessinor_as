import { PortableTextBlock } from "sanity"

export type Page = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    title: string;
    content: PortableTextBlock[];
}

export interface ButtonProps {
    link: string;
    title: string;
    styles?: string;
    ariaLabel: string;
}

export interface ReadmoreProps {
    item: string;
}