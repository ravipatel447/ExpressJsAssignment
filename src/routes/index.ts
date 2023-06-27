import express, { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
const router: Router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
