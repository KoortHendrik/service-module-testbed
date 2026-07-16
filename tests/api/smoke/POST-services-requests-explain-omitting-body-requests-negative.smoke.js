const { test, expect } = require('@playwright/test');
test('POST /services/requests/explain omitting body.requests', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/requests/explain`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});