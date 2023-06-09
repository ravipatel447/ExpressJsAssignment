import httpStatus from "http-status";
import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError";
import { tokenMessages } from "../messages";
import { IUser } from "src/types";
const Schema = mongoose.Schema;

const userSchema = new Schema(
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
userSchema.statics.login = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(
      tokenMessages.error.INVALID_CREDS,
      httpStatus.BAD_REQUEST
    );
  }
  if (user && !(await bcrypt.compare(password, user.password))) {
    throw new ApiError(
      tokenMessages.error.INVALID_CREDS,
      httpStatus.BAD_REQUEST
    );
  }
  return user;
};

/**
 * deleting few fields before sending it to user!
 * @returns {Partial<typeof userSchema>}
 */
userSchema.methods.toJSON = function (): Partial<typeof userSchema> {
  const user = this.toObject();
  delete user.password;
  delete user.createdAt;
  delete user.updatedAt;
  delete user.tokens;
  return user;
};

/**
 * Hashing the password before storing the actual user into the database!
 */
userSchema.pre("save", async function (next): Promise<void> {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
/**
 * Delete relational Data with User
 */
userSchema.pre("remove", async function (next): Promise<void> {
  const user = this;
  // await Task.deleteMany({ owner: user._id })
  next();
});

export const User = mongoose.model<IUser>("User", userSchema);
