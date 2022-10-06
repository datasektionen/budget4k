import { Group as PrismaGroup } from "@prisma/client";
import { Overwrite } from "src/util";
import { Budget } from "src/types/budget";

/**
 * @openapi
 * components:
 *  schemas:
 *    Group:
 *      title: Group
 *      type: object
 *      properties:
 *        groupId:
 *          type: string
 *          readOnly: true
 *        name:
 *          type: string
 *        comment:
 *          *commentProperty
 *        project:
 *          type: boolean
 *          default: false
 *        darken:
 *          *darkenProperty
 *        budgets:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/Budget'
 *      required:
 *        - groupId
 *        - name
 *        - project
 *        - darken
 */
export type Group = Overwrite<PrismaGroup, { comment?: string }> & {
    budgets?: Budget[];
};
