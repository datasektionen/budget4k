import { CostCenter } from "src/types/cost-center";

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
 *        year:
 *          type: string
 *        active:
 *          type: boolean
 *        comment:
 *          *commentProperty
 *        darken:
 *          *darkenProperty
 *        groupId:
 *          type: string
 *        costCenters:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/CostCenter'
 *      required:
 *        - budgetId
 *        - name
 *        - year
 *        - active
 *        - darken
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
