describe('Página de cadastro', () => {
  it('Preenchendo o formulário de cadastro corretamente', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
    cy.get('[data-test="register-button"]').click(); // Aqui o cypress irá clicar no link de cadastro
    cy.get('[data-test="input-name"]').type('Lucas Lobato'); // Aqui o cypress irá preencher o campo "nome"
    cy.get('[data-test="input-email"]').type('lucas@email.com'); // Aqui se preenche o campo "email"
    cy.get('[data-test="input-password"]').type('Senha123'); // Aqui se preenche o campo "senha"
    cy.get('[data-test="input-confirm-password"]').type('Senha123'); // Aqui se preenche o campo "confirmar senha"
    cy.get('[data-test="submit-button"]').click(); // Aqui o cypress irá clicar no botão de cadastro
  })
})

