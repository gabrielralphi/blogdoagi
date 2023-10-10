/// <reference types="cypress" />

Given(/^que um usuário entre no blog do Agi$/, () => {
	cy.visit('/');
});

When(/^ele clica no botão da Lupa$/, () => {
	cy.get('#site-branding').should('be.visible')
    cy.get('#search-open').click()
});

When(/^não preenche nada no campo de pesquisa$/, () => {
	cy.get('.desktop-search form input[type="submit"]').should('be.visible')
});

When(/^clica no botão PESQUISAR$/, () => {
	cy.get('.desktop-search form input[type="submit"]').should('be.visible').click()
});

Then(/^exibe em uma nova página o resultado da busca$/, () => {
	cy.get('.archive-title').should('be.visible').contains('Resultados da busca por:')
});

///////////////////////////////////////////////////////////////////////

Given(/^que um usuário entre no blog do Agi$/, () => {
	cy.visit('/');
});

When(/^ele clica no botão da Lupa$/, () => {
    cy.get('#site-branding').should('be.visible')
    cy.get('#search-open').click()
});

When(/^preenche "([^"]*)" no campo de pesquisa$/, (teste) => {
	cy.get('.desktop-search form .search-field').should('be.visible').type(teste)
    	
});

When(/^clica no botão PESQUISAR$/, () => {
	cy.get('.desktop-search form input[type="submit"]').should('be.visible').click()
});

Then(/^exibe em uma nova página o resultado da busca$/, () => {
	cy.get('.archive-title').should('be.visible').contains('Resultados da busca por:')
});

Then(/^acessa um artigo com a "([^"]*)"$/, (teste) => {
	cy.get('#primary article').should('be.visible').contains('teste')
	cy.get('#primary article .entry-main').first().click()
	cy.get('.post-template-default', { timeout: 90000 }).should('be.visible').contains('teste')
});
