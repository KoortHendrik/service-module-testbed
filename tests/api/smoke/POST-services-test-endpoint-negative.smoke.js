const { test, expect } = require("@playwright/test");

test.describe("POST /services/test-endpoint negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  test("missing required field body.endpointId returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/test-endpoint", {
      data: {
        "request": {}
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "endpointId and url are required");
  });

  test("missing required field body.request returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/test-endpoint", {
      data: {
        "endpointId": "sample"
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "endpointId and url are required");
  });
});
