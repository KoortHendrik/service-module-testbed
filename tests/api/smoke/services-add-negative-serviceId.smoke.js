const { test, expect } = require('@playwright/test');
test('services add negative serviceId', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/add`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
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
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});