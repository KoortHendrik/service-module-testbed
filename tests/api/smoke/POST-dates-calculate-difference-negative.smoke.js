const { test, expect } = require('@playwright/test');
test('POST /dates/calculate-difference omitting body.startDate', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/dates/calculate-difference`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "endDate": "sample"
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});