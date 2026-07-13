const { test, expect } = require('@playwright/test');

test('[api] [smoke] POST /auth/login returns 400', async ({ request }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const response = await request.post(`${baseUrl}/auth/login`, {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {}
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});