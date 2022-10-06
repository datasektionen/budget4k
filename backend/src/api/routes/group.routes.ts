import { Router } from "express";
import {
    postGroup,
    getAllGroups,
    getGroupById,
    deleteGroup,
    putGroup
} from "../controllers/group.controller";

const groupRouter = Router();

/**
 * @openapi
 * /v1/group:
 *  get:
 *    summary: Returns all the groups.
 *    produces:
 *     - application/json
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content:
 *          application/json:
 *              $ref: '#/components/schemas/Group'
 *      500:
 *        Somthing went wrong.
 *    tags:
 *      - Group
 */
groupRouter.get("/", getAllGroups);
groupRouter.post("/", postGroup);

groupRouter.get("/:groupId", getGroupById);
groupRouter.put("/:groupId", putGroup);
groupRouter.delete("/:groupId", deleteGroup);

export default groupRouter;
