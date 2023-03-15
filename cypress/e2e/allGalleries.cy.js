/// <reference types="Cypress" />
import { allGalleriesPage } from "../pageObjects/allGalleries";
import { loginPage } from "../pageObjects/loginPage";

describe("all gallery page test", () => {
    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("nedovic.filip@gmail.com","Test12345");
        cy.url().should("not.include","/login");

    })
    it("all gallery successully loaded",() => {
        allGalleriesPage.allGalleriesHeading
        .should("be.visible")
        .and("have.text","All Galleries")

        allGalleriesPage.galleriesGrid.children().should("have.length",10);
        allGalleriesPage.galleriesGrid.children().each((el) => {
            expect(el).to.exist;
        })
    })
    it("displays 10 galleries when Load More button is clicked", () => {
        allGalleriesPage.loadMoreButton.click();
        allGalleriesPage.galleriesGrid.children().should("have.length", 10);
    });
    it("search fild filter", () => {
        const searchTerm = "voluptates consequuntur maiores";
        allGalleriesPage.search(searchTerm);
        allGalleriesPage.galleriesGrid.children().each((gallery) => {
         expect(searchTerm);
        });
      });
      it("opens the first gallery ", () => {
        allGalleriesPage.singleGallery.click();
        allGalleriesPage.singleGalleryHeading.should('exist');
        allGalleriesPage.singleGalleyAuthor.should('exist');
        allGalleriesPage.singleGalleryDate.should('exist');
        allGalleriesPage.singleGalleryImage.should('exist');
      });
})