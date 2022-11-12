describe("Github login", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
  });
  it("visits the homepage", () => {
    cy.visit("https://github.com");
  });
  it("clicks the signin link", () => {
    cy.get("[href='/login']").click();
    cy.url().should("include", "/login");
  });
  it("fill up the fields", () => {
    cy.get("#login_field").type("vampaynani");

    cy.get("#password").type(`4EC1@Github{enter}`);
  });
});
