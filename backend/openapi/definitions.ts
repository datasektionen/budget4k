import { OAS3Definition } from "swagger-jsdoc";

export default {
    openapi: "3.0.0",
    info: {
        title: "Budget4k API",
        version: "1.0.0",
        contact: {
            name: "Konglig Datasektionen",
            email: "d-sys@datasektionen.se",
            url: "https://datasektionen.se/kontakt"
        },
        description: "Budgetsystem för Konglig Datasektionen"
    },
    externalDocs: {
        url: "https://github.com/datasektionen/budget4k",
        description: "GitHub"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local server"
        }
    ]
} as OAS3Definition;
