import { Server } from "socket.io";
import { tokenService } from "../../services/token.service";
import { createKetForChatOne } from "../helpers/function.helper";
import prisma from "../prisma/init.prisma";

export const initSocket = (httpServer) => {
    const io = new Server(httpServer, {
        /* options */
    });

    io.on("connection", (socket) => {
        console.log({ "socket.id": socket.id });
        // console.log(socket);

        socket.on("CREATE_ROOM", async (data, cb) => {
            const { targetUserIds, accessToken, name } = data;

            const { userId } = tokenService.verifyAccesToken(accessToken);

            const uniqueUserIds = Array.from(new Set([...targetUserIds, userId]));

            const countUser = uniqueUserIds.length;

            // số lượng user là 2 xử lý với chat 1 - 1
            if (countUser === 2) {
                const [userId1, userId2] = uniqueUserIds;
                const keyForChatOne = createKetForChatOne(userId1, userId2);
                let chatGroupExist = await prisma.chatGroups.findUnique({
                    where: {
                        keyForChatOne: keyForChatOne,
                    },
                });
                if (!chatGroupExist) {
                    chatGroupExist = await prisma.$transaction(async (tx) => {
                        const chatGroupExistTransaction = await tx.chatGroups.create({
                            data: {
                                keyForChatOne: keyForChatOne,
                                ownerId: userId,
                                // ChatGroupMembers: {
                                //     create: [{ userId: userId1 }, { userId: userId2 }],
                                // },
                            },
                        });
                        await tx.chatGroupMembers.createMany({
                            data: [
                                { chatGroupId: chatGroupExistTransaction.id, userId: userId1 },
                                { chatGroupId: chatGroupExistTransaction.id, userId: userId2 },
                            ],
                        });
                        return chatGroupExistTransaction;
                    });
                }
                // đảm bảo chatGroupExist luôn có dữ liệu
                socket.join(`chat:${chatGroupExist.id}`);
                cb({
                    status: "succes",
                    data: { chatGroupId: chatGroupExist.id },
                });
                return;
            }

            // tạo luôn chat group
            // 1 người có thể tạo nhiều nhóm chát: có cùng thành viên, có cùng tên
            // không ràng buộc tạo nhiều nhóm chát, thả cho người dùng muốn tạo bao nhiêu cũng được
            const chatGroupExist = await prisma.$transaction(async (tx) => {
                const chatGroupExistTransaction = await tx.chatGroups.create({
                    data: {
                        name: name,
                        ownerId: userId,
                    },
                });
                await tx.chatGroupMembers.createMany({
                    data: uniqueUserIds.map((userId) => {
                        return {
                            chatGroupId: chatGroupExistTransaction.id,
                            userId: userId,
                        };
                    }),
                });
                return chatGroupExistTransaction;
            });

            console.log("CREATE_ROOM", {
                data,
                userId,
                uniqueUserIds,
            });

            socket.join(`chat:${chatGroupExist.id}`);
            cb({
                status: "succes",
                data: { chatGroupId: chatGroupExist.id },
            });
            return;
        });

        socket.on("JOIN_ROOM", async (data, cb) => {
            const { chatGroupId, accessToken } = data;

            const { userId } = tokenService.verifyAccesToken(accessToken);

            socket.join(`chat:${chatGroupId}`);

            console.log("JOIN_ROOM", data);
            cb({
                status: "succes",
                data: { chatGroupId: chatGroupId },
            });
            return;
        });

        socket.on("SEND_MESSAGE", async (data) => {
            const { message, accessToken, chatGroupId } = data;
            const { userId } = tokenService.verifyAccesToken(accessToken);

            const createdAt = new Date().toISOString();

            io.to(`chat:${chatGroupId}`).emit(`SEND_MESSAGE`, {
                messageText: message,
                userIdSender: userId,
                chatGroupId: chatGroupId,
                createdAt: createdAt,
            });

            await prisma.chatMessages.create({
                data: {
                    messageText: message,
                    userIdSender: userId,
                    chatGroupId: chatGroupId,
                    createdAt: createdAt,
                },
            });

            console.log(`SEND_MESSAGE`, data);
        });

        socket.on("LEAVE_ROOM", async (data) => {
            console.log(`LEAVE_ROOM`, data);
            const { chatGroupId } = data;
            socket.leave(`chat:${chatGroupId}`);
        });
    });
};
