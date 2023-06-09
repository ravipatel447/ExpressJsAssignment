const basicInfo = require("./basicInfo");
const components = require("./components");
const servers = require("./servers");
const tags = require("./tags");
const security = require("./security");
const auth = require("./auth");
const avatar = require("./avatar");
const user = require("./user");
module.exports = {
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
