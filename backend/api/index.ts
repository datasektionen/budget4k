import express from "express";
import budgetLineRouter from "./routes/budget-line.routes";
import committeeRouter from "./routes/committee.routes";
import costCenterRouter from "./routes/cost-center.routes";

const api = express();

api.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        message: "Hello from the API",
    });
});

api.use("/committee", committeeRouter);
api.use("/costCenter", costCenterRouter);
api.use("/budgetLine", budgetLineRouter);

export default api;
