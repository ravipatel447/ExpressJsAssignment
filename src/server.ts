import path from "path";
let envName = ".dev.env";
switch (process.env.NODE_ENV) {
  case "PRODUCTION":
    envName = ".prod.env";
    break;
  case "DEVELOPMENT":
    envName = ".dev.env";
    break;
  case "TEST":
    envName = ".test.env";
    break;
  default:
    envName = ".dev.env";
}
require("dotenv").config({ path: path.resolve(__dirname, "..", envName) });
import express, { Request, Response, Express } from "express";
import cors from "cors";
import database from "./db/Database";
import { config } from "./config";
import { errorController } from "./controllers";
import routes from "./routes";
import cookieParser from "cookie-parser";
import { ApiError } from "./utils/ApiError";
import { NOT_FOUND } from "http-status";
import { catchAsync } from "./utils/catchAsync";
import { tokenMessages } from "./messages";
import { swaggerDocs } from "./utils/swagger";

const app: Express = express();
const port: number = config.system.port;

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
  catchAsync(async (_req: Request, _res: Response) => {
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
  .catch((err: Error) => {
    console.log(`[SERVER][ERROR]: `, err);
  });
