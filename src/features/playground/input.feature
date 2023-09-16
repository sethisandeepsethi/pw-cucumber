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

    @reg
    @bug
    Scenario: As a user I can interact and assert with text inputs
        Given I am on the "home" page
        And I click the "playground" button
        Then I am navigated to the "playground" page
        Then the "required input" should equal the value "Testing"
        And the "disabled input" should equal the value "Talks"
        And the "read-only input" should equal the value "Hub"
        And the "required input" should be enabled
        And the "disabled input" should not be enabled
        When I fill in the "required input" input with "India is Bharat"
        Then the "required input" should equal the value "India is Bharat"
        And the "required input" should contain the value "India is Bharat"