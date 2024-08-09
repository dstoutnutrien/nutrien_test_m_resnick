class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      // nth-child counts consecutive elements of the same parent
      // so to find the nth child of the form we have to count all
      // elements. To find the second checkbox
      // (after the first <input> and the <br> tag) would be
      // input:nth-child(3), but this is brittle
      // and doesn't align well with the method.
      // My solution: collect all checkbox elements by attribute instead
      // and indexing into that result array.
      checkbox: (num) => {
        const checkboxIdx = parseInt(num) - 1;
        // could use $("form#checkboxes input") as well
        const checkboxes = $$('input[type="checkbox"]');
        return checkboxes[checkboxIdx];
      }
    };/*  */
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    await checkbox.click();
  }
}

export default new CheckboxesPage();
