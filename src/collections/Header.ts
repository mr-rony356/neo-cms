import { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header',
  admin: {
    useAsTitle: 'title',
    group: 'Header',
    defaultColumns: ['title','updatedAt'],
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
    {
      name: 'headerLogo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'customerLogo',
      label: 'Customer Logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
