const { test, expect } = require('@playwright/test');
test('services test endpoint negative', async ({ request }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const endpoint = '/services/test-endpoint';
  const url = `${baseUrl}${endpoint}`;
  const requestBody = {};
  const response = await request.post(url, { data: requestBody });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});