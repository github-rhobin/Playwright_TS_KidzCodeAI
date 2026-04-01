import { test, expect } from '@playwright/test';

test('invalid login', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/');

  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('silverlining@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(3000); // Wait exactly 3 seconds
  
  await expect(page.getByText('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')).toBeVisible();
});