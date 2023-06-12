export const getProfileDoc = {
  get: {
    tags: ["User"],
    summary: "get Profile",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 200,
                message: "user profile fetched successfully!",
                data: {
                  user: {
                    _id: "6462fe440889d9cfe1111745",
                    email: "jenil8@test.com",
                    firstName: "jenil",
                    lastName: "bhalala",
                    profileUrl: "https://i.stack.imgur.com/l60Hf.png",
                    __v: 3,
                  },
                },
                error: false,
              },
            },
          },
        },
      },
      500: {
        description: "Jwt is not valid",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 500,
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
