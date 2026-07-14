const { test, expect } = require('@playwright/test');
test('dates calculate difference negative', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/dates/calculate-difference`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      "endDate": "2026-01-02T00:00:00.000Z"
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});