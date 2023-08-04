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
    title: string;
    styles?: string;
}