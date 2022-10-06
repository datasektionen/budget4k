import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CostCenter } from "src/types";
import { errorResponse, successResponse } from "../../util/response";
import {
    createCostCenter,
    readAllCostCenters,
    readCostCenterById,
    removeCostCenter,
    updateCostCenter
} from "../services/cost-center.service";

export const getAllCostCenters = async (req: Request, res: Response) => {
    try {
        const data = await readAllCostCenters();
        return successResponse(req, res, data, "All cost centers");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const getCostCenterById = async (req: Request, res: Response) => {
    try {
        const costCenterId = +req.params.costCenterId;
        const data = await readCostCenterById(costCenterId);
        if (data) {
            return successResponse(
                req,
                res,
                data,
                `Cost center with id '${costCenterId}'`
            );
        } else {
            return errorResponse(
                req,
                res,
                `No cost center with '${costCenterId}' exists`,
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

export const postCostCenter = async (req: Request, res: Response) => {
    try {
        const costCenterData = JSON.parse(req.body.costCenter) as CostCenter;
        const costCenter = await createCostCenter(costCenterData);
        return successResponse(req, res, costCenter, "Created costCenter");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const putCostCenter = async (req: Request, res: Response) => {
    try {
        const costCenter = JSON.parse(req.body.costCenter) as CostCenter;
        const data = await updateCostCenter(costCenter);
        return successResponse(req, res, data, "Created costCenter");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const deleteCostCenter = async (req: Request, res: Response) => {
    try {
        const costCenterId = +req.params.costCenterId;
        const data = await removeCostCenter(costCenterId);
        return successResponse(req, res, data, "Created costCenter");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};
