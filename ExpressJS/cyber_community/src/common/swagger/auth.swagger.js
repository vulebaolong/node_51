export const authSwagger = {
    "/auth/login": {
        post: {
            tags: ["Auth"],
            summary: "Login System",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "example@gmail.com",
                                },
                                password: {
                                    type: "string",
                                    example: "1234",
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
