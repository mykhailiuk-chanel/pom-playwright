const { test } = require('./fixtures/basePage');

const NAME_PC = "My-new-computer-1";

test('[e2e test] Successful PC creation', async ({ computersPage, addComputersPage }) => {
    await computersPage.visit();
    await computersPage.openAddComputer();

    await addComputersPage.createPc(NAME_PC, "1981-10-10", "1981-11-11", "Netronics");
    // Verify
    await computersPage.createVerififcation(NAME_PC);
});