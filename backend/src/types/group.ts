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
export interface Group {
    readonly groupId: string;
    name: string;
    comment?: string;
    active: boolean;
    project: boolean;
    darken: boolean;
    budgets?: Budget[];
}