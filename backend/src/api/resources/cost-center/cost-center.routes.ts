import { Router } from "express";
import {
    deleteCostCenter,
    getAllCostCenters,
    getCostCenterById,
    postCostCenter,
    putCostCenter
} from "./cost-center.controller";

export const costCenterRouter = Router();

/**
 * @openapi
 * /v1/costCenters:
 *  get:
 *    summary: Returns all cost centers.
 *    operationId: getCostCenters
 *    responses:
 *      200:
 *        description: A list containing all the cost centers.
 *        content:
 *          $ref: "#/components/content/CostCentersContent"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - CostCenter
 */
costCenterRouter.get("/", getAllCostCenters);

/**
 * @openapi
 * /v1/costCenters:
 *  post:
 *    summary: Creates a new cost center.
 *    operationId: createCostCenter
 *    requestBody:
 *      $ref: "#/components/requestBodies/CostCenterPostBody"
 *    responses:
 *      200:
 *        description: Successfully created the cost center.
 *        content:
 *          $ref: "#/components/content/CostCenterContent"
 *      400:
 *        $ref: "#/components/responses/BadRequest"
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - CostCenter
 */
costCenterRouter.post("/", postCostCenter);

/**
 * @openapi
 * /v1/costCenters/{costCenterId}:
 *  get:
 *    summary: Returns a specific cost center.
 *    operationId: getCostCenter
 *    responses:
 *      200:
 *        description: Ok.
 *        content:
 *          $ref: "#/components/content/CostCenterContent"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - CostCenter
 */
costCenterRouter.get("/:costCenterId(\\d+)", getCostCenterById);

/**
 * @openapi
 * /v1/costCenters/{costCenterId}:
 *  put:
 *    summary: Updates a cost center.
 *    operationId: updateCostCenter
 *    requestBody:
 *      $ref: "#/components/requestBodies/CostCenterPutBody"
 *    responses:
 *      200:
 *        description: The cost center was sucessufully updated.
 *        content:
 *          $ref: "#/components/content/CostCenterContent"
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
 *      - CostCenter
 */
costCenterRouter.put("/:costCenterId(\\d+)", putCostCenter);

/**
 * @openapi
 * /v1/costCenters/{costCenterId}:
 *  delete:
 *    summary: Deletes a cost center and it's budget lines.
 *    operationId: deleteCostCenter
 *    responses:
 *      200:
 *        description: Successfully deleted the cost center.
 *      401:
 *        $ref: "#/components/responses/Unauthorized"
 *      403:
 *        $ref: "#/components/responses/Forbidden"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      5XX:
 *        $ref: "#/components/responses/ServerError"
 *    tags:
 *      - CostCenter
 */
costCenterRouter.delete("/:costCenterId(\\d+)", deleteCostCenter);
