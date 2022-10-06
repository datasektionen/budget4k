import { BudgetLine } from "src/types/budget-line";

/**
 * @openapi
 * components:
 *  schemas:
 *    CostCenter:
 *      title: CostCenter
 *      type: object
 *      properties:
 *        costCenterId:
 *          *idProperty
 *        name:
 *          type: string
 *        comment:
 *          *commentProperty
 *        darken:
 *          *darkenProperty
 *        budgetId:
 *          type: integer
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
export interface CostCenter {
    readonly costCenterId: number;
    name: string;
    comment?: string;
    darken: boolean;
    budgetId: number;
    budgetLines?: BudgetLine[];
}
