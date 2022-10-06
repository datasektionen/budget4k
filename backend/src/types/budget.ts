import { Budget as PrismaBudget } from "@prisma/client";
import { Overwrite } from "src/util";
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
export type Budget = Overwrite<PrismaBudget, { comment?: string }> & {
    costCenters?: CostCenter[];
};
