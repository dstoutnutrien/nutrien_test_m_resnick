@BASIC_AUTH
Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given I use basic auth to login with <username> and <password>
    Then I should see the text <message> on the page

    Examples:
      | username | password | message                                                |
      | admin    | admin    | Congratulations! You must have the proper credentials. |
      | foo      | bar      | Not authorized                                         |
