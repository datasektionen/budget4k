import { Router } from "express";
import { getGroupBudgets } from "./budgets";
import { deleteGroup, getAllGroups, getGroupById, postGroup, putGroup } from "./group.controller";

export const groupRouter = Router();

/**
 * @openapi
 * /v1/group:
 *  get:
 *    summary: Returns all the groups.
 *    operationId: getGroups
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content: *groupsContent
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Group
 */
groupRouter.get("/", getAllGroups);

/**
 * @openapi
 * /v1/group:
 *  post:
 *    summary: Creates a new group.
 *    operationId: createGroup
 *    requestBody:
 *      $ref: "#/components/requestBodies/groupBody"
 *    responses:
 *      200:
 *        description: Sucessfully created the group.
 *        content: *groupContent
 *      400:
 *        $ref: "#/components/responses/BadRequest"
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Group
 */
groupRouter.post("/", postGroup);

/**
 * @openapi
 * /v1/group/{groupId}:
 *  get:
 *    summary: Returns a specific group
 *    operationId: getGroup
 *    responses:
 *      200:
 *        description: A list containing all groups.
 *        content: *groupContent
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Group
 */
groupRouter.get("/:groupId", getGroupById);

/**
 * @openapi
 * /v1/group/{groupId}:
 *  put:
 *    summary: Updates a group.
 *    operationId: updateGroup
 *    requestBody:
 *      $ref: "#/components/requestBodies/groupBody"
 *    responses:
 *      200:
 *        description: The group was sucessufully updated.
 *        content: *groupContent
 *      400:
 *        $ref: "#/components/responses/BadRequest"
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Group
 */
groupRouter.put("/:groupId", putGroup);

/**
 * @openapi
 * /v1/group/{groupId}:
 *  delete:
 *    summary: Deletes a group and it's budgets.
 *    operationId: deleteGroup
 *    responses:
 *      200:
 *        description: Successfully deleted the group.
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Group
 */
groupRouter.delete("/:groupId", deleteGroup);

/**
 * @openapi
 * /v1/group/{groupId}/budget:
 *  get:
 *    summary: Returns a group and its budgets in the specified time period.
 *    operationId: getGroupBudget
 *    parameters:
 *      - in: query
 *        name: from
 *        schema:
 *          type: string
 *          format: date
 *        description: Only selects budgets after this date (exclusive).
 *      - in: query
 *        name: to
 *        schema:
 *          type: string
 *          format: date
 *        description: Only selects budgets to this date (inclusive).
 *    responses:
 *      200:
 *        description: The group and its budgets.
 *        content: *groupBudgetContent
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Group
 */
groupRouter.get("/:groupId/budgets", getGroupBudgets);
