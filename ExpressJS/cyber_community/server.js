import cors from "cors";
import express from "express";
import { createServer } from "http";
import { appError } from "./src/common/app-error/app-error.error";
import { initGoogleAuth20 } from "./src/common/passport/google-auth20.passport";
import { initSocket } from "./src/common/socket/init.socket";
import rootRouter from "./src/routers/root.router";

const app = express();

// Giúp body nhận được dữ liệu
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000", "google.com"],
    })
);

initGoogleAuth20();

app.use("/api", rootRouter);

app.use(appError);

const httpServer = createServer(app);
initSocket(httpServer);
const port = 3069;
httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/** tự động lưu vào kết quả vào biến môi trường trong postman
 * để mỗi lần lấy token mới không cần thao tác thủ công copy nữa
const data = pm.response.json()

pm.globals.set("accessToken",  data.data.accessToken )
pm.globals.set("refreshToken",  data.data.refreshToken )
 */
