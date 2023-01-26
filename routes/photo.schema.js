export const postSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    url: { type: "string", format: "url" },
    equipment: {
      type: "array",

      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          photograph: { type: "string" },
        },
      },
    },
    settings: {
      type: "object",
      additionalProperties: false,
      properties: {
        focalLength: { type: "number" },
        exposure: { type: "number" },
        aperture: { type: "number" },
        iso: { type: "number" },
        whiteBalance: { type: "number" },
      },
    },
  },

  required: ["title", "url"],
  additionalProperties: false,
};

export const getSchema = {
  type: "object",

  additionalProperties: false,
};
