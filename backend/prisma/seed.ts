import data from "./seed.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
    data.budget.forEach(async (budget) => {
        const bg = {
            active: budget.active,
            year: budget.year
        };

        const { budgetId } = await prisma.budget.upsert({
            where: { budgetId: budget.budgetId },
            update: bg,
            create: {
                ...bg,
                budgetId: budget.budgetId ?? undefined
            }
        });

        // Seeds the commitees
        budget.committees.forEach(async (committee) => {
            const com = {
                name: committee.name,
                comment: committee.comment ?? undefined,
                budgetId: committee.budgetId
            };

            const { committeeId } = await prisma.committee.upsert({
                where: { committeeId: committee.committeeId },
                update: com,
                create: {
                    ...com,
                    committeeId: committee.committeeId ?? undefined,
                    budgetId: budgetId
                }
            });

            // Seeds the cost centers
            committee.costCenters.forEach(async (costCenter) => {
                const cc = {
                    name: costCenter.name,
                    comment: costCenter.comment ?? undefined,
                    darken: costCenter.darken,
                    committeeId: committeeId
                };

                const { costCenterId } = await prisma.costCenter.upsert({
                    where: { costCenterId: costCenter.costCenterId },
                    update: cc,
                    create: {
                        ...cc,
                        costCenterId: costCenter.costCenterId ?? undefined
                    }
                });

                // Seeds the budget lines
                costCenter.budgetLines.forEach(async (budgetLine) => {
                    const bl = {
                        name: budgetLine.name,
                        income: budgetLine.income,
                        expense: budgetLine.expense,
                        comment: budgetLine.comment ?? undefined,
                        validFrom: new Date(budgetLine.valid_from),
                        validTo: new Date(budgetLine.valid_to),
                        editDate: new Date(budgetLine.edit_date!) ?? undefined,
                        editedBy: budgetLine.edited_by! || undefined,
                        darken: budgetLine.darken,
                        costCenterId: costCenterId
                    };

                    await prisma.budgetLine.upsert({
                        where: { budgetLineId: budgetLine.budgetLineId },
                        update: bl,
                        create: {
                            ...bl,
                            budgetLineId: budgetLine.budgetLineId ?? undefined
                        }
                    });
                });
            });
        });
    });
};

seed();
