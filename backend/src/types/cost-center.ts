import { BudgetLine } from "src/types/budget-line";

/**
 * @openapi
 * components:
 *  schemas:
 *    CostCenterWithBudgetLines:
 *      title: CostCenter
 *      type: object
 *      properties:
 *        costCenterId: *idProperty
 *        name: *costCenterNameProperty
 *        comment: *commentProperty
 *        darken: *darkenProperty
 *        budgetId: *idProperty
 *        budgetLines:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/BudgetLine'
 *      required:
 *        - costCenterId
 *        - name
 *        - darken
 *        - budgetId
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    CostCenter:
 *      title: CostCenter
 *      type: object
 *      properties:
 *        costCenterId: *idProperty
 *        name: *costCenterNameProperty
 *        comment: *commentProperty
 *        darken: *darkenProperty
 *        budgetId: *idProperty
 *      required:
 *        - costCenterId
 *        - name
 *        - darken
 *        - budgetId
 */
export interface CostCenter {
    readonly costCenterId: number;
    name: string;
    comment?: string;
    darken: boolean;
    budgetId: number;
    budgetLines?: BudgetLine[];
}

export type INewCostCenter = Omit<CostCenter, "costCenterId" | "budgetLines">;
