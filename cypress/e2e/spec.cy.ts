describe("verify all selections work as expected", () => {
  it("select-all checkbox should be in an unselected state if no items are selected.", () => {
    cy.visit("http://localhost:3000");

    cy.get("#all-rows")
      .invoke("prop", "checked")
      .should("eq", false);

    cy.get("#custom_select_table tbody tr").each($el => {
      cy.wrap($el).within(() => {
        cy.get("td")
          .eq(0)
          .within(() => {
            cy.get("input").should("not.be.checked");
          });
      });
    });

    cy.get(".table_toolbar_wrapper")
      .contains("None Selected")
      .should("exist");

    cy.get(".table_button").should("be.disabled");
  });

  it("select-all checkbox should be in an selected state if all items are selected.", () => {
    cy.visit("http://localhost:3000");

    cy.get("#all-rows").check();
    cy.get("#all-rows")
      .invoke("prop", "checked")
      .should("eq", true);

    cy.get("#custom_select_table tbody tr").each($el => {
      cy.wrap($el).within(() => {
        cy.get("td")
          .eq(0)
          .within(() => {
            cy.get("input").should("be.checked");
          });
      });
    });

    cy.get(".table_toolbar_wrapper")
      .contains("5 Selected")
      .should("exist");

    cy.get(".table_button").should("be.enabled");
  });

  it("select-all checkbox should be in an indeterminate state if some but not all items are selected.", () => {
    cy.visit("http://localhost:3000");

    cy.get("#table-row-1").check();
    cy.get("#table-row-2").check();

    cy.get("#all-rows")
      .invoke("prop", "indeterminate")
      .should("eq", true);

    cy.get(".table_toolbar_wrapper")
      .contains("2 Selected")
      .should("exist");

    cy.get(".table_button").should("be.enabled");
  });

  it("display alert when clicking download", () => {
    cy.visit("http://localhost:3000");

    cy.get("#all-rows").check();
    cy.get(".table_button")
      .should("be.enabled")
      .click();
    cy.get(".dialog_wrapper")
      .should("be.visible")
      .contains("Device : Targaryen")
      .should("exist");

    cy.get(".dialog_body").should("not.have.text", "Stark");
    cy.get(".dialog_body").should("not.have.text", "Martell");

    cy.get(".dialog_body > .table_button").click();
    cy.get(".dialog_wrapper").should("not.exist");
  });
});
