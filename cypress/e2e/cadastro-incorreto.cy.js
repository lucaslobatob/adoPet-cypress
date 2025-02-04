describe('Página de cadastro', () => {
    it('Não vai preencher o formulário e vai voltar para o usuário mensagem de erro', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Aqui se inicia o teste e o cypress irá visitar a página do site
        cy.get('[data-test="register-button"]').click(); // Aqui o cypress irá clicar no link de cadastro
        cy.get('[data-test="submit-button"]').click(); // Aqui o cypress irá clicar no botão de cadastro
        cy.contains('É necessário informar um endereço de email').should('be.visible'); // Aqui o cypress irá verificar se a mensagem de erro apareceu
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    })
})