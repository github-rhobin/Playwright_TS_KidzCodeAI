import { test, expect } from "@playwright/test";

test("invalid login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("locked_out_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.locator('input[name="login-button"]').click();
  await page.waitForTimeout(3000); // Wait exactly 3 seconds
  await expect(page.getByRole('heading', { name: 'Epic sadface: Sorry, this user has been locked out.' })).toBeVisible();
});
