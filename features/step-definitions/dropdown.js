import { When, Then, world } from "@cucumber/cucumber";
import { expect } from "@wdio/globals";
import dropdownPage from "../pageobjects/dropdown.page.js";

When(/^I select "(.+)"$/, async function (option) {
  // not sure what you're going for here?
  world.hello = "hello";
  // This seems like more useful information about what properties you've already
  // Assigned to world than the previous call of: console.log(world)
  console.log(Object.entries(world));
  await dropdownPage.select(option);
});

Then(/^The dropdown value should be "(.+)"$/, async function (option) {
  console.log(Object.entries(world));
  expect(await dropdownPage.selectedOptionText()).toBe(option);
});
