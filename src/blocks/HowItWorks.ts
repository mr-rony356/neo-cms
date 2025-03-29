import type { Block } from 'payload'

export const HowItWorks: Block = {
  slug: 'how-it-work',
  interfaceName: 'How It Works',
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          required: false,
        },
        {
          name: 'cardImage',
          type: 'upload',
          label: 'Card Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
