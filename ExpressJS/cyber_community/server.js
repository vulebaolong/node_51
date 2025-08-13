import express from "express";
import rootRouter from "./src/routers/root.router";
import { responseError } from "./src/common/helpers/response.helper";
import { appError } from "./src/common/app-error/app-error.error";
import cors from "cors";
import { initGoogleAuth20 } from "./src/common/passport/google-auth20.passport";

const app = express();

// Giúp body nhận được dữ liệu
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000", "google.com"],
    })
);

initGoogleAuth20()

app.use("/api", rootRouter);

app.use(appError);

const port = 3069;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/** tự động lưu vào kết quả vào biến môi trường trong postman
 * để mỗi lần lấy token mới không cần thao tác thủ công copy nữa
const data = pm.response.json()

pm.globals.set("accessToken",  data.data.accessToken )
pm.globals.set("refreshToken",  data.data.refreshToken )
 */
