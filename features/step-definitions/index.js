import { Given, When, Then, world } from "@cucumber/cucumber";
import Page from "../pageobjects/page.js";
// In order to be able to extend the Page class in login.page.js,
// you had to export Page as a class, not an instantiated object.
// That's why index is initialized as a new page here.
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  world.page = page;
  await index.click(page);
});

Then("I should be directed to the selected page", async function () {
  const url = await browser.getUrl();
  console.log(url);
  // This approach only verifies that the links don't redirect to a 404.
  // In a production test suite, you'd want to have references to page objects
  // Where you verify the presence of certain elements on each page
  // But the more details/elements you add to your "is the page loaded" assertsions,
  // the more brittle those tests can become

  await expect(url).toMatch(new RegExp(`.+${index.paths[world.page]}.*`, "gm"));
  // const header = await $("h3");
  // expect(header).toHaveTextContaining(this.page);
});
