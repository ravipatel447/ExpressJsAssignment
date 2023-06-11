require("dotenv").config({ path: __dirname + "/../.env" });
import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import database from "./db/Database";
import { config } from "./config";
import { errorController } from "./controllers";
import routes from "./routes";
import * as cookieParser from "cookie-parser";
import { ApiError } from "./utils/ApiError";
import { NOT_FOUND } from "http-status";
import { catchAsync } from "./utils/catchAsync";
import { tokenMessages } from "./messages";
import { swaggerDocs } from "./utils/swagger";
const app = express();
const port = config.system.port;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1", routes);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  "/avatar",
  express.static(path.join(__dirname, "..", "Assets", "Avatar"))
);

swaggerDocs(app);

// error handler
app.all(
  "*",
  catchAsync(async (req, res) => {
    throw new ApiError(tokenMessages.error.PAGE_NOT_FOUND, NOT_FOUND);
  })
);
app.use(errorController);

database
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
