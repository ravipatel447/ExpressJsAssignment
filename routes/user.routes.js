const express = require("express");
const { validate } = require("express-validation");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const { userService } = require("../services");
const auth = require("../middlewares/auth");
const router = express.Router();

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

module.exports = router;
