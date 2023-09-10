import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "../setup/world";
import { ElementKey } from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { waitFor } from "../../support/wait-for-behaviour";
import { getElementValue } from "../../support/html-behaviour";

Then(
    /^the "([^"]*)" should( not)? contain the value "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedValue: string){
        const {
            screen: {page},
            globalConfig
        } = this;
        console.log(`the ${elementKey} should ${negate ? 'not' : '' } contain the value ${expectedValue}`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {'state': 'visible'});
            const actualValue = await getElementValue(page, elementIdentifier);
            
            return actualValue?.includes(expectedValue) === !negate;
        })
    }
)

Then(
    /^the "([^"]*)" should( not)? equal the value "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedValue: string){
        const {
            screen: {page},
            globalConfig
        } = this;
        console.log(`the ${elementKey} should ${negate ? 'not' : '' } contain the value ${expectedValue}`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {'state': 'visible'});
            const actualValue = await getElementValue(page, elementIdentifier);
            
            return (actualValue === expectedValue) === !negate;
        })
    }
)