/**
 * @openapi
 * components:
 *  schemas:
 *    BudgetLine:
 *      title: BudgetLine
 *      type: object
 *      properties:
 *        budgetLineId:
 *          *idProperty
 *        name:
 *          type: string
 *        comment:
 *          *commentProperty
 *        income:
 *          type: number
 *          default: 0
 *        expense:
 *          type: number
 *          default: 0
 *        validFrom:
 *          *dateProperty
 *        validTo:
 *          *dateProperty
 *        editDate:
 *          *dateProperty
 *        editedBy:
 *          type: string
 *        darken:
 *          *darkenProperty
 *        costCenterId:
 *          type: integer
 *      required:
 *        - budgetLineId
 *        - name
 *        - income
 *        - expense
 *        - darken
 *        - costCenterId
 */
export interface BudgetLine {
    budgetLineId: number;
    name: string;
    income: number;
    expense: number;
    comment?: string;
    editDate?: Date;
    editedBy: string;
    darken: boolean;
    costCenterId: number;
}

export type INewBudgetLine = Omit<BudgetLine, "budgetLineId" | "budgetLines">;
