import { Block } from "payload";

export const manyImages: Block = {
  slug: 'manyImages',
  interfaceName: 'ManyImagesBlock',
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
  ],
}