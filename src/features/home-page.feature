Feature: As a user I expect to navigate to the homepage

    @smoke
    Scenario: As a user I expect to see contacts
        Given I am on the "home" page
        Then the "contacts header" should contains text "Contacts"

    @smoke
        Scenario: As a user I expect to see contactssss
            Given I am on the "home" page
            Then the "contacts header" should contains text "Contactsssss"