import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { getElementLocator } from "../support/web-element-helper";
import { waitFor } from "../support/wait-for-behaviour";
import { checkElement } from "../support/html-behaviour";

When(
    /^I check the "([^"]*)" radio button$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig
        } = this;

    console.log(`I check the ${elementKey} radio button`)
    
    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor( async () => {
        const result = await page.waitForSelector(elementIdentifier, { 'state': 'visible'})
        if(result) {
            await checkElement(page, elementIdentifier);
        }
        return result;
    })
        
    }
    
)