import prisma from "../common/prisma/init.prisma";

export const articleService = {
    create: async function (req) {
        return `This action create`;
    },

    findAll: async function (req) {
        let { page, pageSize, filters } = req.query;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 1;
        filters = JSON.parse(filters) || {};

        // index (OFFSET) = ( page - 1 ) * pageSize
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

        const articlesPromise = prisma.articles.findMany({
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
        const totalItemPromise = prisma.articles.count();

        const [articles, totalItem] = await Promise.all([articlesPromise, totalItemPromise]);

        const totalPage = Math.ceil(totalItem / pageSize);

        return {
            totalItem: totalItem,
            totalPage: totalPage,
            items: articles,
        };
    },

    findOne: async function (req) {
        return `This action returns a id: ${req.params.id} article`;
    },

    update: async function (req) {
        return `This action updates a id: ${req.params.id} article`;
    },

    remove: async function (req) {
        return `This action removes a id: ${req.params.id} article`;
    },
};
