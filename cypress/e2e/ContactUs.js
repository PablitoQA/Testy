describe("Pierwszy test", () => {

 it('Gitówa', () => {-
 
  
    cy.visit('https://www.webdriveruniversity.com/')
    cy.contains( 'Contact Us').click(),

    cy.get('#contact-us').should('have.attr', 'href')('"first_name"]').type("Pawel")
    cy.get('[name="last_name"]').type("Tester")
    cy.get('[name="email"]').type("pablitoemail")
    cy.get('[name="message"]').type("Yo")
    cy.get('[type="submit"]').click()
    
  
  })

})

