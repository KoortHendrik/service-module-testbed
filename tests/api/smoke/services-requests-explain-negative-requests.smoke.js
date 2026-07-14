const { test, expect } = require('@playwright/test');
test('services requests explain negative requests', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/requests/explain`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});