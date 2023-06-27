import { Router } from "express";
import { validate } from "express-validation";
import { userValidation } from "../validations";
import { userService } from "../services";
import { userController } from "../controllers";
import { auth } from "../middlewares/auth";
const router: Router = Router();

router.get("/me", auth, userController.getUserProfile);
router.post(
  "/avatar",
  auth,
  userService.uploadProfileMulter.single("Avatar"),
  userController.uploadUserAvatar
);
router.patch(
  "/me",
  auth,
  validate(userValidation.updateValidation),
  userController.updateUserProfile
);

router.delete("/me", auth, userController.deleteUserProfile);
router.delete("/me/avatar", auth, userController.removeAvatar);

export default router;
