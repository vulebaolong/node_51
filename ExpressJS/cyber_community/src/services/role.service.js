import { BadRequestException } from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";

export const roleService = {
    create: async function (req) {
        return `This action create`;
    },

    findAll: async function (req) {
        let { page, pageSize, filters } = req.query;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 10;
        filters = JSON.parse(filters || "{}") || {};

        // index (OFFSET) = ( page - 1 ) * pageSize
        console.log({ page, pageSize });
        const index = (page - 1) * pageSize;

        console.log(`filter lúc đầu`, filters);

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

        console.log({ page, pageSize, index, filters });

        const rolesPromise = prisma.roles.findMany({
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
        const totalItemPromise = prisma.roles.count();

        const [roles, totalItem] = await Promise.all([rolesPromise, totalItemPromise]);

        const totalPage = Math.ceil(totalItem / pageSize);

        return {
            page,
            pageSize,
            totalItem: totalItem,
            totalPage: totalPage,
            items: roles || [],
        };
    },

    findOne: async function (req) {
        const role = await prisma.roles.findUnique({
            where: {
                id: +req.params.id,
            },
        });
        return role;
    },

    async toggleIsActive(req) {
        const user = req.user;
        const roleId = +req.params.roleId;
        console.log({ user, roleId });

        const roleExist = await prisma.roles.findUnique({
            where: {
                id: roleId,
            },
        });
        if (!roleExist) {
            throw new BadRequestException("Role not found");
        }

        await prisma.roles.update({
            where: {
                id: roleExist.id
            },
            data: {
                isActive: !roleExist.isActive,
            },
        });

        return true;
    },

    update: async function (req) {
        return `This action updates a id: ${req.params.id} article`;
    },

    remove: async function (req) {
        return `This action removes a id: ${req.params.id} article`;
    },
};
