import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import signup from "../pages/signup"


Given('i accessed the registration page', () => {
    signup.acessSignup()
    signup.imputData()
    signup.buttonSignup()
})

When('fill in all mandatory data',() => {
    signup.imputdataForm()
})
And('click on create account',() => {
    signup.buttonCreateAccount()
})
Then('I am redirected to account created page',() => {
    cy.url()
    .should('be.equal', 'https://automationexercise.com/account_created')
})
