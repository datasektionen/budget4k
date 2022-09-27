import { Router } from "express";
import {
    postGroup,
    deleteGroup,
    getGroups,
    getGroup,
    putGroup
} from "../controllers/group.controller";

const groupRouter = Router();

/**
 * @openapi
 * /v1/group:
 *  get:
 *      summary: Returns all the group
 *      responses:
 *          200:
 *              A list of the group
 *      tags:
 *          - Group
 */
groupRouter.get("/", getGroups);

groupRouter.post("/", postGroup);

groupRouter.get("/:groupId(\\d+)", getGroup);
groupRouter.put("/:groupId(\\d+)", putGroup);
groupRouter.delete("/:groupId(\\d+)", deleteGroup);

export default groupRouter;
