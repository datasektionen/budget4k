import express from "express";
import groupRouter from "./routes/group.routes";
import budgetRouter from "./routes/budget.routes";
import costCenterRouter from "./routes/cost-center.routes";
import budgetLineRouter from "./routes/budget-line.routes";

const api = express();

api.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        message: "Hello from the API"
    });
});

api.use("/group", groupRouter);
api.use("/budget", budgetRouter);
api.use("/costCenter", costCenterRouter);
api.use("/budgetLine", budgetLineRouter);

export default api;
