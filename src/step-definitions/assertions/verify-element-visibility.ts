import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper'

Then(
    /^the "([^"]*)" should contains text "(.*)"$/,
    async function (elementKey: string, expectedText: string) {
        const {
            screen: {page},
        } = this;

        console.log(`the ${elementKey} should contains text ${expectedText}`);
        const content = await page.textContent("[data-id='contacts']");
        expect(content).toBe(expectedText)

    }
)

Then(
    /^the "([^"]*)" should be displayed$/,
    async function (elementKey: ElementKey){
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should be displayed`);
      
        const elementIdentifier = getElementLocator(elementKey, globalVariables, globalConfig);
        //const locator = page.locator(".testing-talks-logo")

        const locator = page.locator(elementIdentifier);

        await expect(locator).toBeVisible();

    }
)