"use client";
import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
  const posts = await getPosts();

  return (
    <div>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 py-40">
        {posts.map((post) => (
          <Link key={post._id} href={`/blogs/${post.slug}`}>
            <div className="h-full group flex max-w-xl flex-col items-start gap-4">
              <div className="h-3/5 w-full overflow-hidden">
                <Image
                  width={380}
                  height={350}
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover rounded-lg duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
              {post.tags.map((tag) => (
              <p className="w-fit rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {tag}
              </p>

              ))}
              </div>
              <h1 className="text-lg font-semibold leading-6 text-gray-900 px-2">
                {post.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
