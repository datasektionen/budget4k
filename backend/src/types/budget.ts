import { CostCenter } from "src/types/cost-center";

/**
 * @openapi
 * components:
 *  schemas:
 *    BudgetWithCostCenter:
 *      title: BudgetWithCostCenter
 *      type: object
 *      properties:
 *        budgetId:
 *          *idProperty
 *        comment:
 *          *commentProperty
 *        validFrom:
 *          type: string
 *          format: date
 *        validTo:
 *          type: string
 *          format: date
 *        groupId:
 *          type: string
 *        costCenters:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/CostCenter'
 *      required:
 *        - budgetId
 *        - name
 *        - validFrom
 *        - groupId
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    Budget:
 *      title: Budget
 *      type: object
 *      properties:
 *        budgetId:
 *          *idProperty
 *        comment:
 *          *commentProperty
 *        validFrom:
 *          type: string
 *          format: date
 *        validTo:
 *          type: string
 *          format: date
 *        groupId:
 *          type: string
 *      required:
 *        - budgetId
 *        - name
 *        - validFrom
 *        - groupId
 */
export interface Budget {
    budgetId: number;
    comment?: string;
    validFrom: Date;
    validTo?: Date;
    groupId: string;
    costCenters?: CostCenter[];
}

export type INewBudget = Omit<Budget, "budgetId" | "costCenters">;

export type GetBudgetOptions = { from?: Date; to?: Date };
