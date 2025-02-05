describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
        cy.get('[data-test="login-button"]').click(); // Aqui o cypress irá clicar no link de login
    })

    it('Verifica mensagem de falha ao fazer login', () => {
        cy.get('[data-test="submit-button"]').click(); // Aqui o cypress irá clicar no botão de entrar
        cy.contains('É necessário informar um endereço de email').should('be.visible'); // Aqui o cypress irá verificar se a mensagem de erro apareceu
        cy.contains('Insira sua senha').should('be.visible');
    })
})