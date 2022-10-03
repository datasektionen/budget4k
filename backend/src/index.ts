import api from "./api";
import express from "express";
import options from "./openapi/options";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

const swaggerSpec = swaggerJSDoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, { customSiteTitle: "budget4k API" })
);

app.use("/v1", api);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
