const { test, expect } = require("@playwright/test");

test.describe("POST /dates/calculate-difference negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  test("missing required field body.startDate returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/dates/calculate-difference", {
      data: {
        "endDate": "sample"
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Start date is required");
  });
});
