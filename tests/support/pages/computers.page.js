const { expect } = require('@playwright/test');

export default class ComputersPage {
    constructor(page) {
        this.page = page
    }

    // Locators
    addPcBtn = () => this.page.getByText("Add a new computer");
    successfullyMsg = (name) => this.page.getByText(`Done ! Computer ${name} has been created`)

    // Actions
    visit = async () => await this.page.goto("https://computer-database.gatling.io/computers");

    openAddComputer = async () => {
        await this.addPcBtn().click();
    }

    createVerififcation = async (name) => { 
        await expect(
                this.successfullyMsg(name)
            )
            .toBeVisible();
    }
}