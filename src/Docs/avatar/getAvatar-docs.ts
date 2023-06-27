export const getAvatar = {
  get: {
    tags: ["Avatar"],
    summary: "get Avatar",
    parameters: [
      {
        in: "path",
        name: "profileUrl",
        schema: {
          type: "string",
          example: "Avatar-6462fe440889d9cfe1111745.png",
        },
        required: true,
        description: "ImageUrl of the user",
      },
    ],
    responses: {
      200: {
        description: "Successful response",
        content: {
          "image/png": {},
        },
      },
      404: {
        description: "page not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                message: "Page not found!",
                status: 404,
                error:
                  '{"statusCode":404,"status":"fail","redirects":false,"url":""}',
              },
            },
          },
        },
      },
    },
  },
};
