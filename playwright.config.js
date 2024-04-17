import { devices } from '@playwright/test';
export default {
  testDir: './tests',
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  retries: 1,
  reporter: 'html',
  use: {
    baseURL: 'https://www.bestbuy.com/',
    screenshot: 'on',
    video: 'on',
    timezoneId: 'America/New_York',
  },
  workers: 4,
  timeout: 1200000,
};