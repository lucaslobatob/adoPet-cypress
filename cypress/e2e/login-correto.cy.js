describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
        cy.get('[data-test="login-button"]').click(); // Aqui o cypress irá clicar no link de login
    })

    it('Vai preencher o formulário de login corretamente e vai voltar para o usuário', () => {
        cy.login("lucas@email.com", "Senha123");
    })
})