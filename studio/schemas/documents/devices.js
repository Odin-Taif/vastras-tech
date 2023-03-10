export default {
  title: "Devices",
  name: "devices",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Weight in grams",
      name: "grams",
      type: "number",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "SKU",
      name: "sku",
      type: "string",
    },
    {
      title: "Taxable",
      name: "taxable",
      type: "boolean",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
