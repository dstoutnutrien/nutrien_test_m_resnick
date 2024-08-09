import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import checkboxesPage from "../pageobjects/checkboxes.page.js";

Given(/^I see that checkbox (\d) is (checked|unchecked)$/, async function (num, checkboxState) {
  this.checkbox = await checkboxesPage.elements.checkbox(num);

  if (checkboxState === "checked") {
    await expect(this.checkbox).toHaveAttribute("checked");
  } else {
    await expect(this.checkbox).not.toHaveAttribute("checked");
  }
});

When(/^I click the checkbox$/, async function () {
  await this.checkbox.click();
});

Then(/^The checkbox should be (checked|unchecked)$/, async function (checkboxState) {
  if (checkboxState === "checked") {
    await expect(this.checkbox).toHaveAttribute("checked");
  } else {
    await expect(this.checkbox).not.toHaveAttribute("checked");
  }
});
