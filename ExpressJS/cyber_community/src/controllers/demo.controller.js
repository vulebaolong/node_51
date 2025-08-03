import { responseSuccess } from "../common/helpers/response.helper";
import demoService from "../services/demo.service";

const demoControler = {
    checkServer: (req, res, next) => {
        try {
            const result = demoService.checkServer();
            const resData = responseSuccess(result, "Kiểm tra server");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            next(error);
        }
    },
    query: async (req, res, next) => {
        try {
            const result = await demoService.query(req);
            const resData = responseSuccess(result, "Xử lý dữ liệu ở Query");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            next(error);
        }
    },
    path: async (req, res, next) => {
        try {
            const result = await demoService.path(req);
            const resData = responseSuccess(result, "Xử lý dữ liệu ở Path");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const result = await demoService.delete(req);
            const resData = responseSuccess(result, "Xử lý dữ liệu ở Delete");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            next(error);
        }
    },
    body: async (req, res, next) => {
        try {
            const result = await demoService.body(req);
            const resData = responseSuccess(result, "Xử lý dữ liệu ở Body");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            next(error);
        }
    },
};

export default demoControler;
