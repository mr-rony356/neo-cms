import { blocks } from '@/blocks/registerBlocks'
import createSlugField from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    createSlugField('slug', 'title', 'services'),
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'heroImage',
      type: 'upload',
      label: 'Hero Image',
      relationTo: 'media',
    },
    {
      name: 'heroHeading',
      type: 'text',
      label: 'Hero Heading',
    },
    {
      name: 'heroSubHeading',
      type: 'text',
      label: 'Hero Sub Heading',
    },
    {
      name: 'serviceIcon',
      type: 'upload',
      label: 'Service Icon',
      relationTo: 'media',
    },

    {
      name: 'serviceImage',
      type: 'upload',
      label: 'Service Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },
    {
      name: 'advantages',
      type: 'array',
      label: 'Advantages',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
      ],
    },
    {
      name: 'features',
      type: 'group',
      label: 'Features',
      fields: [
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },

        {
          name: 'images',
          type: 'array',
          label: 'Feature Images',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              required: true,
            },
          ],
        },
        {
          name: 'featureList',
          type: 'array',
          label: 'Feature Lists',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
          ],
        },
      ],
    },
    {
      name: 'inspirationImages',
      type: 'array',
      label: 'Inspiration Images',
      admin: {
        description: 'Please upload  at leatsr 4 images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'testimonial',
          type: 'text',
        },
      ],
    },
    {
      name: 'content',
      type: 'blocks',
      minRows: 1,
      maxRows: 999,
      blocks: blocks,
    },
    
    {
      name: 'questions',
      type: 'json',
      label: 'Questions',
      admin: {
        description: 'Please enter the questions and answers in the JSON format',
      },
    },
  ],
}
