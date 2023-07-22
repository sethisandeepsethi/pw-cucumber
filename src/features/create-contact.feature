Feature: As a user I expect to be able to create new contacts

    @wip
    @regression
    Scenario: As a user I expect to be able to create new contact
        Given I am on the "home" page
        And I click the "create" button
        Then I am navigated to the "create contact" page
        And the "create contact header" should contains text "Create Contact"