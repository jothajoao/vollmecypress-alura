//import { fakerPT_BR as faker } from '@faker-js/faker';


describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    });   
    it('Clicar no link de cadastrar e ir para tela de cadastro', () => {
        cy.get('[href="/cadastro"]').click();
    });
});

