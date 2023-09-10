Feature: As a user I can interact with autocomplete dropdown input

    @reg
    Scenario: As a user I can interact and assert with autocomplete dropdown
        Given I am on the "home" page
        And I click the "playground" button
        Then I am navigated to the "playground" page
        And I fill in the "movies" input with "The G"
        And I click the "the godfather" link
        Then the "movies" should contain the value "The Godfather"
        And the "movies" should not contain the value "The Godfather: Part II"
