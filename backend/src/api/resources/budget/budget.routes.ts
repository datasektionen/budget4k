import { Router } from "express";
import {
    deleteBudget,
    getAllBudgets,
    getBudgetById,
    postBudget,
    putBudget
} from "./budget.controller";

export const budgetRouter = Router();

/**
 * @openapi
 * /v1/budgets:
 *  get:
 *    summary: Returns all the budgets.
 *    operationId: getBudgets
 *    responses:
 *      200:
 *        description: A list containing all the budgets.
 *        content:
 *          $ref: "#/components/content/budgetContent"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Budget
 */
budgetRouter.get("/", getAllBudgets);

/**
 * @openapi
 * /v1/budgets:
 *  post:
 *    summary: Creates a new budget.
 *    operationId: createBudget
 *    requestBody:
 *      $ref: "#/components/requestBodies/budgetPostBody"
 *    responses:
 *      200:
 *        description: Successfully created the budget.
 *        content:
 *          $ref: "#/components/content/budgetContent"
 *      400:
 *        $ref: "#/components/responses/BadRequest"
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Budget
 */
budgetRouter.post("/", postBudget);

/**
 * @openapi
 * /v1/budgets/{budgetId}:
 *  get:
 *    summary: Returns a specific budget
 *    operationId: getBudget
 *    responses:
 *      200:
 *        description: The budget exists.
 *        content:
 *          $ref: "#/components/content/budgetContent"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Budget
 */
budgetRouter.get("/:budgetId(\\d+)", getBudgetById);

/**
 * @openapi
 * /v1/budgets/{budgetId}:
 *  put:
 *    summary: Updates a budget.
 *    operationId: updateBudget
 *    requestBody:
 *      $ref: "#/components/requestBodies/budgetBody"
 *    responses:
 *      200:
 *        description: The budget was sucessufully updated.
 *        content:
 *          $ref: "#/components/content/budgetContent"
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
 *      - Budget
 */
budgetRouter.put("/:budgetId(\\d+)", putBudget);

/**
 * @openapi
 * /v1/budgets/{budgetId}:
 *  delete:
 *    summary: Deletes a budget and it's cost centers.
 *    operationId: deleteBudget
 *    responses:
 *      200:
 *        description: Successfully deleted the budget.
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - Budget
 */
budgetRouter.delete("/:budgetId(\\d+)", deleteBudget);
