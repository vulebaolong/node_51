import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

try {
    await prisma.$executeRaw`SELECT 1+1 AS result`;
    console.log("PRISMA: \t Conntection successfully");
} catch (error) {
    console.error("PRISMA: \t Conntection error", error);
}

export default prisma;
