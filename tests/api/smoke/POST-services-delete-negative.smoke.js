const { test, expect } = require("@playwright/test");

test.describe("POST /services/delete negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  test("missing required field body.id returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/delete", {
      data: {
        "type": "sample"
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.type returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/delete", {
      data: {
        "id": "sample"
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });
});
