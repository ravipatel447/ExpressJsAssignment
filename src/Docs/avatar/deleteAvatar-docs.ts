export const deleteAvatar = {
  delete: {
    tags: ["Avatar"],
    summary: "remove Avatar",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 201,
                message: "user's profile Image is removed Successfully!",
                data: {
                  user: {
                    _id: "647eff739e4fc325327cc918",
                    email: "jenil@test.com",
                    firstName: "jenil",
                    lastName: "bhalala",
                    profileUrl: "https://i.stack.imgur.com/l60Hf.png",
                    __v: 2,
                  },
                },
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
