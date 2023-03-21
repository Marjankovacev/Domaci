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
    it("invalid image format",()=>{
        createGallerypage.galleryTitleInput.type(randomFill.randomTitle);
        createGallerypage.galleryDescriptionInput.type(randomFill.randomDescribe);
        createGallerypage.galleryImageInput.type("https://umetnickagalerija.rs/slike/dva-drveta-jesen")
        createGallerypage.submitButton.click();
        createGallerypage.errorMessageimageformat.should("exist")
        .and("be.visible")
        .and("have.text", "Wrong format of image")
    })
    it.only("Create gallery click on cancle button",()=>{
        createGallerypage.galleryTitleInput.type(randomFill.randomTitle);
        createGallerypage.galleryDescriptionInput.type(randomFill.randomDescribe);
        createGallerypage.galleryImageInput.type(randomFill.randomImagefile)
        createGallerypage.cancelButton.click();
        cy.wait(500)
        allGalleriesPage.allGalleriesHeading.should("exist")
        .and("be.visible")
    })
    it(" Test add image button and move up and down,add two image",()=>{
        createGallerypage.galleryTitleInput.type(randomFill.randomTitle);
        createGallerypage.galleryDescriptionInput.type(randomFill.randomDescribe);
        createGallerypage.galleryImageInput.type(randomFill.randomImagefile)
        createGallerypage.addImageButton.click();
        createGallerypage.gallerytwoImageInput.type(randomFill.randomImagefile);
        createGallerypage.galleryDownButton.click();
        createGallerypage.galleryUpButton.click();
        createGallerypage.deleteGalleryButton.click()
        createGallerypage.submitButton.click();
        
    })
    
    it("succesful create galery",()=>{
        createGallerypage.galleryTitleInput.type(randomFill.randomTitle);
        createGallerypage.galleryDescriptionInput.type(randomFill.randomDescribe);
        createGallerypage.galleryImageInput.type(randomFill.randomImagefile)
        createGallerypage.submitButton.click();
    })
});