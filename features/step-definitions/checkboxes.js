import { Given, When, Then, world } from "@cucumber/cucumber";
import { expect } from "@wdio/globals";
import checkboxesPage from "../pageobjects/checkboxes.page.js";

Given(/^I see that checkbox (\d) is (checked|unchecked)$/, async function (num, checkboxState) {
  world.checkbox = await checkboxesPage.elements.checkbox(num);

  if (checkboxState === "checked") {
    await expect(world.checkbox).toHaveAttribute("checked");
  } else {
    await expect(world.checkbox).not.toHaveAttribute("checked");
  }
});

When(/^I click the checkbox$/, async function () {
  await world.checkbox.click();
});

Then(/^The checkbox should be (checked|unchecked)$/, async function (checkboxState) {
  if (checkboxState === "checked") {
    await expect(world.checkbox).toHaveAttribute("checked");
  } else {
    await expect(world.checkbox).not.toHaveAttribute("checked");
  }
});
