import express from "express";
import { authController } from "../controllers/auth.controller";
import { protect } from "../common/middlewares/protect.middleware";

const authRouter = express.Router();

// Tạo route CRUD
authRouter.post("/", authController.create);
authRouter.get("/", authController.findAll);

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/get-info", protect, authController.getInfo);
authRouter.post("/refresh-token", authController.refreshToken);

authRouter.get("/:id", authController.findOne);
authRouter.patch("/:id", authController.update);
authRouter.delete("/:id", authController.remove);

export default authRouter;
