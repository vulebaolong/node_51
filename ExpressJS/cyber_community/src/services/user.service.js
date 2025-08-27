import { BadRequestException } from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";
import fs from "fs";
import path from "path";

export const userService = {
    avatarLocal: async function (req) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        console.log(req.file);
        if (!req.file) {
            throw new BadRequestException("Not found file");
        }

        const user = req.user;

        await prisma.users.update({
            where: {
                id: user.id,
            },
            data: {
                avatar: req.file.filename,
            },
        });

        if (user.avatar) {
            // win: \\
            // mac: //
            const oldFilePath = path.join("public/images", user.avatar);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }
        }

        return true;
    },

    avatarCloud: async function (req) {
        console.log(req.file);
        return `avatarCloud`;
    },

    create: async function (req) {
        return `This action create`;
    },

    findAll: async function (req) {
        let { page, pageSize, filters } = req.query;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 10;
        filters = JSON.parse(filters || "{}") || {};

        // index (OFFSET) = ( page - 1 ) * pageSize
        // console.log({ page, pageSize });
        const index = (page - 1) * pageSize;

        // console.log(`filter lúc đầu`, filters);

        // lọc lại filters
        Object.entries(filters).forEach(([key, value]) => {
            console.log({ key, value });
            if (value === null || value === undefined || value === "") {
                delete filters[key];
                return;
            }

            if (typeof value === "string") {
                filters[key] = {
                    contains: value,
                };
            }

            // TODO: xử lý ngày tháng
        });

        // console.log({ page, pageSize, index, filters });

        const usersPromise = prisma.users.findMany({
            // SQL: OFFSET
            skip: index,

            // SQL: LIMIT
            take: pageSize,

            where: {
                ...filters,
                // xoá mèm
                isDeleted: false,
            },
        });

        // đếm số lượng row hàng trong table
        const totalItemPromise = prisma.users.count();

        const [users, totalItem] = await Promise.all([usersPromise, totalItemPromise]);

        const totalPage = Math.ceil(totalItem / pageSize);

        return {
            page,
            pageSize,
            totalItem: totalItem,
            totalPage: totalPage,
            items: users || [],
        };
    },

    findOne: async function (req) {
        const users = await prisma.users.findUnique({
            where: {
                id: +req.params.id,
            },
            include: {
                Roles: true,
            },
        });
        return users;
    },

    update: async function (req) {
        return `This action updates a id: ${req.params.id} user`;
    },

    remove: async function (req) {
        return `This action removes a id: ${req.params.id} user`;
    },
};
