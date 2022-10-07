import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
    createBudget,
    readAllBudgets,
    readBudgetById,
    removeBudget,
    updateBudget
} from "../../../service/budget.service";
import { Budget } from "src/types";
import { errorResponse, successResponse } from "../../../util/response";

export const getAllBudgets = async (req: Request, res: Response) => {
    try {
        const data = await readAllBudgets();
        return successResponse(req, res, data, "All budgets");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const getBudgetById = async (req: Request, res: Response) => {
    try {
        const budgetId = +req.params.budgetId;
        const data = await readBudgetById(budgetId);
        if (data) {
            return successResponse(
                req,
                res,
                data,
                `Budget with id '${budgetId}'`
            );
        } else {
            return errorResponse(
                req,
                res,
                `No budget with '${budgetId}' exists`,
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

export const postBudget = async (req: Request, res: Response) => {
    try {
        const budgetData = JSON.parse(req.body.budget) as Budget;
        const budget = await createBudget(budgetData);
        return successResponse(req, res, budget, "Created budget");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const putBudget = async (req: Request, res: Response) => {
    try {
        const budget = JSON.parse(req.body.budget) as Budget;
        const data = await updateBudget(budget);
        return successResponse(req, res, data, "Created budget");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const deleteBudget = async (req: Request, res: Response) => {
    try {
        const budgetId = +req.params.budgetId;
        const data = await removeBudget(budgetId);
        return successResponse(req, res, data, "Created budget");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};
