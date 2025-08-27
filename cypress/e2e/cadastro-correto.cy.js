describe('Página de cadastro', () => {
   beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
      })
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Gabriely');
    cy.get('[data-test="input-email"]').type('gabriely@email.com');
    cy.get('[data-test="input-password"]').type('Senha1234');
    cy.get('[data-test="input-confirm-password"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();

  })
})