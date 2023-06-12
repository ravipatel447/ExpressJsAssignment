import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import { docs } from "../Docs";

export function swaggerDocs(app: Express): void {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));
}
