describe('Página de cadastro', () => {
  it('Preenchendo o formulário de cadastro corretamente', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
    cy.get('[data-test="register-button"]').click(); // Aqui o cypress irá clicar no link de cadastro
    cy.cadastrar('Lucas Lobato', 'lucas@email.com', 'Senha123', 'Senha123');
  })
})

