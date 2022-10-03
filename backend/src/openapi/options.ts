import { OAS3Options } from "swagger-jsdoc";
import definitions from "./definitions";

export default {
    definition: definitions,
    apis: ["./api/routes/*.ts"]
} as OAS3Options;
