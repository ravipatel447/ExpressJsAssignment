import { UNAUTHORIZED } from "http-status";
import { tokenMessages } from "../messages";
import { tokenService } from "../services";
import { ApiError } from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";

const throwUnauthorizedError = (req) => {
  throw new ApiError(
    tokenMessages.error.UNAUTHORIZED,
    UNAUTHORIZED,
    req.path.includes("/api/v1") ? false : true,
    "/auth/login"
  );
};

export const auth = catchAsync(async (req, res, next) => {
  if (!req.user) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return throwUnauthorizedError(req);
    }
    const user = await tokenService.verifyToken(token);
    if (user._id) {
      req.user = user;
      req.token = token;
      next();
    } else {
      return throwUnauthorizedError(req);
    }
  } else {
    next();
  }
});
