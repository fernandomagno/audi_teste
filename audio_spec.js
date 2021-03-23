describe('Audi Teste', () => {
    it('Acessar menus', () => {
        cy.visit('https://auditeste.com.br/');

        //fechar pop up 
        cy.get('.sgpb-popup-close-button-1').click();

        //verificar a página inicial
        cy.get('.navbar-header > .navbar-brand > img').should('be.visible');

        //acessar menu 
        cy.get('#menu-item-133 > a').click();

        //verificar menu com sucesso
        cy.get(':nth-child(3) > .vc_container > :nth-child(1) > .vc_column-inner > div.wpb_wrapper > .wpb_single_image > .wpb_wrapper > .vc_single_image-wrapper > .vc_single_image-img').should('be.visible');

        //acessar menu 
        cy.get('#menu-item-135 > a').click();

        //verificar menu com sucesso
        cy.get('.nex-submit').should('be.visible');

        //acessar menu 
        cy.get('#menu-item-1477 > a').click();

        //verificar menu com sucesso
        cy.get(':nth-child(1) > .bloco-post > .img-post').should('be.visible');

        //acessar menu 
        cy.get('#menu-item-130 > a').click();
        
        //verificar menu com sucesso
        cy.get('.nex-submit').should('be.visible');
        
    });
});