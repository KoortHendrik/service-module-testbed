const { test, expect } = require("@playwright/test");

test.describe("POST /services/requests/explain negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  test("missing required field body.requests returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/requests/explain", {
      data: {},
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "required requests were not provided");
  });
});
