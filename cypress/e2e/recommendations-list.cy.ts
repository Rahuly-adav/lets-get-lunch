describe('Recommendations List', () => {
  let creator, eventName;

  before(() => {
    Cypress.config('baseUrl', 'http://localhost:4200');
  });

  beforeEach(()=> {
    cy.request('DELETE', 'http://localhost:3000/api/test');
  });
  
  beforeEach(() => {
    creator = 'creator';
    cy.signup(creator,'foobar');
  });

  it('should not display a list of recommendations for an event that has suggestions set to false', () => {
    eventName = 'Dinner';
    cy
      .createEvent(eventName, 'India', {suggestLocations: false})
      .get('[data-test=events]').click()
      .url().should('include', '/events')
      .get('.event-title').contains(eventName).next().next().next().next().children().click()
      .url().should('include','/event/')
      .get('.recommendations-container').should('not.exist');
  });

  it('should display a list of recommendations for an event that ' +
  'has suggestLocations set to true', () => {
    eventName = 'MyEvent';

    cy
      .createEvent(eventName, 'India', {suggestLocations: true})
      .get('[data-test=events]').click()
      .url().should('include', '/events')
      .get('.event-title').contains(eventName).next().next().next().next().children().click()
      .url().should('include','/event/')
      .get('.recommendations-container').should('be.visible');

  });

  it('should display an error message for an event that\'s in the boonies', () => {
    eventName = 'MyEvent';
  
    cy
      .createEvent(eventName, 'Bayou LaBatre', {suggestLocations: true})
      .get('[data-test=events]').click()
      .url().should('include', '/events')
      .get('.event-title').contains(eventName).next().next().next().next().children().click()
      .url().should('include', '/event/')
      .get('.recommendations-container').should('be.visible')
      .get('.alert-danger').should('be.visible');
  });
})