import { Budget as PBudget } from "@prisma/client";
import { Budget } from "src/types";
import { prisma } from "../lib/prisma";

const PBudgetToBudget = (budget: PBudget): Budget => {
    return {
        ...budget,
        comment: budget.comment ?? undefined
    };
};

export const readAllBudgets = async (): Promise<Budget[]> => {
    const budgets = await prisma.budget.findMany();

    return budgets.map((budget) => {
        return PBudgetToBudget(budget);
    });
};

export const readBudgetById = async (id: number): Promise<Budget | null> => {
    const budget = await prisma.budget.findUnique({
        where: {
            budgetId: id
        }
    });

    if (!budget) {
        return null;
    }

    return PBudgetToBudget(budget);
};

export const createBudget = async (entity: Budget): Promise<Budget> => {
    const budget = await prisma.budget.create({
        data: {
            comment: entity.comment,
            validFrom: entity.validFrom ?? new Date(),
            validTo: entity.validTo,
            groupId: entity.groupId
        }
    });

    return PBudgetToBudget(budget);
};

export const updateBudget = async (entity: Budget): Promise<Budget> => {
    const budget = await prisma.budget.update({
        where: {
            budgetId: entity.budgetId
        },
        data: {
            comment: entity.comment,
            validFrom: entity.validFrom,
            validTo: entity.validTo,
            groupId: entity.groupId
        }
    });

    return PBudgetToBudget(budget);
};

export const removeBudget = async (budgetId: number): Promise<Budget> => {
    const budget = await prisma.budget.delete({
        where: {
            budgetId: budgetId
        }
    });

    return PBudgetToBudget(budget);
};
