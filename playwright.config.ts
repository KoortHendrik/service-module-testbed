import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:8086',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
