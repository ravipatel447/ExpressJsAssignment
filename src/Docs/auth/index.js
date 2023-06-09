const loginDoc = require("./login-docs");
const signUpDoc = require("./signup-docs");

module.exports = {
  "/auth/register": {
    ...signUpDoc,
  },
  "/auth/login": {
    ...loginDoc,
  },
};
