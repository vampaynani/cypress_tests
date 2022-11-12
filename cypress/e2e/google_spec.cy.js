describe("Google search", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
  });
  it("visits the homepage", () => {
    cy.visit("https://google.com");
  });
  it("fill up the search field", () => {
    cy.get("input[type='text']").type("Unitec{enter}");
  });
  it("visits website", () => {
    cy.get("#search a").first().click();
  });
});
