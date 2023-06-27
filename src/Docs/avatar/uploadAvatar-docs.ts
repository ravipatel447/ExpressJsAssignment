export const uploadAvatar = {
  post: {
    tags: ["Avatar"],
    summary: "Upload Avatar",
    requestBody: {
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              Avatar: {
                type: "string",
                format: "binary",
              },
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
                status: 201,
                message: "user's profile Image is uploaded Successfully!",
                data: {
                  user: {
                    _id: "6462fe440889d9cfe1111745",
                    email: "jenil8@test.com",
                    firstName: "jenil",
                    lastName: "bhalala",
                    profileUrl:
                      "Assets/Avatar/Avatar-6462fe440889d9cfe1111745.png",
                    __v: 4,
                  },
                },
                error: false,
              },
            },
          },
        },
      },
      500: {
        description: "wrong file uploaded response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 500,
                message: "Please Upload png,jpg or jpeg image",
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
