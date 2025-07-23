import express from "express"

const app = express()

// Giúp body nhận được dữ liệu
app.use(express.json())

// path, url, endpoint, route
// callback function
app.get("/login", (req, res, next) => {
   res.json("Hello world")
})

/**
 * Query Parameters
 * - Nhận biết: Sau dấu ? và mỗi tham số cách bằng dấu &
 * - Thường dùng cho: phân trang, lọc dữ liệu, tìm kiếm, ...
 * - Tránh: thiết kế nhận qua body vì FE (axios) chặn gửi body với GET
 */
app.get("/query", (req, res, next) => {
   const query = req.query
   res.json({
      message: "Xử lý dữ liệu ở Query",
      data: query
   })
})

/**
 * Path Parameters
 * Nhận biết: Được xác định bằng dấu hai chấm (:) trong url
 * Thường dùng: (lấy / xoá / cập nhật) một phần tử cụ thể thông qua id
 * id: sẽ luôn luôn là CHUỖI (nếu là số sẽ là chuỗi số)
 */
app.put("/path/:id", (req, res, next) => {
   const param = req.params

   console.log({ param });

   res.json({
      message: "Xử lý dữ liệu ở path parameter",
      data: param
   })
})

/**
 * Headers
 * autho: phần quyền
 * authen: login/ register
 * Thường dùng: xác thực token (Authorization), meta data, x-api-key
 */
app.delete("/delete", (req, res, next) => {
   const headers = req.headers

   const { token } = headers
   console.log({ token });

   res.json({
      message: "Xử lý dữ liệu ở Headers",
      data: headers
   })
})

/**
 * Body
 * 
 */
app.post("/body", (req, res, next) => {

   const body = req.body

   res.json({
      message: "Xử lý dữ liệu ở body",
      data: body
   })
})


const port = 3069
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
})