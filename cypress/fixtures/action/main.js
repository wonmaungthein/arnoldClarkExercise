import mainLandingPage from "../landing/main-landing-page";

class main {
    verifyLanding = () => {
        mainLandingPage.verifyLandingPage()
    }

    acceptCookies = () => {
        mainLandingPage.cookies()
    }

    filterPrice = () => {
        mainLandingPage.priceFilter()
    }

    verifyFilteredItems = () => {
        mainLandingPage.filteredItem()
    }
}

export default new main();