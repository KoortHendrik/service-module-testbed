const { test, expect } = require('@playwright/test');
test('POST /services/delete omitting body.id', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/delete`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "type": "sample"
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});