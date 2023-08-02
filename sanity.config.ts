import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '32o790cj',
    dataset: 'production',
    title: 'AccessiNor AS',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas}

})

export default config