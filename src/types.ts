import { Request } from "express";
import { Model } from "mongoose";

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  profileUrl: string;
  tokens: { token: string }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModel extends Model<IUser> {
  login(email: string, password: string): Promise<IUser>;
}

export interface IRequest extends Request {
  user: IUser;
}
