describe('Get awardco logo in top left corner', () => {
  it('Gets the logo!', () => {
    cy.visit('https://www.award.co/')

    cy.get('.logo')
  })
})