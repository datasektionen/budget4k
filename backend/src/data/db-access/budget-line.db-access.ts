import { Prisma } from "@prisma/client";
import { INewBudgetLine } from "src/types";
import { prisma } from "../../lib/prisma";

export const findAllBudgetLines = async () => {
    return await prisma.budgetLine.findMany();
};

export const findBudgetLineById = async (id: number) => {
    return await prisma.budgetLine.findUnique({ where: { budgetLineId: id } });
};
export const createBudgetLine = async (data: INewBudgetLine) => {
    return await prisma.budgetLine.create({ data: data });
};

export const updateBudgetLine = async (
    data: Prisma.BudgetLineUpdateInput,
    where: Prisma.BudgetLineWhereUniqueInput
) => {
    return await prisma.budgetLine.update({
        where: where,
        data: data
    });
};

export const removeBudgetLine = async (
    where: Prisma.BudgetLineDeleteArgs["where"]
) => {
    return await prisma.budgetLine.delete({ where: where });
};
