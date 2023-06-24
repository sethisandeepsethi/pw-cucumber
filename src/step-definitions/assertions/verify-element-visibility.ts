import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world';

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
        console.log('elementIdentifier: ', elementIdentifier)

        const content = await page.textContent(elementIdentifier);
        console.log('content: ', content)

        expect(content).toBe(expectedText)

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
        //const locator = page.locator(".testing-talks-logo")

        const locator = page.locator(elementIdentifier);

        await expect(locator).toBeVisible();

    }
)