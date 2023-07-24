Feature: As a user I expect to navigate to the homepage

    @smoke
    @reg
    Scenario: As a user I expect to see contacts
        Given I am on the "home" page
        And the "header logo" should be displayed
        Then the "contacts header" should contains text "Contacts"

    @reg
    Scenario: As a user I expect to see contactssss
        Given I am on the "home" page
        And the "header logo" should be displayed 
        Then the "contacts header" should contains text "Contactssss"