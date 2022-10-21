import { Prisma } from "@prisma/client";
import { GetBudgetOptions, INewBudget } from "src/types";
import { prisma } from "../../lib/prisma";

export const findAllBudgets = async () => {
    return await prisma.budget.findMany();
};

export const findBudgetById = async (budgetId: number) => {
    return await prisma.budget.findUnique({ where: { budgetId: budgetId } });
};

export const findBudgetsByGroupId = async (groupId: string, options?: GetBudgetOptions) => {
    let where: Prisma.BudgetWhereInput = {
        groupId: groupId
    };

    if (options?.from) {
        where = { ...where, validFrom: { gte: options.from } };
    }

    if (options?.to) {
        where = { ...where, validTo: { lt: options.to } };
    }

    return await prisma.budget.findMany({
        where: where,
        include: {
            costCenters: {
                include: { budgetLines: true }
            }
        }
    });
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
