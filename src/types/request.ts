import { Request } from "express";


export interface RequestWithUser extends Request {
  requestWithUser: Promise<User | null>;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}