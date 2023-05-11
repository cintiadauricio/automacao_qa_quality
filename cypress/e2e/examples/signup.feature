Feature: New User Signup!

 Scenario: Fill in data for registration
        Given i accessed the registration page
        When  fill in all mandatory data
        And click on create account
        Then I am redirected to account created page
