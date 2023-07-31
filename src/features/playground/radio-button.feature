Feature: As a user I can interact  with radio buttons

    @reg
    Scenario: As a user I can perform actions and assertions on radio button
        Given I am on the "home" page
        And I click the "playground" button
        Then I am navigated to the "playground" page
        And the "female" radio buttons should be checked
        And the "male" radio buttons should not be checked
        When I check the "male" radio button
        Then the "male" radio buttons should be checked
        And the "female" radio buttons should not be checked
        When I check the "female" radio button
        Then the "female" radio buttons should be checked
        And the "male" radio buttons should not be checked