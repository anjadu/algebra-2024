describe('Example Cypress Page Load', () => {
  it('should load the page and display the correct elements', () => {
    cy.visit('https://todo.edu.skuflic.com');

    // Check if title is correct
    cy.title().should('include', 'Skuflic.com To Do');
    
    // Check if navigation bar is visible
    cy.get('.top-bar').should('be.visible');

    cy.get('#input').should('be.visible')

  })
})

describe('Task Submission', () => {
  it('Should fill out and submit the new task'), () => {

    cy.visit('https://todo.edu.skuflic.com');

    cy.wait(5000);

    // Fill out the form fields
    cy.get('#input')
      .click()
      .type('This is a sample task created by automation from Cypress');
    cy.get('#category').select('Education');
    cy.wait(5000);

    // Submit the form
    cy.get('#add').click();

  }
})

describe('Marking Task as Completed', () => { 
  it('should mark the newly created task as completed', () => {
    cy.visit('https://todo.edu.skuflic.com');
    cy.get('#list').children().last().click()
  })  
})