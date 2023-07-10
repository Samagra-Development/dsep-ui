/// <reference types="cypress" />


describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Home Page', () => {
    cy.contains('Login')
    cy.screenshot()
  })

})
