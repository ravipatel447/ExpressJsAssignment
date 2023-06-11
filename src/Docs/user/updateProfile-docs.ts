export const updateProfileDoc = {
  patch: {
    tags: ["User"],
    summary: "update Profile",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              firstName: "jenil",
              lastName: "bhalala",
              password: "jenil@jenil.com",
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 200,
                message: "user profile updated successfully!",
                data: {
                  user: {
                    _id: "647efe967ed06245faeb7185",
                    email: "jenil@test.com",
                    firstName: "jenil",
                    lastName: "bhalala",
                    profileUrl: "https://i.stack.imgur.com/l60Hf.png",
                    __v: 1,
                  },
                },
                error: false,
              },
            },
          },
        },
      },
      400: {
        description: "Bad request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 400,
                message: '"email" is not allowed',
                data: {},
                error: true,
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
