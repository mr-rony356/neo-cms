import { blocks } from '@/blocks/registerBlocks'
import createSlugField from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    createSlugField('slug', 'title', 'pages'),
    {
      name: 'content',
      type: 'blocks',
      minRows: 1,
      maxRows: 999,
      blocks: blocks,
    },

    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'SEO Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'SEO Description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'isHomePage',
      label: 'Home Page',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Pages
