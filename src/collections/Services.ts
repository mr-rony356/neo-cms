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
      name: 'serviceImage',
      type: 'upload',
      label: 'Image',
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
      name: 'questions',
      type: 'json',
      label: 'Questions',
      admin: {
        description: 'Please enter the questions and answers in the JSON format',
      },
    },
  ],
}
