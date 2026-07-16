const { test, expect } = require('@playwright/test');
test('POST /services/test-endpoint omitting body.endpointId', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/test-endpoint`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "request": {}
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});