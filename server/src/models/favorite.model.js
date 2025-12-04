import mongoose, { Schema } from "mongoose";

const favoriteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      default: "",
    },

    mediaType: {
      type: String,
      enum: ["tv", "movie"],
      required: true,
    },

    mediaId: {
      type: Number,
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

    mediaRate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FavoriteModel = mongoose.model("Favorite", favoriteSchema);
