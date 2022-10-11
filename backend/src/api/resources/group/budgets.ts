import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { GetBudgetOptions } from "src/types";
import { findBudgetsByGroupId, findGroupById } from "../../../data";
import { errorResponse, successResponse } from "../../../util";

export const getGroupBudgets = async (req: Request, res: Response) => {
    try {
        const groupId = req.params.groupId;
        const from = req.query.from as string;
        const to = req.query.to as string;
        let options: GetBudgetOptions;

        if (from) {
            options = { ...options, from: new Date(from) };
        }
        if (to) {
            options = { ...options, to: new Date(to) };
        }

        const data = {
            ...(await findGroupById(groupId)),
            budgets: await findBudgetsByGroupId(groupId, options)
        };

        return successResponse(req, res, data, `The group with id '${groupId}' and its budgets.`);
    } catch (error) {
        return errorResponse(req, res, error, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};
