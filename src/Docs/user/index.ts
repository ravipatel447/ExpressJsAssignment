import { getProfileDoc } from "./getProfile-docs";
import { updateProfileDoc } from "./updateProfile-docs";
import { deleteProfileDoc } from "./deleteProfile-docs";

export const user = {
  "/user/me": {
    ...getProfileDoc,
    ...updateProfileDoc,
    ...deleteProfileDoc,
  },
};
