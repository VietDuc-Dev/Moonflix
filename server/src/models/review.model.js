import mongoose, { Schema } from "mongoose";
// import modelOptions from "./model.options";

const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    mediaType: {
      type: String,
      enum: ["tv", "movie"],
      required: true,
    },

    mediaId: {
      type: String,
      required: true,
    },

    mediaTitle: {
      type: String,
      required: true,
    },

    mediaPoster: {
      type: String,
      required: true,
    },
  },
  {
    // ...modelOptions,
  }
);

// Optional: Add index to improve query performance
reviewSchema.index({ userId: 1, mediaId: 1 });

export const ReviewModel = mongoose.model("Review", reviewSchema);
