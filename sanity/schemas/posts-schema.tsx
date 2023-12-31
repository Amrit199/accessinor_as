const post = {
    name: "post",
    title: "posts",
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
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "tags",
            title: "tags",
            type: "array",
            of: [{ type: "string"}],
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
          {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
          },
    ]
}

export default post