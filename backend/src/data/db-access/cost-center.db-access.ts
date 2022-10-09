import { Prisma } from "@prisma/client";
import { INewCostCenter } from "src/types";
import { prisma } from "../../lib/prisma";

export const findAllCostCenters = async () => {
    return await prisma.costCenter.findMany();
};

export const findCostCenterById = async (id: number) => {
    return await prisma.costCenter.findUnique({ where: { costCenterId: id } });
};
export const createCostCenter = async (data: INewCostCenter) => {
    return await prisma.costCenter.create({ data: data });
};

export const updateCostCenter = async (
    data: Prisma.CostCenterUpdateInput,
    where: Prisma.CostCenterWhereUniqueInput
) => {
    return await prisma.costCenter.update({
        where: where,
        data: data
    });
};

export const removeCostCenter = async (
    where: Prisma.CostCenterDeleteArgs["where"]
) => {
    return await prisma.costCenter.delete({ where: where });
};
