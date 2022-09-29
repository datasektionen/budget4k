import { Router } from "express";
import {
    postGroup,
    getAllGroups,
    getGroupById,
    deleteGroup,
    putGroup
} from "../controllers/group.controller";

const groupRouter = Router();

/**
 * @openapi
 * /v1/group:
 *  get:
 *      summary: Returns all the group.
 *      responses:
 *          200:
 *              A list containing all groups.
 *          500:
 *              Somthing went wrong.
 *      tags:
 *          - Group
 */
groupRouter.get("/", getAllGroups);
groupRouter.post("/", postGroup);

groupRouter.get("/:groupId", getGroupById);
groupRouter.put("/:groupId", putGroup);
groupRouter.delete("/:groupId", deleteGroup);

export default groupRouter;
