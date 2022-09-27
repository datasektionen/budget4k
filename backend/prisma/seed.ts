import { budgets } from "./data";
import { Budget, BudgetLine, Group, CostCenter } from "types/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedGroups = (groups: Group[]) => {
    groups.map(async (group) => {
        await prisma.group.create({
            data: {
                groupId: group.groupId,
                name: group.name,
                comment: group.comment
            }
        });

        if (group.budgets) {
            seedBudget(group.budgets, group.groupId);
        }
    });
};

const seedBudget = (budgets: Budget[], groupId: string) => {
    budgets.map(async (budget) => {
        const { budgetId } = await prisma.budget.create({
            data: {
                comment: budget.comment,
                active: budget.active ?? false,
                year: budget.year,
                groupId: groupId
            }
        });

        if (budget.costCenters) {
            seedCostCenters(budget.costCenters, budgetId);
        }
    });
};

const seedCostCenters = (costCenters: CostCenter[], budgetId: number) => {
    costCenters.map(async (costCenter) => {
        const { costCenterId } = await prisma.costCenter.create({
            data: {
                name: costCenter.name,
                comment: costCenter.comment,
                darken: costCenter.darken ?? false,
                budgetId: budgetId
            }
        });

        if (costCenter.budgetLines) {
            await seedBudgetLines(costCenter.budgetLines, costCenterId);
        }
    });
};

const seedBudgetLines = async (
    budgetLines: BudgetLine[],
    costCenterId: number
) => {
    await Promise.all([
        budgetLines.map((budgetLine) => {
            prisma.budgetLine.create({
                data: {
                    name: budgetLine.name,
                    income: budgetLine.income ?? 0,
                    expense: budgetLine.expense ?? 0,
                    comment: budgetLine.comment,
                    validFrom: budgetLine.validFrom
                        ? new Date(budgetLine.validFrom)
                        : undefined,
                    validTo: budgetLine.validTo
                        ? new Date(budgetLine.validTo)
                        : undefined,
                    editDate: budgetLine.editDate
                        ? new Date(budgetLine.editDate)
                        : undefined,
                    editedBy: budgetLine.editedBy,
                    darken: budgetLine.darken ?? false,
                    costCenterId: costCenterId
                }
            });
        })
    ]);
};

seedGroups(budgets);
