import { Router } from "express";
import {
  deleteCostCenter,
  getCostCenter,
  postCostCenter,
  putCostCenter,
} from "../controllers/cost-center.controller";

const costCenterRouter = Router();

costCenterRouter.get("/:costCenterId(\\d+)", getCostCenter);
costCenterRouter.post("/:costCenterId(\\d+)", postCostCenter);
costCenterRouter.put("/:costCenterId(\\d+)", putCostCenter);
costCenterRouter.delete("/:costCenterId(\\d+)", deleteCostCenter);

export default costCenterRouter;
