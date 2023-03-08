describe("Successful registration", () => {
    it("Visit gallery app", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        
    })
    it("click on register button", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get('a[href="/register"]').click();
    })
    it("Fill register imputs", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get("#first-name").type("Miroslav");
        cy.get("#last-name").type("Nenadovic");
        cy.get("#email").type("miroslavnenadovic@gmail.com");
        cy.get("#password").type("Nekasifra123");
        cy.get("#password-confirmation").type("Nekasifra123");
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
        
    })
    
})
