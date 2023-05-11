/// <reference types="cypress" />
const elsignup = require('./elements').elements

class signup {
acessSignup(){
    cy.visit('https://automationexercise.com/signup')
}
imputData(){
cy.get(elsignup.userName).type('Cintia')
cy.get(elsignup.emailAdress).type('cintiaq@gmail.com')
}
buttonSignup(){
cy.get(elsignup.buttonSignup).click()
}
imputdataForm(){
cy.get(elsignup.imputName).type('Cintia')
cy.get(elsignup.imputLastName).type('Dauricio')
cy.get(elsignup.imputPassword).type('Lurbana5@')
cy.get(elsignup.selectDay).select('9')
cy.get(elsignup.selectMonth).select('7')
cy.get(elsignup.selectYear).select('1980')
cy.get(elsignup.imputCompany).type('Quality Digital')
cy.get(elsignup.imputAdressCompany).type('Rua Monte Video')
cy.get(elsignup.selectCountry).select('Canada')
cy.get(elsignup.imputState).type('São Paulo')
cy.get(elsignup.imputCity).type('São Paulo')
cy.get(elsignup.imputZipCode).type('04281110')
cy.get(elsignup.imputMobileNumber).type('980444938')
}
buttonCreateAccount(){
cy.get(elsignup.buttonCreateAccount).click()
}

}

export default new signup()
