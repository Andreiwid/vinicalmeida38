describe("Pyramid Marketplace Purchase Flows", () => {
  it("Buy a product from home directly", () => {
    cy.visit("/");
    cy.get(":nth-child(1) > .product-container").click();
    cy.url().should("include", "/product-details");
    cy.get('[href="/address"] > .button-pyramid').click();
    cy.checkUrl("/address");
    cy.fillAddressForm();
    cy.get(".button-pyramid").click();
    cy.checkUrl("/payment");
    cy.get("#creditCard").click();
    cy.get(".button-pyramid").click();
    cy.checkUrl("/success");
    cy.get(".button-pyramid").click();
    cy.checkUrl("/");
  });
  it("Buy a product adding in the shopping cart", () => {
    cy.visit("/");
    cy.get(":nth-child(1) > .product-container").click();
    cy.url().should("include", "/product-details");
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.checkUrl("/shopping-cart");
    cy.get(".button-pyramid").click();
    cy.checkUrl("/address");
    cy.fillAddressForm();
    cy.get(".button-pyramid").click();
    cy.checkUrl("/payment");
    cy.get("#creditCard").click();
    cy.get(".button-pyramid").click();
    cy.checkUrl("/success");
    cy.get(".button-pyramid").click();
    cy.checkUrl("/");
  });
  it("Buy a searched product", () => {
    cy.visit("/");
    cy.get(".header-pyramid__search-bar").type("Mouse Multilaser");
    cy.get(".header-pyramid__search-btn").click();
    cy.checkUrl("/search?q=Mouse%20Multilaser");
    cy.get(":nth-child(1) > .product-container").click();
    cy.wait(400);
    cy.url().should("include", "/product-details");
    cy.get('[href="/address"] > .button-pyramid').click();
    cy.checkUrl("/address");
    cy.fillAddressForm();
    cy.get(".button-pyramid").click();
    cy.checkUrl("/payment");
    cy.get("#creditCard").click();
    cy.get(".button-pyramid").click();
    cy.checkUrl("/success");
    cy.get(".button-pyramid").click();
    cy.checkUrl("/");
  });
});