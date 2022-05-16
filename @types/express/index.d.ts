import * as express from "express";
import { IUserCreate } from "./src/interfaces/users";
import { IUser } from "./src/interfaces/users";

declare global {
  namespace Express {
    interface Request {
      userId: IUser;
      newUser: IUserCreate;
    }
  }
}
