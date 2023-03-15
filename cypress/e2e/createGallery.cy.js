/// <reference types="Cypress" />
import { loginPage } from "../pageObjects/loginPage";
import { allGalleriesPage } from "../pageObjects/allGalleries";
import { createGallerypage } from "../pageObjects/createGallery";
import { faker } from "@faker-js/faker";



describe ("Create gallery tests", () => {
    const randomFill = {
        randomTitle: faker.random.words(),
        randomDescribe: faker.random.words(),
        randomImagefile: faker.image.image() + ".jpg"}

    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("nedovic.filip@gmail.com","Test12345");
        cy.url().should("not.include","/login");
        allGalleriesPage.createGallerybutton.click();
    })
    
    
    it("succesful create galery",()=>{
        createGallerypage.galleryTitleInput.type(randomFill.randomTitle);
       
        createGallerypage.galleryDescriptionInput.type(randomFill.randomDescribe);
       
        createGallerypage.galleryImageInput.type(randomFill.randomImagefile)
        createGallerypage.submitButton.click();
    })
});