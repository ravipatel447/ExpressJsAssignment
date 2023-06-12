export const deleteProfileDoc = {
  delete: {
    tags: ["User"],
    summary: "delete Profile",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 200,
                message: "user profile deleted successfully!",
                data: {},
                error: false,
              },
            },
          },
        },
      },
      501: {
        description: "jwt not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 501,
                message: "jwt malformed",
                data: {},
                error: true,
              },
            },
          },
        },
      },
    },
  },
};
