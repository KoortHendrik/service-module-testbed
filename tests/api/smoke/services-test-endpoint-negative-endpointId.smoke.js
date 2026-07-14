const { test, expect } = require('@playwright/test');
test('services test endpoint negative endpointId', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/test-endpoint`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      "request": "sample"
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});