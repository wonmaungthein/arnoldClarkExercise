/// <reference types="cypress" />
import main from '../../fixtures/action/main';

context('Homepage Search – filter on price', () => {
    beforeEach(() => {
        cy.viewport(320, 480)
    })

    it('Home Page – Mobile Browser Given: I am on arnoldclark.com homepage', () => {
        cy.visit('/')
        main.verifyLanding()
        main.acceptCookies()
    })

    it('When: I add a price filter and click on “Search”', () => {
       main.filterPrice()
    })

    it('Then: I am shown a list of vehicles for sale filtered by price range', () => {
        main.verifyFilteredItems()
    })
})