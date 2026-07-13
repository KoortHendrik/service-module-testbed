const { test, expect } = require('@playwright/test');
test('dates calculate difference negative', async ({ request }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const endpoint = '/dates/calculate-difference';
  const url = `${baseUrl}${endpoint}`;
  const requestBody = {
    "endDate": "2026-01-02T00:00:00.000Z"
  };
  const response = await request.post(url, { data: requestBody });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});