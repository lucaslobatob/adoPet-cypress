// 1. Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;

describe('Visitar a página e ver pets diponíveis', () => {
    it('Visitar a página e ver pets diponíveis', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
    })
});

// 2. Visite a página de principal do AdoPet e teste os botões header;

describe('Visitar a página principal e testar botões header', () => {
    it('Visitar a página principal e testar botões header', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click();
    })
});

// 3. Visite a página de Login da AdoPet

describe('Visitar a página de login', () => {
    it('Visitar a página de login', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })
});

// 4. Visite a página Home da AdoPet

describe('Visitar a página home', () => {
    it('Visitar a página home', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })
});

// 5. Visite a página de /home e clique no botão ‘Falar com o responsável';

describe('Visitar a página e ver pets diponíveis', () => {
    it('Visitar a página e ver pets diponíveis', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })
});