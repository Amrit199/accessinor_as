import { PortableTextBlock } from "sanity"

export type Post = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    title: string;
    tags: string[];
    image: string;
    alt: string;
    content: PortableTextBlock[];
}