import { StatusCodes } from "http-status-codes";
import HttpException from "../errors/http_exception";

export class NotFoundRequestError extends HttpException {
  status: number;
  message: string;

  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, message);
    this.status = StatusCodes.NOT_FOUND;
    this.message = message;
  }
}