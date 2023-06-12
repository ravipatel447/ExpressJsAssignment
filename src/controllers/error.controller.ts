import { ValidationError } from "express-validation";
import { response } from "../utils/response";
import { ApiError } from "../utils/ApiError";
import { NextFunction, Request, Response } from "express";
import { IRequest } from "../types";

export function errorController(
  err: ApiError,
  req: IRequest,
  res: Response,
  _next: NextFunction
) {
  let message = "";
  let status = 404;
  if (err instanceof ValidationError) {
    message = err.details.body[0].message;
    status = err.statusCode;
  }
  if (req.body) {
    const { formSubmit } = req.body;
    if (req.method === "POST" && formSubmit) {
      if (!(err instanceof ValidationError)) {
        message = err.message;
        status = err.statusCode;
      }
      return res.redirect(req.url);
    }
  }
  if (err instanceof ApiError) {
    message = err.message;
    status = err.statusCode;
  }
  if (!message) {
    message = err.message;
    status = 500;
  }
  if (req.path.includes("/api/v1")) {
    return response.errorResponse(res, status, {}, message);
  } else {
    return res.status(404).send({
      message,
      status,
      error: JSON.stringify(err),
    });
  }
}
