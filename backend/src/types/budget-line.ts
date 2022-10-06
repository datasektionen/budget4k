import { BudgetLine as PrismaBudgetLine } from "@prisma/client";
import { Overwrite } from "src/util";

/**
 * @openapi
 * components:
 *  schemas:
 *    BudgetLine:
 *      title: Budget Line
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
export type BudgetLine = Overwrite<
    PrismaBudgetLine,
    {
        income?: number;
        expense?: number;
        comment?: string;
        validFrom?: Date;
        validTo?: Date;
        editDate?: Date;
        editedBy?: string;
    }
>;
