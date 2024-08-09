@INDEX
Feature: The Internet Guinea Pig Website

  # This scenario takes 33 seconds as written, once passing.
  # I'm imagining there's some way to rewrite it to click
  # all the links asynchronously and wait until they've all loaded
  # in separate tabs before asserting on the correct URL paths...
  # But that might be more trouble than it's worth
  Scenario Outline: As a user,  I can navigate to all pages
    Given I am at the index page
    When I click the <page> link
    Then I should be directed to the selected page

    Examples:
      | page                          |
      | A/B Testing                   |
      | Add/Remove Elements           |
      | Basic Auth                    |
      | Broken Images                 |
      | Challenging DOM               |
      | Checkboxes                    |
      | Context Menu                  |
      | Digest Authentication         |
      | Disappearing Elements         |
      | Drag and Drop                 |
      | Dropdown                      |
      | Dynamic Content               |
      | Dynamic Controls              |
      | Dynamic Loading               |
      | Entry Ad                      |
      | Exit Intent                   |
      | File Download                 |
      | File Upload                   |
      | Floating Menu                 |
      | Forgot Password               |
      | Form Authentication           |
      | Frames                        |
      | Geolocation                   |
      | Horizontal Slider             |
      | Hovers                        |
      | Infinite Scroll               |
      | Inputs                        |
      | JQuery UI Menus               |
      | JavaScript Alerts             |
      | JavaScript onload event error |
      | Key Presses                   |
      | Large & Deep DOM              |
      | Multiple Windows              |
      | Nested Frames                 |
      | Notification Messages         |
      | Redirect Link                 |
      | Secure File Download          |
      | Shadow DOM                    |
      | Shifting Content              |
      | Slow Resources                |
      | Sortable Data Tables          |
      | Status Codes                  |
      | Typos                         |
      | WYSIWYG Editor                |
