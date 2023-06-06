const swaggerUi = require("swagger-ui-express");
const docs = require("../Docs");

function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));
}

module.exports = swaggerDocs;
