import express from "express";
import demoControler from "../controllers/demo.controller";

const demoRouter = express.Router();

// path, url, endpoint, route
// callback function
demoRouter.get(
    "/check-server",
    (req, res, next) => {
        console.log(`mid 1`);
        req.payload = `dữ liệu của mid`;
        next();
    },
    (req, res, next) => {
        console.log(`mid 2`);
        console.log(req.payload);
        next();
    },
    (req, res, next) => {
        console.log(`mid 3`);
        next();
    },
    
    demoControler.checkServer
);

/**
 * Query Parameters
 * - Nhận biết: Sau dấu ? và mỗi tham số cách bằng dấu &
 * - Thường dùng cho: phân trang, lọc dữ liệu, tìm kiếm, ...
 * - Tránh: thiết kế nhận qua body vì FE (axios) chặn gửi body với GET
 */
demoRouter.get("/query", demoControler.query);

/**
 * Path Parameters
 * Nhận biết: Được xác định bằng dấu hai chấm (:) trong url
 * Thường dùng: (lấy / xoá / cập nhật) một phần tử cụ thể thông qua id
 * id: sẽ luôn luôn là CHUỖI (nếu là số sẽ là chuỗi số)
 */
demoRouter.put("/path/:id", demoControler.path);

/**
 * Headers
 * autho: phần quyền
 * authen: login/ register
 * Thường dùng: xác thực token (Authorization), meta data, x-api-key
 */
demoRouter.delete("/delete", demoControler.delete);

/**
 * Body
 *
 */
demoRouter.post("/body", demoControler.body);

export default demoRouter;
