export const signUpDoc = {
  post: {
    tags: ["Auth"],
    summary: "Register User",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              firstName: "jenil",
              lastName: "bhalala",
              email: "jenil@test.com",
              password: "jenil@test.com",
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "Successfully SignedUp",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 201,
                message: "user register Successfully!",
                data: {
                  user: {
                    email: "jenil@test.com",
                    firstName: "jenil",
                    lastName: "bhalala",
                    profileUrl: "https://i.stack.imgur.com/l60Hf.png",
                    _id: "647ee6c53c5ac10525c07ba3",
                    __v: 1,
                  },
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjQ3ZWU2YzUzYzVhYzEwNTI1YzA3YmEzIiwiaWF0IjoxNjg2MDM4MjEzLCJleHAiOjE2ODY2NDMwMTN9.j7L73f2Ld9qyrExO-iHKHQMigiBnRr32voEUXxQbInQ",
                },
                error: false,
              },
            },
          },
        },
      },
    },
  },
};
