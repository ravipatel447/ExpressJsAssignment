import { OK, CREATED } from "http-status";
import { User } from "../models";
import { userService, tokenService } from "../services";
import { userMessages } from "../messages";
import { catchAsync } from "../utils/catchAsync";
import { response } from "../utils/response";
import { Request, Response } from "express";
import { IRequest } from "../types";

export const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { body } = req;
  const user = await User.login(body.email, body.password);
  const token = await tokenService.generateUserToken(user);
  res.cookie("token", token);
  return response.successResponse(
    res,
    OK,
    { user, token },
    userMessages.success.USER_LOGIN_SUCCESS
  );
});

export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { body } = req;
  const user = await userService.createUser(body);
  const token = await tokenService.generateUserToken(user);
  return response.successResponse(
    res,
    CREATED,
    { user, token },
    userMessages.success.USER_REGISTER_SUCCESS
  );
});

export const getCurrentUserProfile = catchAsync(
  async (req: IRequest, res: Response) => {
    const { user } = req;
    return response.successResponse(
      res,
      OK,
      { user },
      userMessages.success.USER_PROFILE_FETCH_SUCCESS
    );
  }
);
