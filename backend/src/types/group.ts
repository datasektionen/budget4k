import { Budget } from "src/types/budget";

/**
 * @openapi
 * components:
 *  schemas:
 *    GroupWithBudget:
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
 *        active:
 *          type: boolean
 *          default: true
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
 *        - active
 *        - project
 *        - darken
 */

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
 *        active:
 *          type: boolean
 *          default: true
 *        project:
 *          type: boolean
 *          default: false
 *        darken:
 *          *darkenProperty
 *        budgets:
 *          type: array
 *      required:
 *        - groupId
 *        - name
 *        - active
 *        - project
 *        - darken
 */
export interface Group {
    groupId: string;
    name: string;
    comment?: string;
    active: boolean;
    project: boolean;
    darken: boolean;
    budgets?: Budget[];
}

export type INewGroup = Omit<Group, "budgets">;
