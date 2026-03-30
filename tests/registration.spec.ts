import { test, expect } from "@playwright/test";

test("invalid registration", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/");

  await page.getByRole("link", { name: " My Account" }).click();
  await page.getByRole("link", { name: "Register" }).click();

  await page.getByRole("textbox", { name: "* First Name" }).fill("Silver");
  await page.getByRole("textbox", { name: "* Last Name" }).fill("Lining");
  await page.getByRole("textbox", { name: "* E-Mail" }).fill("silverlining@test.com");
  await page.getByRole("textbox", { name: "* Telephone" }).fill("1234567890");
  await page.getByRole("textbox", { name: "* Password", exact: true }).fill("P@ssword1");
  await page.getByRole("textbox", { name: "* Password Confirm" }).fill("P@ssword1");
  await page.getByRole("radio", { name: "Yes" }).check();
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Continue" }).click();

  await page.waitForTimeout(3000); // Wait exactly 3 seconds
  
  await expect(page.getByText("Warning: E-Mail Address is already registered!")).toBeVisible();
});
