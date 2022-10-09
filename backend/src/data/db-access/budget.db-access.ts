import { Prisma } from "@prisma/client";
import { INewBudget } from "src/types";
import { prisma } from "../../lib/prisma";

export const findAllBudgets = async () => {
    return await prisma.budget.findMany();
};

export const findBudgetById = async (id: number) => {
    return await prisma.budget.findUnique({ where: { budgetId: id } });
};
export const createBudget = async (data: INewBudget) => {
    return await prisma.budget.create({ data: data });
};

export const updateBudget = async (
    data: Prisma.BudgetUpdateInput,
    where: Prisma.BudgetWhereUniqueInput
) => {
    return await prisma.budget.update({
        where: where,
        data: data
    });
};

export const removeBudget = async (where: Prisma.BudgetDeleteArgs["where"]) => {
    return await prisma.budget.delete({ where: where });
};
