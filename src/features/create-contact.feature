Feature: As a user I expect to be able to create new contacts

    @wip
    @reg
    Scenario: As a user I expect to be able to create new contact
        Given I am on the "home" page
        And I click the "Create" button
        Then I am navigated to the "create contact" page
        And the "create contact header" should contains text "Create Contact"
        Then I fill in the "Name" input with "John Smith"
        Then I select "Male" option from dropdown "Gender"
        Then I fill in the "Phone" input with "1234567890"
        Then I fill in the "Street" input with "Fake Street"
        Then I fill in the "City" input with "Noida"
        And I click the "Save" button

        Then I am navigated to the "home" page
        And I fill in the "Search Contacts" input with "John Smith"
        Then the "Name label" should contains text "John Smith"
        Then the "Gender label" should contains text "Male"
        Then the "Address label" should contains text "Fake Street"
        Then the "Address label" should contains text "Noida"
        And the "Edit button" should be displayed
        And the "Delete button" should be displayed