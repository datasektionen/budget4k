/**
 * @openapi
 * components:
 *  schemas:
 *    BudgetLine:
 *      title: BudgetLine
 *      type: object
 *      properties:
 *        budgetLineId: *idProperty
 *        name: *budgetLineNameProperty
 *        income: *incomeProperty
 *        expense: *expenseProperty
 *        comment: *commentProperty
 *        editDate: *dateProperty
 *        editedBy:
 *          type: string
 *          example: Ture Teknolog
 *        darken: *darkenProperty
 *        costCenterId: *idProperty
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
