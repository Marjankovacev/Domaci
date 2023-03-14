class AllGalleryPage {
    get pageTitle() {
      return cy.get('h1');
    }
  
    get searchInput() {
      return cy.get('input[type="text"]');
    }
  
    get searchButton() {
      return cy.get('button[type="submit"]');
    }
  
    get addImageButton() {
      return cy.get('.add-image');
    }
  
    get images() {
      return cy.get('.gallery-image');
    }
  
    searchForImage(searchTerm) {
      this.searchInput.type(searchTerm);
      this.searchButton.click();
    }
  
    addImage(imageUrl) {
      this.addImageButton.click();
      cy.get('.modal-body input').type(imageUrl);
      cy.get('.modal-footer button').click();
    }
  
    openImage(index) {
      this.images.eq(index).click();
    }
  }
  
  export const allGalleryPage = new AllGalleryPage();
  