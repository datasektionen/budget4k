import {
    Budget as PrismaBudget,
    BudgetLine as PrismaBudgetLine,
    CostCenter as PrismaCostCenter,
    Group as PrismaGroup
} from "@prisma/client";
import { Budget, BudgetLine, CostCenter, Group } from "src/types";

export const toGroup = (group: PrismaGroup): Group => {
    return {
        ...group,
        comment: group.comment ?? undefined
    };
};

export const toBudget = (budget: PrismaBudget): Budget => {
    return {
        ...budget,
        comment: budget.comment ?? undefined
    };
};

export const toCostCenter = (costCenter: PrismaCostCenter): CostCenter => {
    return {
        ...costCenter,
        comment: costCenter.comment ?? undefined
    };
};

/**
 * Converts prismas generated BudgetLine to the BudgetLine defined in `types/`.
 *
 * @param budgetLine the budget line to convert.
 * @returns a BudgetLine
 */
export const toBudgetLine = (budgetLine: PrismaBudgetLine): BudgetLine => {
    return {
        ...budgetLine,
        income: budgetLine.income.toNumber(),
        expense: budgetLine.expense.toNumber(),
        comment: budgetLine.comment ?? undefined,
        validFrom: budgetLine.validFrom ?? undefined,
        validTo: budgetLine.validTo ?? undefined,
        editDate: budgetLine.editDate ?? undefined,
        editedBy: budgetLine.editedBy ?? undefined
    };
};
