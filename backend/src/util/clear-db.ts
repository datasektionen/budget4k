import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clearDB = async () => {
    await prisma.budgetLine.deleteMany({});
    await prisma.costCenter.deleteMany();
    await prisma.budget.deleteMany({});
    await prisma.group.deleteMany({});
};

clearDB();
