import { OAS3Options } from "swagger-jsdoc";
import definitions from "./definitions";

export default {
    definition: definitions,
    apis: [
        "./src/api/**/*.ts",
        "./src/api/**/*.yaml",
        "./src/types/**/*.ts",
        "./src/types/**/*.yaml"
    ],
    basePath: "/"
} as OAS3Options;
