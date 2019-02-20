describe('app', function () {
   it('Purchasing Mac book Pro', function () {

// Visiting mac of all trades
    cy.visit('https://www.macofalltrades.com/')

     it('cy.title() - get the title', () => {
        cy.title().should('include', 'mac of all trades')
      })

// Clicking Laptops
   cy.get('.header > .logo > .header-main-container > .header-col2 > .navpages-container > .navpages > .navpages-list >:nth-child(1) > .navpages-nodropdown').click()

// clicking 15 inch MacBook pro
   cy.get('.laptop-btn-div-holder > [href="/shop/apple-laptops/refurbished-macbook-pro/macbook-pro-15-inch/"]').click()

// Click Show All
   cy.get('.show-all-link').click()

// Clicking 2014 because it has more product
   cy.get('.navList > :nth-child(7) > .c-navList-action').click()

// Clicking MacBook pro 15 inch
   cy.get(':nth-child(1) > .c-card > .c-card-figure > .card-image-wrapper > .c-card-image').click()

// Clicking Power adepter Extension
   cy.get('li[data-product-attribute-value="540"] > .productOptions-list-item-content > .form-label').click()

// Clicking 2 year warrenty
// cy.get('li[data-product-attribute-value="540"] > .productOptions-list-item-content > .form-label').click()

// Clicking Add to Cart
   cy.get('.pdp-sticky-columns > .pdp-pay-bar > .add-to-cart-button-pdp').click()

// Proceed to Checkout
   cy.get('[href="/checkout.php"]').click()

// Continue As Guest
   cy.get('[data-test=customer-continue-as-guest-button]').click()

// Validating Email address error showing up without inserting email address
    it('Email address is required',()=> {
    cy.get('[data-test=customer-continue-as-guest-button]').contains('Continue AS Guest').click()
    cy.get('.form-inlineMessage')
      .should('contain','Email address is required')
      })

// Entering Email address to continue as a guest
    cy.get('#email').type('mohammed@yopmail.com')
    cy.get('[data-test=customer-continue-as-guest-button]').click()

//clicking Continue
    cy.get('#checkout-shipping-continue').click()

// Validate Shipping address error without entering information
    it('First name is required',()=> {
    cy.get('#checkout-shipping-continue').contains('CONTINUE').click()
    cy.get('.[data-test=firstNameInput-errors] > .form-field-error > .form-inlineMessage > span')
      .should('contain','First name required')
      })

// Selecting Drop down

// Entering First Name
    cy.get('[data-test=firstNameInput-text]').type ('Mohammed')

// Entering Last Name
    cy.get('[data-test=lastNameInput-text]').type ('Mohammed')

// Entering Address
    cy.get('[data-test=addressLine1Input-text]').type('200 Park Avenue South, 13th Floor')

//Entering City
    cy.get('[data-test=cityInput-text]').type('New York')
// Entering Zip Code
    cy.get('[data-test=postCodeInput-text]').type('10003')
// Entering Pone #
    cy.get('[data-test=phoneInput-text]').type('0073345960')

//clicking Continue without entering Country
    cy.get('#checkout-shipping-continue').click()

// Validate Shipping address error without entering country
    it('Country is required',()=> {
    cy.get('#checkout-shipping-continue').contains('CONTINUE').click()
    cy.get('.[data-test=countryCodeInput-errors] > .form-field-error > .form-inlineMessage > span > .form-field-error > .form-inlineMessage > span')
      .should('contain','Country is required')
      })







})
})