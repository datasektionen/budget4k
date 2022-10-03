import { Router } from "express";
import {
    deleteBudgetLine,
    getAllBudgetLines,
    getBudgetLineById,
    postBudgetLine,
    putBudgetLine
} from "../controllers/budget-line.controller";

const budgetLineRouter = Router();

budgetLineRouter.get("/", getAllBudgetLines);
budgetLineRouter.post("/", postBudgetLine);

budgetLineRouter.get("/:budgetId(\\d+)", getBudgetLineById);
budgetLineRouter.put("/:budgetId(\\d+)", putBudgetLine);
budgetLineRouter.delete("/:budgetId(\\d+)", deleteBudgetLine);

export default budgetLineRouter;
