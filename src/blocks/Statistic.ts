import type { Block } from 'payload'

export const Statistic: Block = {
  slug: 'statistic',
  interfaceName: 'Statistic',
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'total',
          type: 'number',
          label: 'Total Count',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: false,
        },
        {
          name: 'cardIcon',
          type: 'upload',
          label: 'Card Image',
          relationTo: 'media',
          admin: {
            description: ' Please upload  SVG or PNG',
          },
          required: true,
        },
      ],
    },
  ],
}
