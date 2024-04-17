export class Home {
    constructor(page) {
        this.page = page
        this.selectcountryBtn = 'a.us-link'
        this.menuBtn = 'button.hamburger-menu-button'
    }
    async navigate() {
        await this.page.goto("/")
    }
    async selectCountry() {
        await this.page.click(this.selectcountryBtn)
    }  
    async clickOnMenu() {
        await this.page.waitForSelector(this.menuBtn, { state: 'attached'})
        await this.page.click(this.menuBtn, { force: true, multiple:true, timeout: 5000  })
    }
    async selectCategory() {
        await this.page.click('div > ul > li > button[data-id="node-474"]', { state: 'attached', timeout: 5000 })
    }
}