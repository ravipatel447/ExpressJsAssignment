export class ApiError extends Error {
  status: string;
  constructor(
    message: string,
    public statusCode: number,
    public redirects = false,
    public url = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.redirects = redirects;
    this.url = url;
    Error.captureStackTrace(this, this.constructor);
  }
}
