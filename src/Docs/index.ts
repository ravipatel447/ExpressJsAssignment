import { components } from "./components";
import { basicInfo } from "./basicInfo";
import { servers } from "./servers";
import { tags } from "./tags";
import { security } from "./security";
import { auth } from "./auth";
import { avatar } from "./avatar";
import { user } from "./user";

export const docs = {
  ...basicInfo,
  ...components,
  ...security,
  ...servers,
  ...tags,
  paths: {
    ...avatar,
    ...auth,
    ...user,
  },
};
