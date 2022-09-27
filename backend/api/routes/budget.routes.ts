import { getBudget, getBudgets } from "../controllers/budget.controller";
import { Router } from "express";

const budgetRouter = Router();

budgetRouter.get("/", getBudgets);
budgetRouter.get("/:budgetId", getBudget);

export default budgetRouter;
