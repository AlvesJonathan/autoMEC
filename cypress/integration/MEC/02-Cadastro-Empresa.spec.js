/// <reference types="cypress" />

context('Múltiplas Empresas de Cobrança', () => {

    beforeEach(function () {
        cy.visit('/')
        cy.viewport(1366, 768)
        cy.fixture("dados-mec").as('mec').then(() => {})
    })

    it('Cadastar empresa', function () {
        cy.url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/')//Validando Validando se a URL está correta
          //pedir para colocar um identificador no botão que expande o menu lateral
          .get('.jss12 > .jss22 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()//Botão de expandir menu
          //pedir para colocar um identificador nas abas que abrem as opções de menu
          .get('span').contains('Empresas').click()//clicando no menu para apresentar as opções
          .url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/empresas')//Validando se a URL está correta com o click
          //pedir para colocoar um identificador nas opções do menu lateral após expandir a aba
          .get('span').contains('Cadastro de Empresas').click()//Clicando na opção de criar a regra
          .wait(this.mec.break)
          .url().should('eq', 'https://mec-frontend-hom.grupotiradentes.com/empresas/cadastrar')//Validando se a URL está correta com o click
          .wait(this.mec.longbreak)
          .get('input[name="nome-fantasia"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Instituição de cobrança
          .wait(this.mec.break)
          .get('input[name="razao-social"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Razão social
          .wait(this.mec.break)
          .get('input[name="sigla"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Sigla
          .wait(this.mec.break)
          .get('input[name="cnpj"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo CNPJ
          .wait(this.mec.break)
          .get('input[name="url"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo URL
          .wait(this.mec.break)
          .get('input[name="numero-contrato"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Numero de contrato
          .wait(this.mec.break)
          .get('input[name="cep"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo CEP
          .wait(this.mec.break)
          //Pedir para colocar um identificador no select do Estado
          .get('').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Estado
          .wait(this.mec.break)
          .get('input[name="cidade"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Cidade
          .wait(this.mec.break)
          .get('input[name="logradouro"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Logradouro
          .wait(this.mec.break)
          .get('input[name="numero"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Numero
          .wait(this.mec.break)
          .get('input[name="complemento"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Complemento
          .wait(this.mec.break)
          .get('input[name="status"]').check({force: true})//Selecionando o campo de Status
          .wait(this.mec.break)
          .get('input[name="cod-banco"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Cod do Banco
          .wait(this.mec.break)
          //Pedir para colocar um identificador no select do Banco
          .get('').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Banco
          .wait(this.mec.break)
          .get('input[name="codigo-agencia"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Cod da Agencia
          .wait(this.mec.break)
          .get('input[name="conta-corrente"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Conta Corrente
          .wait(this.mec.break)
          .get('input[name="convenio"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Convenio
          .wait(this.mec.break)
          .get('input[name="pix"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo PIX
          .wait(this.mec.break)
          .get('input[name="chave-integracao-sap"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Chave integração
          .wait(this.mec.break)
          .get('input[name="contato"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Contato
          .wait(this.mec.break)
          .get('input[name="e-mail"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo E-MAIL
          .wait(this.mec.break)
          .get('input[name="telefone"]').type('{downarrow}{enter}', {force: true})//inserindo valor no campo Telefone
          .wait(this.mec.break)
          //Pedir para colocar um identificador no botão de Salvar
          .get('').click()//Click no botão de salvar
          .wait(this.mec.break)
          //Pedir para colocar um identificador no botão de Cancelar
          .get('').click()//Click no botão de Cancelar
          .wait(this.mec.break)
          .get('').should()//Validar que o cadastro foi realizado com sucesso
    });

})