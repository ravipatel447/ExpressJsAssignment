import { Router } from "express";
import { validate } from "express-validation";
import { authValidation } from "../validations";
import { authController } from "../controllers";
const router: Router = Router();

router.post(
  "/login",
  validate(authValidation.loginValidation),
  authController.loginUser
);

router.post(
  "/register",
  validate(authValidation.registerValidation),
  authController.registerUser
);

export default router;
