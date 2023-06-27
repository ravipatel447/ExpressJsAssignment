export const loginDoc = {
  post: {
    tags: ["Auth"],
    summary: "login User",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              email: "jenil@test.com",
              password: "jenil@test.com",
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Successfully LoggedIn",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 200,
                message: "user logged in successfully!",
                data: {
                  user: {
                    _id: "6462fe440889d9cfe1111745",
                    email: "jenil@test.com",
                    firstName: "jenil",
                    lastName: "bhalala",
                    profileUrl: "https://i.stack.imgur.com/l60Hf.png",
                    __v: 3,
                  },
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjQ2MmZlNDQwODg5ZDljZmUxMTExNzQ1IiwiaWF0IjoxNjg2MDM4ODA1LCJleHAiOjE2ODY2NDM2MDV9.IUD-oSbXygcyz8eN8gqjjhAauhrS2_agkIfU5Oc6_wI",
                },
                error: false,
              },
            },
          },
        },
      },
      400: {
        description: "Bad Request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 400,
                message: "Invalid Credentials!",
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
