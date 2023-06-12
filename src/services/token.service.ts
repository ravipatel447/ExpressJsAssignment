import { BAD_REQUEST } from "http-status";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { config } from "../config";
import { ApiError } from "../utils/ApiError";
import { tokenMessages } from "../messages";
import { IUser } from "../types";

/**
 * Generate jwt signed token for user
 * @param {Object<IUser>} user
 * @returns {Promise<string>}
 */
export const generateUserToken = async (user: IUser): Promise<string> => {
  const token = await jwt.sign({ user: user._id }, config.jwt.secret, {
    expiresIn: config.jwt.expires,
  });
  user.tokens.push({ token });
  await user.save();
  return token;
};

/**
 * Verify user and return user if valid jwt token
 * @param {String} token jwt token string
 * @returns {Promise<IUser>}
 */
export const verifyToken = async (token: string): Promise<IUser> => {
  let { user } = jwt.verify(token, config.jwt.secret);
  user = await User.findOne({
    _id: user,
    "tokens.token": token,
  });
  if (!user) {
    throw new ApiError(tokenMessages.error.INVALID_TOKEN, BAD_REQUEST);
  }
  return user;
};
