import mongoose from "mongoose";
const reviewSchema = mongoose.Schema({
  name: {
    type: String,
  },
  feedback: {
    type: String,
  },
  rate: {
    type: Number,
    min: [1, "Must be between 1 and 10"],
    max: [10, "Must be between 1 and 10"],
  },
});

const albumSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  reviews: {
    type: [reviewSchema],
  },
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Photo",
    },
  ],
});

export default mongoose.model("Album", albumSchema);
