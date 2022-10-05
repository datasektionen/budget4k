import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BudgetLine } from "src/types/db-types";
import { errorResponse, successResponse } from "../../util/response";
import {
    createBudgetLine,
    readAllBudgetLines,
    readBudgetLineById,
    removeBudgetLine,
    updateBudgetLine
} from "../services/budget-line.service";

export const getAllBudgetLines = async (req: Request, res: Response) => {
    try {
        const data = await readAllBudgetLines();
        return successResponse(req, res, data, "All budget lines");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const getBudgetLineById = async (req: Request, res: Response) => {
    try {
        const budgetLineId = +req.params.budgetLineId;
        const data = await readBudgetLineById(budgetLineId);
        if (data) {
            return successResponse(
                req,
                res,
                data,
                `Budget line with id '${budgetLineId}'`
            );
        } else {
            return errorResponse(
                req,
                res,
                `No budget line with '${budgetLineId}' exists`,
                StatusCodes.NOT_FOUND
            );
        }
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const postBudgetLine = async (req: Request, res: Response) => {
    try {
        const budgetLineData = JSON.parse(req.body.budgetLine) as BudgetLine;
        const budgetLine = await createBudgetLine(budgetLineData);
        return successResponse(req, res, budgetLine, "Created budgetLine");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const putBudgetLine = async (req: Request, res: Response) => {
    try {
        const budgetLine = JSON.parse(req.body.budgetLine) as BudgetLine;
        const data = await updateBudgetLine(budgetLine);
        return successResponse(req, res, data, "Created budgetLine");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const deleteBudgetLine = async (req: Request, res: Response) => {
    try {
        const budgetLineId = +req.params.budgetLineId;
        const data = await removeBudgetLine(budgetLineId);
        return successResponse(req, res, data, "Created budgetLine");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};
