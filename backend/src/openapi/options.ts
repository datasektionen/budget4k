import { OAS3Options } from "swagger-jsdoc";
import definitions from "./definitions";

export default {
    definition: definitions,
    apis: ["./src/**/*.ts", "./src/**/*.yaml"]
} as OAS3Options;
