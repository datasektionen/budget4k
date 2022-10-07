import express from "express";
import {
    budgetLineRouter,
    budgetRouter,
    costCenterRouter,
    groupRouter
} from "./resources";
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
