import { loginDoc } from "./login-docs";
import { signUpDoc } from "./signup-docs";
export const auth = {
  "/auth/register": {
    ...signUpDoc,
  },
  "/auth/login": {
    ...loginDoc,
  },
};
