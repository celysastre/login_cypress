import login from "../support/pageObjects/login.pageObjects";

describe("Entrar no Site", () => {
  context("Login", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Deve logar com as credenciais corretas", () => {
      login.inputLoginEmail("admin@admin.com.br");
      login.inputLoginPassword("123456");
      //cy.wait(500)

      login.ButtonLogar();
      cy.url().should("include", "/dashboard.html");
      cy.log("Login realizado com sucessso");
    });

    it("Credenciais incorretas, não deve logar no sistema", () => {
      login.inputLoginEmail("cely@cely.com.br");
      login.inputLoginPassword("@123456");

      login.ButtonLogar();
      login.pMensagemErro("Erro: Usuário ou senha incorretos.");

      cy.log("Usuário ou senha incorretos");
    });
  });
});
