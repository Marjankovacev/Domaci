describe("Successful registration", () => {
    it("Visit gallery app", () => {
        cy.visit("/");
        
    })
    it("click on register button", () => {
        cy.visit("/");
        cy.get('a[href="/register"]').click();
    })
    it("empty firstname NEG ", ()=>{
        cy.visit("/register");
        cy.get("#last-name").type("kovacevic");
        cy.get("#email").type("Kovacevic@gmail.com");
        cy.get("#password").type("Kovacevic1");
        cy.get("#password-confirmation").type("Kovacevic1");
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
        cy.url().should("contain","/register");
    })

    it("Fill register imputs correct", () => {
        cy.visit("/register");
        cy.get("#first-name").type("Miroslav");
        cy.get("#last-name").type("Nenadovic");
        cy.get("#email").type("miroslavnenadovic@gmail.com");
        cy.get("#password").type("Nekasifra123");
        cy.get("#password-confirmation").type("Nekasifra123");
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
        cy.url().should("contain","/logout");
    })
    
})
