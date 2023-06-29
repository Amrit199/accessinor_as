import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Post } from "@/types/Post";

export async function getProjets(): Promise<Project[]> {
    return createClient(config).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`  
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(config).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            title,
            content
        }`
    )
}

export async function getPosts(): Promise<Post[]> {
    const conugi = {
        projectId: "32o790cj",
        dataset: "production",
    }
    return createClient(conugi).fetch(
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