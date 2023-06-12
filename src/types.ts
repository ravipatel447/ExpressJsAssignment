import { Request } from "express";
import { Model, ObjectId, Document } from "mongoose";

export interface IUser extends Document {
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
  token: string;
  file?: Express.Multer.File;
}

// export interface multerFile {
//   buffer: Buffer;
//   path: string;
//   encoding: string;
//   fieldname: string;
//   mimetype: string;
//   originalname: string;
//   size: number;
// }
