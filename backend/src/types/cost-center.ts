import { CostCenter as PrismaCostCenter } from "@prisma/client";
import { Overwrite } from "src/util";
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
export type CostCenter = Overwrite<PrismaCostCenter, { comment?: string }> & {
    budgetLines?: BudgetLine[];
};
