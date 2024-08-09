class DropdownPage {
  get elements() {
    return {
      header: () => $("h3"),
      input: () => $('.example input[type="number"]'),
    };
  }

  async set(value) {
    await (await this.elements.input()).setValue(value);
  }
}

export default new DropdownPage();
