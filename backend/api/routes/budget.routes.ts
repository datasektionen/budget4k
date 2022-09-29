import { Router } from "express";
import {
    deleteBudget,
    getAllBudgets,
    getBudgetById,
    postBudget,
    putBudget
} from "../controllers/budget.controller";

const budgetRouter = Router();

budgetRouter.get("/", getAllBudgets);
budgetRouter.post("/", postBudget);

budgetRouter.get("/:budgetId(\\d+)", getBudgetById);
budgetRouter.put("/:budgetId(\\d+)", putBudget);
budgetRouter.delete("/:budgetId(\\d+)", deleteBudget);

export default budgetRouter;
