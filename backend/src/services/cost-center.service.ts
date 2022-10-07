import { CostCenter } from "src/types";
import { toCostCenter } from "../util";
import { prisma } from "../lib/prisma";

export const readAllCostCenters = async (): Promise<CostCenter[]> => {
    const costCenters = await prisma.costCenter.findMany();

    return costCenters.map((costCenter) => {
        return toCostCenter(costCenter);
    });
};

export const readCostCenterById = async (
    id: number
): Promise<CostCenter | null> => {
    const costCenter = await prisma.costCenter.findUnique({
        where: {
            costCenterId: id
        }
    });

    if (!costCenter) {
        return null;
    }

    return toCostCenter(costCenter);
};

export const createCostCenter = async (
    entity: CostCenter
): Promise<CostCenter> => {
    const costCenter = await prisma.costCenter.create({
        data: {
            name: entity.name,
            darken: entity.darken ?? false,
            comment: entity.comment,
            budgetId: entity.budgetId
        }
    });

    return toCostCenter(costCenter);
};

export const updateCostCenter = async (
    entity: CostCenter
): Promise<CostCenter> => {
    const costCenter = await prisma.costCenter.update({
        where: {
            costCenterId: entity.costCenterId
        },
        data: {
            name: entity.name,
            darken: entity.darken ?? false,
            comment: entity.comment,
            budgetId: entity.budgetId
        }
    });

    return toCostCenter(costCenter);
};

export const removeCostCenter = async (
    costCenterId: number
): Promise<CostCenter> => {
    const costCenter = await prisma.costCenter.delete({
        where: {
            costCenterId: costCenterId
        }
    });

    return toCostCenter(costCenter);
};
