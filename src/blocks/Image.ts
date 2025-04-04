import { Block } from "payload";

export const Image: Block = {
  slug: 'image',
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'rounded',
      type: 'checkbox',
      label: 'Rounded',
    },
  ],
}