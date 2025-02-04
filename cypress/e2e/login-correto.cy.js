describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
        cy.get('[data-test="login-button"]').click(); // Aqui o cypress irá clicar no link de login
    })

    it('Vai preencher o formulário de login corretamente e vai voltar para o usuário', () => {
        cy.get('[data-test="input-loginEmail"]').type("lucas@email.com"); // Aqui o cypress irá preencher o campo "email"
        cy.get('[data-test="input-loginPassword"]').type("Senha123"); // Aqui se preenche o campo "senha"
        cy.get('[data-test="submit-button"]').click(); // Aqui o cypress irá clicar no botão de entrar
    })
})