describe("Youtube search", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
  });
  it("visits the homepage", () => {
    cy.visit("https://youtube.com");
  });
  it("fill up the search field", () => {
    cy.get("input[type='text']").type("Unitec{enter}");
  });
  it("visits video", () => {
    cy.get("#video-title.ytd-video-renderer").first().click();
  });
  it("pauses video", () => {
    cy.get("button.ytp-play-button").click();
  });
});
