import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { getElementLocator } from "../support/web-element-helper";
import { waitFor } from "../support/wait-for-behaviour";
import { clickElement } from "../support/html-behaviour";

Given(
    /^I click the "([^"]*)" (?:button|link|image|icon|element)$/,
    async function (this: ScenarioWorld, elementKey: ElementKey){
        const { screen: { page }, globalConfig } = this;

        console.log(`I click the ${elementKey} (?:button|link|image|icon|element)`);

        const elementLocator = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const result = await page.waitForSelector(elementLocator, { state:'visible'});
            if(result){
                await clickElement(page, elementLocator);
            }
            return result;
        });
    
    }
)