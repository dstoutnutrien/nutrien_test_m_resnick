import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (.+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

Then(/^I should see the text (.+) on the page$/, async (message) => {
  // My previous solution only worked with headed browsers, not headless
  // toHaveTextContaining marked as deprecated, suggested alternative from tooltip:
  // expect(el).toHaveText(expect.stringContaining('...'))
  // await expect(BasicAuthPage.message).toHaveTextContaining(message);
  await expect(BasicAuthPage.body).toHaveText(expect.stringContaining(message));
});
