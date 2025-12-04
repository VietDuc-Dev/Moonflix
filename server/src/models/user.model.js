import mongoose, { Schema } from "mongoose";
// import modelOptions from "./model.options";

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+@.+\..+/, "Invalid email format"],
    },

    password: {
      type: String,
      required: true,
    },

    salt: {
      type: String,
      required: true,
    },
  },
  {
    // ...modelOptions,
  }
);

// Index for faster login queries
userSchema.index({ email: 1 }, { unique: true });

export const UserModel = mongoose.model("User", userSchema);
