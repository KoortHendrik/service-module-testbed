const { test, expect } = require('@playwright/test');
test('services delete negative type', async ({ request }) => {
  const response = await request.post(`${process.env.BASE_URL || 'http://localhost:3000'}/services/delete`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      "id": "sample"
    }),
  });
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});