import { Request, Response } from "express";
import { errorResponse } from "../../util/response";

export const getBudgetLine = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Get budget line.", 501);
};

export const postBudgetLine = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Create budget line.", 501);
};
export const putBudgetLine = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Edit budget line.", 501);
};

export const deleteBudgetLine = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Delete budget line.", 501);
};
