import { Response } from "express";
export const response = {
  successResponse(res: Response, status: number, data: any, message: string) {
    return res.status(status).send({
      status,
      message,
      data,
      error: false,
    });
  },
  errorResponse(res: Response, status: number, data: any, message: string) {
    return res.status(status).send({
      status,
      message,
      data,
      error: true,
    });
  },
};
