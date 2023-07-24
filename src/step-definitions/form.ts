import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { getElementLocator } from "../support/web-element-helper";
import { inputValue, selectOption } from "../support/html-behaviour";
import { waitFor } from "../support/wait-for-behaviour";

Then (
    /^I fill in the "([^"]*)" input with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, inputString: string){
        const {
            screen: { page },
            globalConfig,
         } = this ;
        console.log(`I fill in the ${elementKey} input with ${inputString}`)   
        
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {'state':'visible'});
            if(result){
                await inputValue(page, elementIdentifier, inputString);
            }
            return result;
        } );
    }
)

Then (
    /^I select "([^"]*)" option from dropdown "([^"]*)"$/,
    async function(this: ScenarioWorld, dropdownOption: string, elementKey: ElementKey ){
        const {
            screen: { page },
            globalConfig
        } = this;
        
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {'state': 'visible'});
            if(result){
                await selectOption(page, elementIdentifier, dropdownOption)
            }
            return result;
        })

    }
)