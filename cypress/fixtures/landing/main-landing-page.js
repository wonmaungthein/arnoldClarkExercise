import data from '../data.json';
import {elements} from '../../dom/elements';

class mainLandingPage {
    verifyLandingPage = () => {
        cy.log('Verify Landing Page')
        cy.get(elements.mainPage).should('be.visible')
        cy.get(elements.mainPageHeader).should('be.visible')
    }

    cookies = () => {
        cy.log('Accept cookies')
        cy.get(elements.acceptBtn).should('be.visible')
        cy.get(elements.acceptBtn).click()
    }

    priceFilter = () => {
        cy.log('Filter price max 100')
        cy.get(elements.priceFilter).scrollIntoView()
        cy.get(elements.priceFilter).should('be.visible').click()
        cy.get(elements.maxPrice).should('be.visible').select(data.priceValue)
        cy.get(elements.searchBtn).should('be.visible').click()
    }

    filteredItem = () => {
        cy.log('Verify filtered items')
        cy.url().should('include', data.urlValue)
        cy.get(elements.filteredPrice).should('have.text',data.filteredPrice)
        cy.get(elements.filterResultComponent).should('be.visible')
    }
}


export default new mainLandingPage();