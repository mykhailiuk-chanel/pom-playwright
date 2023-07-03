const base = require('@playwright/test');
import ComputersPage from "../support/pages/computers.page";
import AddComputersPage from "../support/section/addComputer.section";

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
    computersPage: async ({ page }, use) => {
        await use(new ComputersPage(page));
    },

    addComputersPage: async ({ page }, use) => {
        await use(new AddComputersPage(page));
    },
});
exports.expect = base.expect;