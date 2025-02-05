Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="input-loginEmail"]').type(email); // Aqui o cypress irá preencher o campo "email"
    cy.get('[data-test="input-loginPassword"]').type(password); // Aqui se preenche o campo "senha"
    cy.get('[data-test="submit-button"]').click(); // Aqui o cypress irá clicar no botão de entrar })
})

Cypress.Commands.add('cadastrar', (name, email, password, confirmPassword) => {
    cy.get('[data-test="input-name"]').type(name); // Aqui o cypress irá preencher o campo "nome"
    cy.get('[data-test="input-email"]').type(email); // Aqui se preenche o campo "email"
    cy.get('[data-test="input-password"]').type(password); // Aqui se preenche o campo "senha"
    cy.get('[data-test="input-confirm-password"]').type(confirmPassword); // Aqui se preenche o campo "confirmar senha"
    cy.get('[data-test="submit-button"]').click(); // Aqui o cypress irá clicar no botão de cadastro })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })