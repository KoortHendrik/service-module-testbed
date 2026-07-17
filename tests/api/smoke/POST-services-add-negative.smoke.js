const { test, expect } = require("@playwright/test");

test.describe("POST /services/add negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  test("missing required field body.name returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": {},
        "examples": {},
        "isCommon": false,
        "serviceId": "sample",
        "state": "sample",
        "structure": {},
        "type": "sample",
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.description returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "entities": {},
        "examples": {},
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": {},
        "type": "sample",
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.type returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": {},
        "examples": {},
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": {},
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.content returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "description": "sample",
        "entities": {},
        "examples": {},
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": {},
        "type": "sample",
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.serviceId returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": {},
        "examples": {},
        "isCommon": false,
        "name": "sample",
        "state": "sample",
        "structure": {},
        "type": "sample",
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.isCommon returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": {},
        "examples": {},
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": {},
        "type": "sample",
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.structure returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": {},
        "examples": {},
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "type": "sample",
        "updateServiceDb": false
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });
});
