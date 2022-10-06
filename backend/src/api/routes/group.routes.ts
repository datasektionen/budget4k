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
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content: *groupContent
 *    tags:
 *      - Group
 */
groupRouter.get("/", getAllGroups);

/**
 * @openapi
 * /v1/group:
 *  post:
 *    summary: Creates a new group.
 *  tags:
 *    - Group
 */
groupRouter.post("/", postGroup);

/**
 * @openapi
 * /v1/group/{groupId}:
 *  get:
 *    summary: Returns a specific group
 *    produces:
 *     - application/json
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Group"
 *      500: Somthing went wrong.
 *    tags:
 *      - Group
 */
groupRouter.get("/:groupId", getGroupById);
groupRouter.put("/:groupId", putGroup);
groupRouter.delete("/:groupId", deleteGroup);

export default groupRouter;
