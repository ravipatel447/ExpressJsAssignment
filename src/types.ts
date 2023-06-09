import { Document } from "mongoose";

export class IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  profileUrl: string;
  tokens: { token: string }[];
  login: () => {};
}
