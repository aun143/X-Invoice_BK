const express = require("express");
const router = express.Router();
const {
  createUser,
  forgotPassword,
  getAllUser,
  deleteUser,
  updateUser,
  LoginUser,
  getProfile,
  updateSubscription,
} = require("../controllers/usersController");
const { protectRoutes } = require("../middleware/authMiddleware");

router.post("/create", createUser);
router.post("/subscription", updateSubscription);

router.use(protectRoutes);
router.get("/me", getProfile);
router.post("/loginUser", LoginUser);
router.get("/getUser", getAllUser);
router.post("/forgotpassword", forgotPassword);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
module.exports = {
  usersRouter: router,
};
