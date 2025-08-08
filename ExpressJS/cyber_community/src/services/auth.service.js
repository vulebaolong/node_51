import { BadRequestException } from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";

export const authService = {
    create: async function (req) {
        return `This action create`;
    },

    findAll: async function (req) {
        return `This action returns all auth`;
    },

    findOne: async function (req) {
        return `This action returns a id: ${req.params.id} auth`;
    },

    update: async function (req) {
        return `This action updates a id: ${req.params.id} auth`;
    },

    remove: async function (req) {
        return `This action removes a id: ${req.params.id} auth`;
    },

    register: async function (req) {
        const { email, password, fullName } = req.body;

        const userExits = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (userExits) {
            throw new BadRequestException("Ông có tài khoản đăng ký chi nữa");
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        const userNew = await prisma.users.create({
            data: {
                email: email,
                password: passwordHash,
                fullName: fullName,
            },
        });

        console.log({ email, password, fullName, userExits, userNew });
        return true;
    },

    login: async function (req) {
        return `This action removes a id: ${req.params.id} auth`;
    },
};
