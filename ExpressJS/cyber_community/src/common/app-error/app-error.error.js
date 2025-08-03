import { responseError } from "../helpers/response.helper";

/**
 * - Hàm này là nơi xử lý lỗi
 * - Tất cả lỗi đều đổ vào hàm này
 */
export const appError = (err, req, res, next) => {
    console.log(`middleware đặc biệt:`, err);

    const resData = responseError(err?.message, err?.code, err?.stack);
    res.status(resData.statusCode).json(resData);
};
