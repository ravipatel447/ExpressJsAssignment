const getAvatar = require("./getAvatar-docs");
const uploadAvatar = require("./uploadAvatar-docs");
const deleteAvatar = require("./deleteAvatar-docs");
module.exports = {
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
