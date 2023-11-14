import { test, expect } from '@playwright/test';

test('1 Read prices of Harrypotter books', async ({ page }) => {
  await page.goto('https://www.amazon.co.uk/');
  await page.locator('#twotabsearchtextbox').click();
  await page.locator('#twotabsearchtextbox').fill("Books");
  await page.locator('#nav-search-submit-button').click();
  await page.getByLabel('Accept Cookies').click();
  
  await page.pause();
  await page.getByRole('link', { name: 'Prime Reading Eligible Prime Reading Eligible' }).click();
});

