describe('Go to Explore Milestones link', () => {
  it('Clicks on link!', () => {
    cy.visit('https://www.award.co/')

    cy.contains('Explore Milestones').parents().invoke('show')

    cy.get('.home-hero-1').invoke('hide')
    cy.get('.home-hero-2').invoke('hide')
    cy.get('.home-hero-3').invoke('hide')

    // .invoke('attr', 'style', 'z-index: -1')

    cy.contains('Explore Milestones').click()
  })
})