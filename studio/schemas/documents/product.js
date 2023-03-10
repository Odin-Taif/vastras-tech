import { MdLocalDrink } from "react-icons/md";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: MdLocalDrink,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "services",
      name: "services",
      type: "array",
      of: [
        {
          title: "service",
          type: "service",
        },
      ],
    },
    // {
    //   name: "blurb",
    //   title: "Blurb",
    //   type: "localeString",
    // },
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "localeBlockContent",
    // },
    // {
    //   title: "Tags",
    //   name: "tags",
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    //   options: {
    //     layout: "tags",
    //   },
    // },
    // {
    //   title: "Default variant",
    //   name: "defaultProductVariant",
    //   type: "productVariant",
    // },

    {
      name: "brand",
      title: "Brand",
      type: "reference",
      to: { type: "brand" },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
