Feature: As a user I expect to navigate to the homepage

    @smoke
    @reg
    Scenario: As a user I expect to see saved contacts
        Given I am on the "home" page
        And the "header logo" should be displayed
        Then the "contacts header" should contains text "Contacts"

    @reg
    Scenario: As a user I expect to see saved contactssss
        Given I am on the "home" page
        And the "header logo" should be displayed 
        Then the "contacts header" should contains text "Contactssss"

    @reg
    Scenario: As a user I expect not to see unsaved contacts
        Given I am on the "home" page
        And the "header logo" should be displayed
        Then the "contacts header" should contains text "Contacts"
        And I fill in the "Search Contacts" input with "Mr No One"
        Then the "Name label" should not be displayed
        And the "Edit button" should not be displayed