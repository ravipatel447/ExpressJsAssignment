import { OK, CREATED } from "http-status";
import { userService } from "../services";
import { userMessages } from "../messages";
import { catchAsync } from "../utils/catchAsync";
import { response } from "../utils/response";
import { IRequest } from "../types";
import { Response } from "express";

export const getUserProfile = catchAsync(
  async (req: IRequest, res: Response) => {
    return response.successResponse(
      res,
      OK,
      { user: req.user },
      userMessages.success.USER_PROFILE_FETCH_SUCCESS
    );
  }
);

export const updateUserProfile = catchAsync(
  async (req: IRequest, res: Response) => {
    const user = await userService.updateUserProfile(req.user, req.body);
    return response.successResponse(
      res,
      OK,
      { user },
      userMessages.success.USER_UPDATION_SUCCESS
    );
  }
);

export const uploadUserAvatar = catchAsync(
  async (req: IRequest, res: Response) => {
    const user = await userService.uploadProfileImage(req.file.path, req.user);
    return response.successResponse(
      res,
      CREATED,
      { user },
      userMessages.success.USER_PROFILE_UPLOAD_SUCCESS
    );
  }
);

export const removeAvatar = catchAsync(async (req: IRequest, res: Response) => {
  const user = await userService.removeProfileImage(req.user);
  return response.successResponse(
    res,
    CREATED,
    { user },
    userMessages.success.USER_PROFILE_REMOVE_SUCCESS
  );
});

export const deleteUserProfile = catchAsync(
  async (req: IRequest, res: Response) => {
    await userService.deleteUserById(req.user._id);
    return response.successResponse(
      res,
      OK,
      {},
      userMessages.success.USER_PROFILE_DELETE_SUCCESS
    );
  }
);
