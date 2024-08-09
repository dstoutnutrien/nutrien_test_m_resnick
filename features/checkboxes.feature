@CHECKBOXES
Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can check a checkbox
    Given I am on the Checkboxes page
    And I see that checkbox 1 is unchecked
    When I click the checkbox
    Then The checkbox should be checked

  Scenario: As a user, I can uncheck a checkbox
    Given I am on the Checkboxes page
    And I see that checkbox 2 is checked
    When I click the checkbox
    Then The checkbox should be unchecked



