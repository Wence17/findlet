import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Product',
      type: 'string',
    }),
    // defineField({
    //   name: 'images',
    //   title: 'Product Images',
    //   type: 'array',
    //   of: [{type: 'image'}],
    // }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{
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
      }],
    }),
    defineField({
      name: 'description',
      title: 'Description of Product',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price of Product',
      type: 'number',
    }),



    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative Text',
    //     }
    //   ]
    // }),
  //   defineField({
  //     name: 'author',
  //     title: 'Author',
  //     type: 'reference',
  //     to: {type: 'author'},
    // }),
    defineField({
      name: 'categories',
      title: 'Product Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  //   defineField({
  //     name: 'body',
  //     title: 'Body',
  //     type: 'blockContent',
  //   }),
  ],

  preview: {
    select: {
      title: 'name',
      description: 'description',
      media: 'images[0]',
    },
    prepare(selection) {
      const {description} = selection
      return {...selection, subtitle: description && `by ${description}`}
    },
  },
})
