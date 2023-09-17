import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { getElementLocator } from "../support/web-element-helper";
import { waitFor } from "../support/wait-for-behaviour";
import { checkElement, uncheckElement } from "../support/html-behaviour";

When(
    /^I (check)?(uncheck)? the "([^"]*)" (?:check box|radio button)$/,
    async function(this: ScenarioWorld, checked: boolean, unchecked: boolean, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig
        } = this;

    console.log(`I ${unchecked ? 'un': ''}check the ${elementKey} radio button| check box`)
    
    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor( async () => {
        const result = await page.waitForSelector(elementIdentifier, { 'state': 'visible'})

        
        if(result) {
            if(unchecked){
                await uncheckElement(page, elementIdentifier);
            }else {
                await checkElement(page, elementIdentifier);
            }
        }
        return result;
    })
        
    }
    
)