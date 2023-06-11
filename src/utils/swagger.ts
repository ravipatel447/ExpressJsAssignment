import * as swaggerUi from "swagger-ui-express";
import { docs } from "../Docs";

export function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));
}
