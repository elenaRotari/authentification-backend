export const postSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    reviews: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          feedback: { type: "string" },
          rate: { type: "number" },
        },
      },
    },
  },

  additionalProperties: false,
};

export const getSchema = {
  type: "object",

  additionalProperties: false,
};
