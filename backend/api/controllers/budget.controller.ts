import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../util/response";
import { prisma } from "../../lib/prisma";
import { StatusCodes } from "http-status-codes";

export const getBudgets = async (req: Request, res: Response) => {
    const data = await prisma.budget.findMany({});

    return successResponse(
        req,
        res,
        data,
        "All of the budgets.",
        StatusCodes.OK
    );
};

export const getBudget = async (req: Request, res: Response) => {
    const budgetId = +req.params.budgetId;

    const data = await prisma.budget.findUnique({
        where: {
            budgetId: budgetId
        }
    });

    if (!data) {
        return errorResponse(
            req,
            res,
            `No budget with id '${budgetId}' exists.`,
            StatusCodes.NOT_FOUND
        );
    }

    return successResponse(
        req,
        res,
        data,
        `The budget with id '${budgetId}'.`,
        StatusCodes.OK
    );
};
