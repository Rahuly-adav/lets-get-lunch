describe('Dashboard', () => {
  before(() => {
    Cypress.config('baseUrl','http://localhost:4200');
  })

  it('should redirect to home page for an unauthorized used.', () => {
    cy.visit('/dashboard').url().should('include','/');
  })
})