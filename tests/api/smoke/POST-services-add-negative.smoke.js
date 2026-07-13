const { test, expect } = require('@playwright/test');

test('[api] [smoke] POST /services/add returns 400', async ({ request }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const response = await request.post(baseUrl + '/services/add', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      "entities": "sample",
      "examples": "sample",
      "state": "sample",
      "updateServiceDb": true
    }
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});