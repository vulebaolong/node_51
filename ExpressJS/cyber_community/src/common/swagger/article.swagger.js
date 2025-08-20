export const articleSwagger = {
    "/article/": {
        get: {
            tags: ["Article"],
            summary: "Get All Article",
            security: [{ anhlong: [] }],
            parameters: [
                {
                    name: "page",
                    in: "query",
                    type: "number",
                },
                {
                    name: "pageSize",
                    in: "query",
                    type: "number",
                },
            ],
            responses: {
                200: {
                    description: "Get All Article Success",
                    content: {
                        "text/plain": {
                            schema: {
                                type: "string",
                            },
                            example: "whoa!",
                        },
                    },
                },
            },
        },
    },
    "/article/{id}": {
        get: {
            tags: ["Article"],
            summary: "Get Detail Article",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "id article",
                    required: true,
                },
            ],
            responses: {
                200: {
                    description: "Get All Article Success",
                },
            },
        },
    },
};
