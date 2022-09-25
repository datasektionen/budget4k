import { Request, Response } from "express";
import { errorResponse } from "../../util/response";

export const getCommittees = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. List commitees.", 501);
};

export const getCommittee = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Get committee.", 501);
};

export const postCommittee = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Create committee.", 501);
};

export const putCommittee = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Edit committee.", 501);
};

export const deleteCommittee = (req: Request, res: Response) => {
    return errorResponse(req, res, "Not implemented. Delete committee.", 501);
};
