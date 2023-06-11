"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const cors = require("cors");
const path = require("path");
const Database_1 = require("./db/Database");
const config_1 = require("./config");
const controllers_1 = require("./controllers");
const routes_1 = require("./routes");
const cookieParser = require("cookie-parser");
const ApiError_1 = require("./utils/ApiError");
const http_status_1 = require("http-status");
const catchAsync_1 = require("./utils/catchAsync");
const messages_1 = require("./messages");
const swagger_1 = require("./utils/swagger");
const app = express();
const port = config_1.config.system.port;
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/v1", routes_1.default);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/avatar", express.static(path.join(__dirname, "..", "Assets", "Avatar")));
(0, swagger_1.swaggerDocs)(app);
// error handler
app.all("*", (0, catchAsync_1.catchAsync)(async (req, res) => {
    throw new ApiError_1.ApiError(messages_1.tokenMessages.error.PAGE_NOT_FOUND, http_status_1.NOT_FOUND);
}));
app.use(controllers_1.errorController);
Database_1.default
    ._connect()
    .then(() => {
    console.log("DataBase Connected Successfully");
    app.listen(port, () => {
        console.log(`[SERVER][START]: http://localhost:${port}/`);
    });
})
    .catch((err) => {
    console.log(`[SERVER][ERROR]: `, err);
});
//# sourceMappingURL=server.js.map