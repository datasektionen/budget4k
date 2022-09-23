import { Router } from "express";
import {
  deleteBudgetLine,
  getBudgetLine,
  postBudgetLine,
  putBudgetLine,
} from "../controllers/budget-line.controller";

const budgetLineRouter = Router();

budgetLineRouter.get("/:budgetLineId(\\d+)", getBudgetLine);
budgetLineRouter.post("/:budgetLineId(\\d+)", postBudgetLine);
budgetLineRouter.put("/:budgetLineId(\\d+)", putBudgetLine);
budgetLineRouter.delete("/:budgetLineId(\\d+)", deleteBudgetLine);

export default budgetLineRouter;
