import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world';
import { waitFor } from '../../support/wait-for-behaviour';

Then(
    /^the "([^"]*)" should contains text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, expectedText: string) {
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should contains text ${expectedText}`);

        const elementIdentifier = getElementLocator(elementKey, globalVariables, globalConfig);

        await waitFor( async() => {
            const elementText = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedText);
        });
        //const content = await page.textContent(elementIdentifier);
        //expect(content).toBe(expectedText)

    }
)

Then(
    /^the "([^"]*)" should be displayed$/,
    async function (this: ScenarioWorld, elementKey: ElementKey){
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should be displayed`);
      
        const elementIdentifier = getElementLocator(elementKey, globalVariables, globalConfig);

        await waitFor( async () => {
            const isElementVisible = ( await page.$(elementIdentifier) ) != null; 
            return isElementVisible;
        });
        // const locator = page.locator(elementIdentifier);
        // await expect(locator).toBeVisible();

    }
)