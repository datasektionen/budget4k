import express from "express";
import { budgetLineRouter, budgetRouter, costCenterRouter, groupRouter } from "./resources";
const api = express();

api.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        message: "Hello from the API"
    });
});

api.use("/groups", groupRouter);
api.use("/budgets", budgetRouter);
api.use("/costCenters", costCenterRouter);
api.use("/budgetLines", budgetLineRouter);

export default api;
