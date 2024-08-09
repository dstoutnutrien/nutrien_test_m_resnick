import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
  await index.click(page);
});

Then("I should be directed to the selected page", async function () {
  const url = await browser.getUrl();
  console.log(url);
  // This approach only verifies that the links don't redirect to a 404
  // In a production test suite, you'd want to have references to page objects
  // Where you verify the presence of certain elements on each page
  // But the more detail you add to your "is the page loaded" assertsions,
  // the more brittle those tests can become

  await expect(url).toMatch(new RegExp(`.+${index.paths[this.page]}.*`, "gm"));
  // const header = await $("h3");
  // expect(header).toHaveTextContaining(this.page);
});
