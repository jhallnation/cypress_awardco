describe('Get text under Solutions in footer', () => {
  it('Gets the text!', () => {
    cy.visit('https://www.award.co/')

    cy.get('.footer-title').contains('Solutions').nextAll('.footer-link')
  })
})