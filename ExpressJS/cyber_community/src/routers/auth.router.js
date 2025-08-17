import express from "express";
import { authController } from "../controllers/auth.controller";
import { protect } from "../common/middlewares/protect.middleware";
import passport from "passport";
import { checkPermission } from "../common/middlewares/check-permission.middleware";

const authRouter = express.Router();

// Tạo route CRUD
authRouter.post("/", authController.create);
authRouter.get("/", authController.findAll);

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/get-info", protect, checkPermission, authController.getInfo);
authRouter.post("/refresh-token",  authController.refreshToken);

// FE sẽ gọi từ cái thanh điền url của trình duyệt để kích hoạt gọi api GET tới: http://localhost:3069/api/auth/goole
// BE sẽ nhận tín hiệu api này và passport sẽ phản hổi res.ridirect() về lại FE để chuyển FE sang trang đăng nhập của google
// Người dùng sẽ tiến hành đăng nhập với bên google
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Sau khi người dùng đã xác thực thành công với bên google
// google sẽ redirect lại URL mà chúng ta đã cung cấp cho google trước đó
// quan trọng là nhận được code của google trả về
// http://localhost:3069/api/auth/google/callback?code=4%2F0AVMBsJi-m9V5CrMM3pTpiGeqQg-h3LIfm3eAapDLxpd9qqMEnqt9PBEMlZrljSwTvdMcug&scope=profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile
// chủ yếu passport.authenticate("google" cần code để làm việc với google nếu thành công thì chạy tiếp, không thành công thì phản hồi về FE failureRedirect: "/login"
// nếu xử lý code thành công thì chạy callback trong passport.use(new GoogleStrategy(
authRouter.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login", session: false }), authController.googleAuth20);

authRouter.get("/:id", authController.findOne);
authRouter.patch("/:id", authController.update);
authRouter.delete("/:id", authController.remove);

export default authRouter;
