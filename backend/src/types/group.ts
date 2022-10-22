import { Budget } from "src/types/budget";

/**
 * @openapi
 * components:
 *  schemas:
 *    GroupWithBudget:
 *      title: GroupWithBudget
 *      type: object
 *      properties:
 *        groupId: *groupIdProperty
 *        name:
 *          type: string
 *        comment: *commentProperty
 *        active:
 *          type: boolean
 *          default: true
 *        project:
 *          type: boolean
 *          default: false
 *        darken: *darkenProperty
 *        budgets:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/Budget'
 *      required:
 *        - groupId
 *        - name
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
 *          example: "drek"
 *        name:
 *          type: string
 *          example: "D-rektoratet"
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
 *      required:
 *        - groupId
 *        - name
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
