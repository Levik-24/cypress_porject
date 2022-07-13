describe ('My first test', function () {
    it('Click on element', function () {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('trigger').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
})