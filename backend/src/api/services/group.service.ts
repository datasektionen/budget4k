import { Group } from "src/types";
import { prisma } from "../../lib/prisma";
import { toGroup } from "../../util";

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

export const createGroup = async (group: Group): Promise<Group> => {
    const createdGroup = await prisma.group.create({
        data: group
    });

    return toGroup(createdGroup);
};

export const updateGroup = async (group: Group): Promise<Group> => {
    const updatedGroup = await prisma.group.update({
        where: {
            groupId: group.groupId
        },
        data: group
    });

    return toGroup(updatedGroup);
};

export const removeGroup = async (groupId: string): Promise<Group> => {
    const group = await prisma.group.delete({
        where: {
            groupId: groupId
        }
    });

    return toGroup(group);
};
