import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

Then(/^I should see an empty HTML body$/, async () => {
  // https://stackoverflow.com/questions/69363305/basic-auth-for-webdriverio-for-headless-and-headful
  // "WebdriverIO has no way of interacting with the HTTPAuth dialog directly.
  // I badger Christian about this every six months or so, guess I'm due to do that again.
  // Browserstack's documentation indicates that they do have a way of dealing with it, but I haven't tried it."

  // Solutions to get to the part where you would manually cancel the HTTPAuth dialog and see the "Not authorized":
  // * Use browserstack: https://www.browserstack.com/docs/automate/selenium/basic-http-authentication
  // * Use an API test tool (e.g. Postman or curl) where this page returns a raw HTTP response "Not authorized"
  let pageSrc = await browser.getPageSource();
  console.log(`Page source: ${pageSrc}`);
  await expect(BasicAuthPage.body).toHaveText("");
});

Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  await expect(BasicAuthPage.message).toBeExisting();
  // toHaveTextContaining marked as deprecated, suggested alternative from tooltip:
  // expect(el).toHaveText(expect.stringContaining('...'))
  // await expect(BasicAuthPage.message).toHaveTextContaining(message);
  await expect(BasicAuthPage.message).toHaveText(expect.stringContaining(message));
});
