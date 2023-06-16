const page = {
    name: "page",
    title: "pages",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            otpions: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block"}],
        }

    ]
}

export default page