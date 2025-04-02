import { Block } from "payload";

export const Htmlblock: Block = {
  slug: 'htmlblock',
  interfaceName: 'HTMLBlock',
  fields: [
    {
      name: 'html',
      type: 'textarea',
      label: 'HTML',
    },
  ],
}
