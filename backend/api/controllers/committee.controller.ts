import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../util/response";
import { prisma } from "../../lib/prisma";
import { StatusCodes } from "http-status-codes";

export const getCommittees = async (req: Request, res: Response) => {
    const data = await prisma.committee.findMany();

    return successResponse(
        req,
        res,
        data,
        "All of the commitees.",
        StatusCodes.OK
    );
};

export const getCommittee = async (req: Request, res: Response) => {
    const committeeId = +req.params.committeeId;

    const data = await prisma.committee.findUnique({
        where: {
            committeeId: committeeId
        },
        include: {
            costCenters: {
                include: {
                    budgetLines: true
                }
            }
        }
    });

    if (!data) {
        return errorResponse(
            req,
            res,
            `No committee with id '${committeeId}' exists.`,
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

export const postCommittee = async (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Create committee.", 501);
};

export const putCommittee = async (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Edit committee.", 501);
};

export const deleteCommittee = async (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Delete committee.", 501);
};
