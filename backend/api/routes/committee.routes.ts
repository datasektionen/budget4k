import { Router } from "express";
import {
    postCommittee,
    deleteCommittee,
    getCommittees,
    getCommittee,
    putCommittee,
} from "../controllers/committee.controller";

const committeeRouter = Router();

committeeRouter.get("/", getCommittees);
committeeRouter.post("/", postCommittee);

committeeRouter.get("/:committeeId(\\d+)", getCommittee);
committeeRouter.put("/:committeeId(\\d+)", putCommittee);
committeeRouter.delete("/:committeeId(\\d+)", deleteCommittee);

export default committeeRouter;
