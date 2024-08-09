// Some of the page objects import $ from globals, some don't.
// I'm not sure what the significance of this is.
// import { $ } from "@wdio/globals";
// import Page from "./page.js";

class BasicAuthPage {
  get body() {
    return $("body");
  }
  async login(username, password) {
    await this.open(username, password);
  }
  async open(username, password) {
    await browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`
    );
  }
}

export default new BasicAuthPage();
