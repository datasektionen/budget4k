import { Router } from "express";
import { getGroupBudgets } from "./budgets";
import { deleteGroup, getAllGroups, getGroupById, postGroup, putGroup } from "./group.controller";

export const groupRouter = Router();

/**
 * @openapi
 * /v1/group:
 *  get:
 *    summary: Returns all the groups.
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content: *groupsContent
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
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content: *groupContent
 *    tags:
 *      - Group
 */
groupRouter.get("/:groupId", getGroupById);

groupRouter.put("/:groupId", putGroup);
groupRouter.delete("/:groupId", deleteGroup);

/**
 * @openapi
 * /v1/group/{groupId}/budget:
 *  get:
 *    summary: Returns a group and its budgets in the specified time period.
 *    responses:
 *      200:
 *        description: The group and its budgets.
 *        content: *groupBudgetContent
 *    tags:
 *      - Group
 */
groupRouter.get("/:groupId/budgets", getGroupBudgets);
