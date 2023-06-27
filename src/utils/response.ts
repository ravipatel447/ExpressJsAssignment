import { Response } from "express";
export const response = {
  successResponse(
    res: Response,
    status: number,
    data: Object,
    message: string
  ): Response<any, Record<string, any>> {
    return res.status(status).send({
      status,
      message,
      data,
      error: false,
    });
  },
  errorResponse(
    res: Response,
    status: number,
    data: Object,
    message: string
  ): Response<any, Record<string, any>> {
    return res.status(status).send({
      status,
      message,
      data,
      error: true,
    });
  },
};
