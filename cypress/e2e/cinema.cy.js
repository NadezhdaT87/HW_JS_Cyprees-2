import tests from "../fixtures/seat.json";

describe("go to cinema", () => {

  beforeEach (() => {
    cy.visit("/");
  });

  it("home page display", () => {
   
    cy.get(".page-nav a").should("have.length", 7);
  });

  tests.forEach((test) => {
    
    it(test.name, () => {
     
      cy.get("a:nth-child(3)").click();
      cy.get(".movie").first().contains("13:00").click();
      test.data.forEach((seat) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
      });
      cy.get(".acceptin-button").click();
      cy.contains("1/2, 1/3, 1/4, 1/5").should("be.visible");
    });
  });
 
});

describe.only("go to cinema Admin", () => {

  beforeEach (() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });
  
  it("should successfulle login", () => {    
   
    cy.login("qamid@qamid.ru", "qamid");
    cy.contains("Управление залами").should("be.visible").true;
  });

  it("should unsuccessfulle login", () => {
   
    cy.login("test@test.com", "test");
    cy.contains("Ошибка авторизации!").should("be.visible").true;
  });
 
});

