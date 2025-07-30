import pool from "../common/mysql2/init.myslq2";
import prisma from "../common/prisma/init.prisma";
import sequelize from "../common/sequelize/init.sequelize";
import models from "../models/app.model";
import Role from "../models/my-models/role.model";

const demoService = {
    checkServer: () => {
        return "Hello world";
    },
    query: async (req) => {
        const query = req.query;

        // MYSQL2
        const [dataMysql2, fields] = await pool.query("SELECT * FROM `Roles`");
        console.log({ dataMysql2, fields });

        // SEQUELIZE
        // sequelize.query
        // Role
        // tuần tự hoá
        const dataSequelize = await models.Roles.findAll();

        // PRISMA
        const dataPrisma = await prisma.roles.findMany();

        return {
            message: "Xử lý dữ liệu ở Query",
            mysql2: dataMysql2,
            sequelize: dataSequelize,
            prisma: dataPrisma,
        };
    },
    path: (req) => {
        const param = req.params;

        console.log({ param });

        return {
            message: "Xử lý dữ liệu ở path parameter",
            data: param,
        };
    },
    delete: (req) => {
        const headers = req.headers;

        const { token } = headers;
        console.log({ token });
        return {
            message: "Xử lý dữ liệu ở Headers",
            data: headers,
        };
    },
    body: (req) => {
        const body = req.body;

        return {
            message: "Xử lý dữ liệu ở body",
            data: body,
        };
    },
};

export default demoService;
