import { Group } from "src/types";
import { toGroup } from "../..//util";
import { prisma } from "../../lib/prisma";

export const readAllGroups = async (): Promise<Group[]> => {
    const groups = await prisma.group.findMany();

    return groups.map((group) => {
        return toGroup(group);
    });
};

export const readGroupById = async (id: string): Promise<Group | null> => {
    const group = await prisma.group.findUnique({
        where: {
            groupId: id
        }
    });

    if (!group) {
        return null;
    }

    return toGroup(group);
};

export const createGroup = async (entity: Group): Promise<Group> => {
    const group = await prisma.group.create({
        data: {
            groupId: entity.groupId,
            name: entity.name,
            comment: entity.comment
        }
    });

    return toGroup(group);
};

export const updateGroup = async (entity: Group): Promise<Group> => {
    const group = await prisma.group.update({
        where: {
            groupId: entity.groupId
        },
        data: {
            groupId: entity.groupId,
            name: entity.name,
            comment: entity.comment
        }
    });

    return toGroup(group);
};

export const removeGroup = async (groupId: string): Promise<Group> => {
    const group = await prisma.group.delete({
        where: {
            groupId: groupId
        }
    });

    return toGroup(group);
};
