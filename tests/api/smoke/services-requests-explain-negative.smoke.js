const { test, expect } = require('@playwright/test');
test('services requests explain negative', async ({ request }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const endpoint = '/services/requests/explain';
  const url = `${baseUrl}${endpoint}`;
  const requestBody = {};
  const response = await request.post(url, { data: requestBody });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});