describe('Cadastrando um usuário na página adoPet', () => {
  it('Preenchendo o formulário de cadastro', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
    cy.contains('a', 'Cadastrar').click(); // Aqui o cypress irá clicar no link de cadastro
    cy.get('input[name="nome"]').type('Teste'); // Aqui o cypress irá preencher o campo "nome"
    cy.get('input[name="email"]').type('teste@teste.com'); // Aqui se preenche o campo "email"
    cy.get('input[name="password"]').type('Teste123'); // Aqui se preenche o campo "senha"
    cy.get('input[name="confirm_password"]').type('Teste123'); // Aqui se preenche o campo "confirmar senha"
    cy.contains('button', 'Cadastrar').click(); // Aqui o cypress irá clicar no botão de cadastro
  })
})

