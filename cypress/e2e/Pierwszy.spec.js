describe('Pierwszy Test', () => {



    it('Gitówa', () => {
      cy.visit('https://www.webdriveruniversity.com/')
      cy.contains('Contact Us').click()
      cy.get('first_name').click()
    })
    })
