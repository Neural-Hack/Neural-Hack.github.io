import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Doc = defineDocumentType(() => ({
    name: "Learn",
    filePathPattern: `learn/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: false },
        date: { type: "date", required: false },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            resolve: (doc) =>  doc._raw.flattenedPath,//doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
          },
    },
}));

export default makeSource({ contentDirPath: './content', documentTypes: [Doc] })