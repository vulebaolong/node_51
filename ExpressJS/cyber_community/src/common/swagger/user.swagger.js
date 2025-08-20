export const userSwagger = {
    "/user/avatar-local": {
        post: {
            tags: ["User"],
            summary: "Upload Avatar Local",
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            properties: {
                                file: {
                                    type: "string",
                                    format: "binary",
                                },
                                files: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Get All Article Success",
                },
            },
        },
    },
};
