import { getAvatar } from "./getAvatar-docs";
import { uploadAvatar } from "./uploadAvatar-docs";
import { deleteAvatar } from "./deleteAvatar-docs";

export const avatar = {
  "/avatar/{profileUrl}": {
    ...getAvatar,
  },
  "/user/me/avatar": {
    ...deleteAvatar,
  },
  "/user/avatar": {
    ...uploadAvatar,
  },
};
