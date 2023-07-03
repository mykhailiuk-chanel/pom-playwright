const { test } = require('@playwright/test');
import ComputersPage from "./support/pages/computers.page";
import AddComputersPage from "./support/section/addComputer.section";

const NAME_PC = "My-new-computer-1";

test('[e2e test] Successful PC creation', async ({ page }) => {
    const computersPage = new ComputersPage(page);
    const addComputersPage = new AddComputersPage(page);

    await computersPage.visit();
    await computersPage.openAddComputer();

    await addComputersPage.createPc(NAME_PC, "1981-10-10", "1981-11-11", "Netronics");
    // Verify
    await computersPage.createVerififcation(NAME_PC);
});