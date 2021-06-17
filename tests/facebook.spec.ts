import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev-page";

test.describe("My first suite", () => {
  test("Test facebook", async ({ page }) => {
    // Go to https://www.facebook.com/
    await page.goto("https://www.facebook.com/");
    // Click [data-testid="royal_email"]
    await page.fill('[data-testid="royal_email"]', "test");
    // Click [data-testid="royal_pass"]
    await page.fill('[data-testid="royal_pass"]', "pampam");
    // Click [data-testid="open-registration-form-button"]
    await page.click('[data-testid="open-registration-form-button"]');

    const enabled = await page.isEnabled('[name="firstname"]');
    expect(enabled).toBeTruthy();
    const elementHandle = await page.$('[name="firstname"]');
    await elementHandle.screenshot({ path: "screenshot.png" });
  });

  test("Core Concepts table of contents", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.coreConcepts();
    expect(await playwrightDev.toc()).toEqual([
      "Browser",
      "Browser contexts",
      "Pages and frames",
      "Selectors",
      "Auto-waiting",
      "Execution contexts: Playwright and Browser",
      "Evaluation Argument",
    ]);
  });
});
