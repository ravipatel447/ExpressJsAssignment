const getProfileDoc = require("./getProfile-docs");
const updateProfileDoc = require("./updateProfile-docs");
const deleteProfileDoc = require("./deleteProfile-docs");

module.exports = {
  "/user/me": {
    ...getProfileDoc,
    ...updateProfileDoc,
    ...deleteProfileDoc,
  },
};
