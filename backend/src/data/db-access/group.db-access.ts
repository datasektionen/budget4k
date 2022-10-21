import { Prisma } from "@prisma/client";
import { INewGroup } from "src/types";
import { prisma } from "../../lib/prisma";

export const findAllGroups = async () => {
    return await prisma.group.findMany();
};
export const findGroupById = async (id: string) => {
    return await prisma.group.findUnique({ where: { groupId: id } });
};

export const createGroup = async (data: INewGroup) => {
    return await prisma.group.create({ data: data });
};

export const updateGroup = async (
    data: Prisma.GroupUpdateInput,
    where: Prisma.GroupWhereUniqueInput
) => {
    return await prisma.group.update({
        where: where,
        data: data
    });
};

export const removeGroup = async (where: Prisma.GroupDeleteArgs["where"]) => {
    return await prisma.group.delete({ where: where });
};
