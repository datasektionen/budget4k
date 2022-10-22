import { Router } from "express";
import {
    deleteBudgetLine,
    getAllBudgetLines,
    getBudgetLineById,
    postBudgetLine,
    putBudgetLine
} from "./budget-line.controller";

export const budgetLineRouter = Router();

/**
 * @openapi
 * /v1/budgetLines:
 *  get:
 *    summary: Returns all budget lines.
 *    operationId: getBudgetLines
 *    responses:
 *      200:
 *        description: A list containing all the budget lines.
 *        content:
 *          $ref: "#/components/content/BudgetLinesContent"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - BudgetLine
 */
budgetLineRouter.get("/", getAllBudgetLines);

/**
 * @openapi
 * /v1/budgetLines:
 *  post:
 *    summary: Creates a new budget line.
 *    operationId: createBudgetLine
 *    requestBody:
 *      $ref: "#/components/requestBodies/BudgetLinePostBody"
 *    responses:
 *      200:
 *        description: Successfully created the budget line.
 *        content:
 *          $ref: "#/components/content/BudgetLineContent"
 *      400:
 *        $ref: "#/components/responses/BadRequest"
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - BudgetLine
 */
budgetLineRouter.post("/", postBudgetLine);

/**
 * @openapi
 * /v1/budgetLines/{budgetLineId}:
 *  get:
 *    summary: Returns a specific budget line.
 *    operationId: getBudgetLine
 *    responses:
 *      200:
 *        description: Ok.
 *        content:
 *          $ref: "#/components/content/BudgetLineContent"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - BudgetLine
 */
budgetLineRouter.get("/:budgetId(\\d+)", getBudgetLineById);

/**
 * @openapi
 * /v1/budgetLines/{budgetLineId}:
 *  put:
 *    summary: Updates a budget line.
 *    operationId: updateBudgetLine
 *    requestBody:
 *      $ref: "#/components/requestBodies/BudgetLinePutBody"
 *    responses:
 *      200:
 *        description: The budget line was sucessufully updated.
 *        content:
 *          $ref: "#/components/content/BudgetLineContent"
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
 *      - BudgetLine
 */
budgetLineRouter.put("/:budgetId(\\d+)", putBudgetLine);

/**
 * @openapi
 * /v1/budgetLines/{budgetLineId}:
 *  delete:
 *    summary: Deletes a budget line and it's budget lines.
 *    operationId: deleteBudgetLine
 *    responses:
 *      200:
 *        description: Successfully deleted the budget line.
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - BudgetLine
 */
budgetLineRouter.delete("/:budgetId(\\d+)", deleteBudgetLine);
