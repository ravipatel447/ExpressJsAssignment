import { BAD_REQUEST } from "http-status";
import * as multer from "multer";
import { User } from "../models";
import { ApiError } from "../utils/ApiError";
import { userMessages } from "../messages";

/**
 * create User from body
 * @param {Object} body
 * @returns {Promise<User>}
 */
export const createUser = async (body) => {
  const user = new User(body);
  return user.save();
};

/**
 * @param {String} url urlString
 * @param {Object} user user Object
 * @returns {Promise<User>}
 */
export const uploadProfileImage = async (url, user) => {
  user.profileUrl = url;
  return user.save();
};

/**
 * @param {Object} user user Object
 * @returns {Promise<User>}
 */
export const removeProfileImage = async (user) => {
  user.profileUrl = "https://i.stack.imgur.com/l60Hf.png";
  return user.save();
};

/**
 * get users list
 * @param {Object} filters
 * @returns {Array<Promise<User>>}
 */
export const getUsers = async (filters = {}) => {
  return User.find(filters);
};

/**
 * get user by filter object
 * @param {Object} filters
 * @returns {Promise<User>}
 */
export const getUserByFilter = async (filters = {}) => {
  return User.findOne(filters);
};

/**
 * Get user by their id
 * @param {String} id user Id
 * @param {Object} filters
 * @returns {Promise<User>}
 */
export const getUserById = async (id, filters) => {
  return getUserByFilter({ _id: id, ...filters });
};

/**
 * Update user by their id and what ever body provided
 * @param {String} id User id
 * @param {Object} body
 * @param {Object} filters
 * @returns {Promise<User>}
 */
export const updateUserById = async (id, body, filters = {}) => {
  const user = await User.findOneAndUpdate({ _id: id, ...filters }, body, {
    runValidators: true,
    new: true,
  });
  if (!user) {
    throw new ApiError(userMessages.error.USER_NOT_FOUND, BAD_REQUEST);
  }
  return user;
};

/**
 * @param {Object} user user Object
 * @param {Object} body updates
 * @returns {Promise<User>}
 */
export const updateUserProfile = async (user, body) => {
  const updates = Object.keys(body);
  updates.forEach((update) => {
    user[update] = body[update];
  });
  return user.save();
};

/**
 * Delete user by Their Id
 * @param {String} id user Id
 * @param {Object} filters
 * @returns {Promise<User>}
 */
export const deleteUserById = async (id, filters = {}) => {
  const user = await User.findOneAndRemove({ _id: id, ...filters });
  if (!user) {
    throw new ApiError(userMessages.error.USER_NOT_FOUND, BAD_REQUEST);
  }
  return user;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Assets/Avatar");
  },
  filename: function (req, file, cb) {
    const userId = req.user._id;
    const mimetype = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + userId + "." + mimetype);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Please Upload png,jpg or jpeg image"), false);
  }
};

export const uploadProfileMulter = multer({ storage, fileFilter });
