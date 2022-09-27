import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../util/response";
import { prisma } from "../../lib/prisma";
import { StatusCodes } from "http-status-codes";

export const getGroups = async (req: Request, res: Response) => {
    const data = await prisma.group.findMany();

    return successResponse(
        req,
        res,
        data,
        "All of the commitees.",
        StatusCodes.OK
    );
};

export const getGroup = async (req: Request, res: Response) => {
    const groupId = req.params.groupId;

    const data = await prisma.group.findUnique({
        where: {
            groupId: groupId
        },
        include: {
            budgets: {
                include: {
                    costCenters: true
                }
            }
        }
    });

    if (!data) {
        return errorResponse(
            req,
            res,
            `No group with id '${groupId}' exists.`,
            StatusCodes.NOT_FOUND
        );
    }

    return successResponse(
        req,
        res,
        data,
        "All of the commitees.",
        StatusCodes.OK
    );
};

export const postGroup = async (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Create group.", 501);
};

export const putGroup = async (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Edit group.", 501);
};

export const deleteGroup = async (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Delete group.", 501);
};
