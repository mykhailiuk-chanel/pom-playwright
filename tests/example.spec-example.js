// @ts-check
const { test, expect } = require('@playwright/test');
const userName = 'sampleUser',
	password = 'pwd';

test('[Positive case] Verify Successful Login to the system.', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  //type to username
  await page.locator('input[name="UserName"]').type(userName);
  //type to pwd
  await page.locator('input[name="Password"]').type(password);
  //Click on 'Login' btn
  await page.locator('#login').click();
  //ASSERT
  await expect(page.locator('#loginstatus')).toHaveText(`Welcome, ${userName}!`);
});
