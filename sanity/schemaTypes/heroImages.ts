import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImage',
  title: 'Two Hero Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image1',
      title: 'First Image',
      type: 'image',
      options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
    }),
    defineField({
      name: 'image2',
      title: 'Second Image',
      type: 'image',
      options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
    }),
      ],

  preview: {
    select: {
      title: 'image2.alt',
      media: 'image1',
    },
    prepare(selection) {
      const description = selection.title
      return {...selection, subtitle: description && `by ${description}`}
    },
  },
})
