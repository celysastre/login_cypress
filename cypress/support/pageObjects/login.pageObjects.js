const elem = require("../elements/login.elements").ELEMENTS;
const elem1 = require("../elements/login.elements").ITENS;

class login {
  inputLoginEmail(dados) {
    cy.get(elem.inputEmail).type(dados);
  }

  inputLoginPassword(dados) {
    cy.get(elem.inputpassword).type(dados);
  }

  ButtonLogar() {
    cy.get(elem1.ButtonEntrar).click();
  }

  pMensagemErro(texto) {
    cy.get(elem1.pMessage).should("be.visible").contains(texto);
  }
}
export default new login();
