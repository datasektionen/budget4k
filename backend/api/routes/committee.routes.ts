import { Router } from "express";
import {
    postCommittee,
    deleteCommittee,
    getCommittees,
    getCommittee,
    putCommittee
} from "../controllers/committee.controller";

const committeeRouter = Router();

/**
 * @openapi
 * /v1/committees:
 *  get:
 *      summary: Returns all the committees
 *      responses:
 *          200:
 *              A list of the committees
 *      tags:
 *          - Committee
 */
committeeRouter.get("/", getCommittees);

committeeRouter.post("/", postCommittee);

committeeRouter.get("/:committeeId(\\d+)", getCommittee);
committeeRouter.put("/:committeeId(\\d+)", putCommittee);
committeeRouter.delete("/:committeeId(\\d+)", deleteCommittee);

export default committeeRouter;
