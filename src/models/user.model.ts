import { BAD_REQUEST } from "http-status";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError";
import { tokenMessages } from "../messages";
import { IUser, UserModel } from "../types";
import { NextFunction } from "express";

const userSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileUrl: {
      type: String,
      require: false,
      default: "https://i.stack.imgur.com/l60Hf.png",
    },
    tokens: {
      type: [{ token: String }],
    },
  },
  { timestamps: true }
);

// static login method
userSchema.statics.login = async function (
  email: string,
  password: string
): Promise<IUser> {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(tokenMessages.error.INVALID_CREDS, BAD_REQUEST);
  }
  if (user && !(await bcrypt.compare(password, user.password))) {
    throw new ApiError(tokenMessages.error.INVALID_CREDS, BAD_REQUEST);
  }
  return user;
};

/**
 * deleting few fields before sending it to user!
 * @returns {Partial<IUser>}
 */
userSchema.methods.toJSON = function (): Partial<IUser> {
  const user = this.toObject();
  delete user.password;
  delete user.tokens;
  return user;
};

/**
 * Hashing the password before storing the actual user into the database!
 */
userSchema.pre("save", async function (next: NextFunction): Promise<void> {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

export const User = model<IUser, UserModel>("User", userSchema);
