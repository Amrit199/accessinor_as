import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Post } from "@/types/Post";

export async function getPosts(): Promise<Post[]> {
    return createClient(config).fetch(
        groq`*[_type == "post"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            title,
            tags,
            "image": image.asset->url,
            alt,
            content
        }`
    )
}

export async function getPost(slug: string): Promise<Post> {
    return createClient(config).fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            title,
            tags,
            "image": image.asset->url,
            alt,
            content
        }`,
        {slug}
    )
}