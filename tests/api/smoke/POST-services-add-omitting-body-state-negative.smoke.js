const { test, expect } = require('@playwright/test');
test('POST /services/add omitting body.state', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/add`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "content": "sample",
      "description": "sample",
      "entities": {},
      "examples": {},
      "isCommon": false,
      "name": "sample",
      "serviceId": "sample",
      "structure": {},
      "type": "sample",
      "updateServiceDb": false
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});