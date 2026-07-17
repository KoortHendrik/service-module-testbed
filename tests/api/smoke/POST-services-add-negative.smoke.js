const { test, expect } = require("@playwright/test");

test.describe("POST /services/add negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  test("missing required field body.name returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": "sample",
        "examples": "sample",
        "isCommon": false,
        "serviceId": "sample",
        "state": "sample",
        "structure": "sample",
        "type": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });

  test("missing required field body.description returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "entities": "sample",
        "examples": "sample",
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": "sample",
        "type": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });

  test("missing required field body.type returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": "sample",
        "examples": "sample",
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });

  test("missing required field body.content returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "description": "sample",
        "entities": "sample",
        "examples": "sample",
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": "sample",
        "type": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });

  test("missing required field body.serviceId returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": "sample",
        "examples": "sample",
        "isCommon": false,
        "name": "sample",
        "state": "sample",
        "structure": "sample",
        "type": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });

  test("missing required field body.isCommon returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": "sample",
        "examples": "sample",
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "structure": "sample",
        "type": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });

  test("missing required field body.structure returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "sample",
        "description": "sample",
        "entities": "sample",
        "examples": "sample",
        "isCommon": false,
        "name": "sample",
        "serviceId": "sample",
        "state": "sample",
        "type": "sample",
        "updateServiceDb": true
      },
    });
    expect(response.status()).toBe(400);
  });
});
