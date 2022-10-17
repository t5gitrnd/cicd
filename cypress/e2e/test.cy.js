describe('Checking text in demo app', () => {
  it('text changes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#appID').should("have.text", "src/App.js")
  })
})