import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "../setup/world";
import { ElementKey } from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { waitFor } from "../../support/wait-for-behaviour";

Then(
    /^the "([^"]*)" (?:check box|radio button) should( not)? be checked$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page },
            globalConfig
        } = this;
        console.log(`the ${elementKey} check box | radio button should ${negate ? 'not' : '' } be checked`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => { 
                const isElementChecked = await page.isChecked(elementIdentifier)
                return isElementChecked === !negate;
            }
        );
    }
)