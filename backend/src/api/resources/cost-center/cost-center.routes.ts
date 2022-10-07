import { Router } from "express";
import {
    deleteCostCenter,
    getAllCostCenters,
    getCostCenterById,
    postCostCenter,
    putCostCenter
} from "./cost-center.controller";

export const costCenterRouter = Router();

costCenterRouter.get("/", getAllCostCenters);
costCenterRouter.post("/", postCostCenter);

costCenterRouter.get("/:costCenterId(\\d+)", getCostCenterById);
costCenterRouter.put("/:costCenterId(\\d+)", putCostCenter);
costCenterRouter.delete("/:costCenterId(\\d+)", deleteCostCenter);
