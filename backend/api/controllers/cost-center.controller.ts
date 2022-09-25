import { Request, Response } from "express";
import { errorResponse } from "../../util/response";

export const getCostCenter = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Get cost center.", 501);
};

export const postCostCenter = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Create cost center.", 501);
};
export const putCostCenter = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Edit cost center.", 501);
};

export const deleteCostCenter = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Delete cost center.", 501);
};
