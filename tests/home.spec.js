import { Home } from "../pages/home";
import { test } from "@playwright/test";
test("User selects a country", async ({ page }) => {
  const home = new Home(page)
  await home.navigate();
  await home.selectCountry()
  await home.clickOnMenu()
  await home.selectCategory()
});
