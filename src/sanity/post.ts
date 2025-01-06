import { defineField } from 'sanity';

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Title of the post',
            options: {
                source: 'name',
                maxLength: 96
            }
        }),
        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            description: 'Short summary of the post'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
}
