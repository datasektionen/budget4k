import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class GroupRepository {
    public findAll = async () => {
        return await prisma.group.findMany();
    };

    public findById = async (id: string) => {
        return await prisma.group.findUnique({ where: { groupId: id } });
    };

    public create = async (data: Prisma.GroupCreateInput) => {
        return await prisma.group.create({ data: data });
    };

    public update = async (
        data: Prisma.GroupUpdateInput,
        where: Prisma.GroupWhereUniqueInput
    ) => {
        return await prisma.group.update({
            where: where,
            data: data
        });
    };

    public delete = async (where: Prisma.GroupDeleteArgs["where"]) => {
        return await prisma.group.delete({ where: where });
    };
}
