import httpStatus from "http-status";
import { User } from "../models";
import { userService, tokenService } from "../services";
import { userMessages } from "../messages";
import { catchAsync } from "../utils/catchAsync";
import { response } from "../utils/response";
import { Request, Response } from "express";

const loginUser = catchAsync(async (req, res) => {
  const { body } = req;
  const user = await User.login(body.email, body.password);
  const token = await tokenService.generateUserToken(user);
  res.cookie("token", token);
  return response.successResponse(
    res,
    httpStatus.OK,
    { user, token },
    userMessages.success.USER_LOGIN_SUCCESS
  );
});

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { body } = req;
  const user = await userService.createUser(body);
  const token = await tokenService.generateUserToken(user);
  return response.successResponse(
    res,
    httpStatus.CREATED,
    { user, token },
    userMessages.success.USER_REGISTER_SUCCESS
  );
});

const getCurrentUserProfile = catchAsync(async (req, res) => {
  const { user } = req;
  return response.successResponse(
    res,
    httpStatus.OK,
    { user },
    userMessages.success.USER_PROFILE_FETCH_SUCCESS
  );
});

module.exports = {
  loginUser,
  registerUser,
  getCurrentUserProfile,
};
