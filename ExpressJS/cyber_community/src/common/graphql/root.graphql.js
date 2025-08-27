import { tokenService } from "../../services/token.service";
import { BadRequestException, UnauthorizedException } from "../helpers/exception.helper";
import prisma from "../prisma/init.prisma";
import bcrypt from "bcrypt";

// The root provides a resolver function for each API endpoint
export const root = {
    hello() {
        return "Hello world!";
    },
    async getListArticle(args, context) {
        console.log({ args, context });
        if (!context.user) throw new UnauthorizedException("Invalid account");

        let { page, pageSize, filters } = args;
        page = +page > 0 ? +page : 1;
        pageSize = +pageSize > 0 ? +pageSize : 1;
        // filters = JSON.parse(filters) || {};
        filters = JSON.parse(filters || "{}") || {};

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
            page,
            pageSize,
            totalItem: totalItem,
            totalPage: totalPage,
            items: articles || [],
        };
    },
    async login(args, context) {
        const { email, password } = args;

        const userExits = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });
        if (!userExits) throw new BadRequestException("Người dùng chưa tồn tại, vui lòng đăng ký");
        // Nếu code chạy được tới đây => đảm bảo có userExits

        // do tài khoản đăng nhập bằng gmail hoặc facebook
        // lúc này tài khoản sẽ không có mật khẩu
        // nên nếu người dùng cố tình đăng nhập bằng email thì sẽ không có mật khẩu để kiểm tra
        // nên phải bắt người dùng đăng nhập bằng email vào setting để cập nhật lại mật khẩu mới
        if (!userExits.password) {
            throw new BadRequestException("Vui lòng đăng nhập bằng mạng xã hội (gmail, facebook), để cập nhật lại mật khẩu mới trong setting");
        }

        const isPassword = bcrypt.compareSync(password, userExits.password); // true
        if (!isPassword) throw new BadRequestException("Mật khẩu không chính xác");
        // Nếu code chạy được tới đây => người dùng này hợp lệ

        const tokens = tokenService.createTokens(userExits.id);

        console.log({ email, password });

        // sendMail(email)
        // sendMail("vulebaolong@gmail.com");

        return tokens;
    },
};
