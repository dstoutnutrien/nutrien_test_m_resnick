@BASIC_AUTH
Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given I use basic auth to login with <username> and <password>
    Then I should see a paragraph saying <message>

    Examples:
      | username | password | message                                                |
      | admin    | admin    | Congratulations! You must have the proper credentials. |


  Scenario Outline: As a user, I cannot log into the secure area with invalid credentials
    Given I use basic auth to login with <username> and <password>
    Then  I should see an empty HTML body

    Examples:
      | username | password |
      | foo      | bar      |
