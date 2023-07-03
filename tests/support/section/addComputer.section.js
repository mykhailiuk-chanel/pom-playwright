export default class AddComputersPage {
    constructor(page) {
        this.page = page;        
    }
    // Locators
    inputName = () => this.page.locator("#name");
    inputIntroduced = () => this.page.locator("#introduced");
    inputDiscontinued = () => this.page.locator("#discontinued");
    selectCompany = () => this.page.locator("#company");

    createPcBtn = () => this.page.getByText("Create this computer");

    // Actions
    clickCreateComputer = async () => {
        await this.createPcBtn().click();
    }

    fillCreatePcForm = async (name, introduced, discontinued, company) => {
        await this.inputName().fill(name);
        await this.inputIntroduced().fill(introduced);
        await this.inputDiscontinued().fill(discontinued);

        await this.selectCompany().selectOption({ label: company });
    }

    createPc = async (name, introduced, discontinued, company) => {
        await this.fillCreatePcForm(name, introduced, discontinued, company)
        await this.clickCreateComputer();
    }
}