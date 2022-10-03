import { BudgetLine } from "../../types/db-types";
import { toBudgetLine } from "../../types/type-util";
import { prisma } from "../../lib/prisma";

export const readAllBudgetLines = async (): Promise<BudgetLine[]> => {
    const budgetLines = await prisma.budgetLine.findMany();

    return budgetLines.map((budgetLine) => {
        return toBudgetLine(budgetLine);
    });
};

export const readBudgetLineById = async (
    id: number
): Promise<BudgetLine | null> => {
    const budgetLine = await prisma.budgetLine.findUnique({
        where: {
            budgetLineId: id
        }
    });

    if (!budgetLine) {
        return null;
    }

    return toBudgetLine(budgetLine);
};

export const createBudgetLine = async (
    entity: BudgetLine
): Promise<BudgetLine> => {
    const budgetLine = await prisma.budgetLine.create({
        data: {
            name: entity.name,
            income: entity.income,
            expense: entity.expense,
            costCenterId: entity.costCenterId,
            darken: entity.darken ?? false,
            comment: entity.comment ?? undefined,
            validFrom: entity.validFrom ?? undefined,
            validTo: entity.validTo ?? undefined,
            editDate: entity.editDate ?? undefined,
            editedBy: entity.editedBy ?? undefined
        }
    });

    return toBudgetLine(budgetLine);
};

export const updateBudgetLine = async (
    entity: BudgetLine
): Promise<BudgetLine> => {
    const budgetLine = await prisma.budgetLine.update({
        where: {
            budgetLineId: entity.budgetLineId
        },
        data: {
            name: entity.name,
            income: entity.income,
            expense: entity.expense,
            costCenterId: entity.costCenterId,
            darken: entity.darken ?? false,
            comment: entity.comment ?? undefined,
            validFrom: entity.validFrom ?? undefined,
            validTo: entity.validTo ?? undefined,
            editDate: entity.editDate ?? undefined,
            editedBy: entity.editedBy ?? undefined
        }
    });

    return toBudgetLine(budgetLine);
};

export const removeBudgetLine = async (
    budgetLineId: number
): Promise<BudgetLine> => {
    const budgetLine = await prisma.budgetLine.delete({
        where: {
            budgetLineId: budgetLineId
        }
    });

    return toBudgetLine(budgetLine);
};
