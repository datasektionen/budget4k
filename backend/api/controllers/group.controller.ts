import {
    createGroup,
    readAllGroups,
    readGroupById,
    removeGroup,
    updateGroup
} from "../services/group.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Group } from "../../types/db-types";
import { errorResponse, successResponse } from "../../util/response";

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

export const postGroup = async (req: Request, res: Response) => {
    try {
        const group = JSON.parse(req.body.group) as Group;
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
        const group = JSON.parse(req.body.group) as Group;
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
