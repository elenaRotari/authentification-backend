import mongoose from "mongoose";
const equipmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photograph: String,
  _id: false,
});
const settingSchema = mongoose.Schema({
  focalLength: {
    type: Number,
    required: true,
  },
  exposure: {
    type: Number,
    required: true,
  },
  aperture: {
    type: Number,
    required: true,
  },
  iso: {
    type: Number,
  },
  whiteBalance: {
    type: Number,
  },
  _id: false,
});

const photoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  url: {
    type: String,
    required: true,
  },
  equipment: [
    {
      type: equipmentSchema,
      required: true,
    },
  ],

  settings: {
    type: settingSchema,
  },
});

export default mongoose.model("Photo", photoSchema);
