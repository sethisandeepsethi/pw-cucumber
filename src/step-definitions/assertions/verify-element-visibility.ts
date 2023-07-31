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
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should contains text ${expectedText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async() => {
            const elementText = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedText);
        });
    }
)

Then(
    /^the "([^"]*)" should equals text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, expectedText: string) {
        const {
            screen: {page},
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should contains text ${expectedText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async() => {
            const elementText = await page.textContent(elementIdentifier);
            return elementText === expectedText;
        });
    }
)

Then(
    /^the "([^"]*)" should( not)? be displayed$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean){
        const {
            screen: {page},
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should ${negate ? 'not' : ''} be displayed`);
      
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const isElementVisible = ( await page.$(elementIdentifier) ) != null; 
            return isElementVisible === !negate ;
        });
    }
)