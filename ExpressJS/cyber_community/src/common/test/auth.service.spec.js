import { describe, it, jest } from "@jest/globals";
import { authService } from "../../services/auth.service";
import prisma from "../prisma/init.prisma";

describe("Register", () => {
    beforeEach(() => {
        // console.log("Hàm beforeEach chạy");
        jest.spyOn(prisma.users, "findUnique");
        jest.spyOn(prisma.users, "create");
    });

    afterEach(() => {
        // console.log("Hàm afterEach chạy");
        jest.restoreAllMocks();
    });

    it("Case 1: Đăng ký với thông tin hợp lệ", async () => {
        prisma.users.findUnique.mockResolvedValue(null);
        prisma.users.create.mockResolvedValue({
            id: 26,
            email: "lethitest@gmail.com",
            fullName: "lethitest",
            avatar: null,
            password: "$2b$10$98ovXOclyFzY3PqtiHVPLOPf3XfLLF9g.iCVbG5.W7rZAGd8IRTqe",
            facebookId: null,
            googleId: null,
            roleId: 2,
            deletedBy: 0,
            isDeleted: false,
            deletedAt: null,
            createdAt: "2025-08-20T12:35:29.000Z",
            updatedAt: "2025-08-20T12:35:29.000Z",
        });

        const req = {
            body: {
                email: "lethitest@gmail.com",
                password: "1234",
                fullName: "lethitest",
            },
        };
        const reuslt = await authService.register(req);
        console.log({ reuslt });

        expect(reuslt).not.toHaveProperty("password")
        expect(reuslt).toHaveProperty("id")
    });

    it("Case 2: Đăng ký với email không hợp lệ", () => {
        console.log("case 2 chạy");
        // throw new Error("Case 2 lỗi")
    });
});
