Cypress.Commands.add('createEvent', (name: string,location,opts = {}) => {
    var description = opts.description || 'Description';
    var suggestLocations = opts.suggestLocations || false;

    cy
    .get('[data-test=new-event]').click()
    .url().should('include','/event')

    .get('.alert-success').should('not.exist')
    .get('input[formControlName=title]').type(name)
    .get('input[formControlNAme=description]').type(description)
    .get('input[formControlName=location]').type(location)
    .get('input[formControlName=startTime]').click()
      .get('.owl-dt-calendar-cell-today').click()
      .get('.owl-dt-container-buttons button').last().wait(1000).click()
    .get('input[formControlName=endTime]').click()
      .get('.owl-dt-calendar-cell-today').click()
      .get('[aria-label="Add a hour"]').click()
      .get('.owl-dt-container-buttons button').last().wait(1000).click();

    if (suggestLocations) {
        cy.get('#suggest-true').click();
    }

    cy.get('button[type=submit]').click()
    .get('.alert-success').should('be.visible')
    .get('.cancel').click()
    .url().should('include', '/dashboard');


});