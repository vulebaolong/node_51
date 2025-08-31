/**
 * extensionless: để giúp import không cần thêm đuôi js
 * nodemon: để load lại server khi có code thay đổi
 *
 * Tương tác DB
 * mysql2: để tương tác với db (không phải là ORM) là thư viện đã có từ rất lâu
 * sequelize: ORM tương tác với db
 * sequelize-auto: DATABASE FIRST để kéo table đã tồn tại bên trong database vào code (tự tạo model, ...)
 * prisma: ORM để tương tác với db, khuyên dùng vì đơn giản và hiểu quả
 *       - npx prisma init: khởi tạo 1 lần
 *       - npx prisma db pull : kéo db vào code (sẽ chạy khi cần cập nhật)
 *       - npx prisma generate: tạo ra object để chấm lấy table (sẽ chạy khi cần cập nhật)
 *
 * dotenv: nạp biến từ file .env vào process.env
 *
 * cors: cho phép FE nào? sử dụng (API) lấy dữ liệu
 *
 * bcrypt: mã hoá password (bắt buộc)
 *
 * jsonwebtoken: tạo token
 *
 * passport: thư viện cha sẽ luôn cần cài nếu như muốn sử dụng chiến lược
 * passport-google-oauth20: chiến lược (logic) cho flow đăng nhập bằng goole
 *
 * nodemailer: hỗ trợ gửi email
 *
 * jest: thư viện giúp viết unit test
 * @types/jest: giúp có thêm type gợi ý khi sử dụng thư viện jest
 * 
 * swagger-ui-express: giúp tạo ra swagger
 * 
 * socket.io hỗ trợ real-time, xây dựng chức năng chat
 * 
 * graphql-http, graphql: xây dựng hệ thống API bằng graphql
 * ruru: giúp gọi GraphQL bằng giao diện riêng
 * 
 * multer: thư viện giúp upload hình ảnh
 * 
 * cloudinary: thư viện bên thứ ba giúp upload hình ảnh lên đám mây
 */
