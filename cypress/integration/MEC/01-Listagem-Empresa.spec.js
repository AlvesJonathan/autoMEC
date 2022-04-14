/// <reference types="cypress" />

context('Múltiplas Empresas de Cobrança', () => {

    beforeEach(function () {
        cy.visit('/')
        cy.viewport(1366, 768)
        cy.fixture("dados-mec").as('mec').then(() => {})
    })

    it('Listagem de Empresas', function () {
        cy.url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/')//Validando Validando se a URL está correta
          //pedir para colocar um identificador no botão que expande o menu lateral
          .get('.jss12 > .jss22 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()//Botão de expandir menu
          //pedir para colocar um identificador nas abas que abrem as opções de menu
          .get('span').contains('Empresas').click()//clicando no menu para apresentar as opções
          .url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/empresas')//Validando se a URL está correta com o click
          //pedir para colocoar um identificador nas opções do menu lateral após expandir a aba
          .get('span').contains('Listagem de Empresas').click()//Clicando na opção de criar a regra
          .wait(this.mec.break)
          .url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/empresas')//Validando se a URL está correta com o click
          .wait(this.mec.longbreak)
          .get('input[name="nomeFantasia"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Instituição Cobrança
          .wait(this.mec.break)
          .get('input[name="cnpj"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo CNPJ
          .wait(this.mec.break)
          .get('input[name="numeroContrato"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Numero de Contrato
          .wait(this.mec.break)
          .get('input[name="aditivoContrato"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Aditivo de Contrato
          .wait(this.mec.break)
          .get('input[name="contato"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Contato
          .wait(this.mec.break)
          //Pedir para colocar o identificador no select do estado
          .get('').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Contato
          .wait(this.mec.break)
          .get('input[name="cidade"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Cidade
          .wait(this.mec.break)
          //Pedir para colocar identificador no botão Filtrar
          .get('').click()//Clicando no botão Filtrar
          .wait(this.mec.break)
          //Pedir para colocar idenfiticador no botão Limpar
          .get('').click()//Clicando no botão Limpar
          .wait(this.mec.break)
          .get('').should()//Validar que a filtragem foi realizada
    });

})