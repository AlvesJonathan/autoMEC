/// <reference types="cypress" />

context('Múltiplas Empresas de Cobrança', () => {

    beforeEach(function () {
        cy.visit('/')
        cy.viewport(1366, 768)
        cy.fixture("dados-mec").as('mec').then(() => {})
    })

    it('Listagem de regras', function () {
        cy.url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/')//Validando Validando se a URL está correta
            //pedir para colocar um identificador no botão que expande o menu lateral
            .get('.jss12 > .jss22 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()//Botão de expandir menu
            //pedir para colocar um identificador nas abas que abrem as opções de menu
            .get('span').contains('Regras').click()//clicando no menu para apresentar as opções
            .url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/regras')//Validando se a URL está correta com o click
            //pedir para colocoar um identificador nas opções do menu lateral após expandir a aba
            .get('span').contains('Listagem de Regras').click()//Clicando na opção de criar a regra
            .wait(this.mec.break)
            .url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/regras')//Validando se a URL está correta com o click
            .wait(this.mec.longbreak)
            .get('input[name="instituicao"]').type('unit{enter}', {force: true})//inserindo valor no campo Instituição de ensino
            .wait(this.mec.break)
            .get('input[name="modalidade"]').type('Graduação Presencial{downarrow}{enter}', {force: true})//Inserindo valor no campo modalidade
            .wait(this.mec.break)
            .get('input[name="tipoTitulo"]').type('Parcela do Curso do Aluno{downarrow}{enter}', {force: true})//Inserindo valor no campo Tipo de Titulo
            .wait(this.mec.break)
            .get('input[name="situacao"]').type('Matriculado{downarrow}{enter}', {force: true})//Inserindo valor no campo situação do Aluno
            .wait(this.mec.break)
            .get('input[name="curso"]').type('Direito Noturno{downarrow}{enter}', {force: true})//Inserindo valor no campo de curso
            .wait(this.mec.break)
            //Pedir para colocar identificador no campo de Data de inadimplencia Inicial
            .get('').type('01012021{enter}', {force: true})//Inserindo valor no campo Data de inadimplencia Inicial
            .wait(this.mec.break)
            //Pedir para colocar identificador no campo de Data Inadimplencia Final
            .get('').type('09022021{enter}', {force: true})//Inserindo valor no campo Data de inadimplencia Final
            .wait(this.mec.break)
            .get('input[name="status"]').check()//Selecioando a opção do campo Status
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