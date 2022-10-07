import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Group } from "src/types";
import {
    createGroup,
    readAllGroups,
    readGroupBudgets,
    readGroupById,
    removeGroup,
    updateGroup
} from "../../../services/group.service";
import { errorResponse, successResponse } from "../../../util";

export const getAllGroups = async (req: Request, res: Response) => {
    try {
        const data = await readAllGroups();
        return successResponse(req, res, data, "All groups");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const getGroupById = async (req: Request, res: Response) => {
    try {
        const groupId = req.params.groupId;
        const data = await readGroupById(groupId);
        if (data) {
            return successResponse(
                req,
                res,
                data,
                `Group with id '${groupId}'`
            );
        } else {
            return errorResponse(
                req,
                res,
                `No group with '${groupId}' exists`,
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

export const getGroupBudgets = async (req: Request, res: Response) => {
    try {
        const groupId = req.params?.groupId;
        const onlyActive = req.query?.active === "true" ?? false;
        const data = await readGroupBudgets(groupId, onlyActive);

        return successResponse(
            req,
            res,
            data,
            "All budgets available for this group"
        );
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const postGroup = async (req: Request, res: Response) => {
    try {
        const group: Group = {
            ...req.body.group,
            active: req.body.group.active ?? true,
            project: req.body.group.project ?? false,
            darken: req.body.group.darken ?? false
        };

        const data = await createGroup(group);
        return successResponse(req, res, data, "Group created");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const putGroup = async (req: Request, res: Response) => {
    try {
        const group: Group = {
            ...req.body.group
        };

        const data = await updateGroup(group);
        return successResponse(req, res, data, "Group updated");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export const deleteGroup = async (req: Request, res: Response) => {
    try {
        const groupId = req.params.groupId;
        const data = await removeGroup(groupId);
        return successResponse(req, res, data, "Group deleted");
    } catch (error) {
        return errorResponse(
            req,
            res,
            error,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};
