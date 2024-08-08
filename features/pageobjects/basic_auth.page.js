// import { $ } from "@wdio/globals";
// import Page from "./page.js";

class BasicAuthPage {
  get message() {
    return $(".example > p");
  }
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
