import { Given } from "@cucumber/cucumber";
import { PageId } from "../env/global";
import { navigateToPage } from '../support/navigation-behaviour'
import { ScenarioWorld } from "./setup/world";

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld ,pageId: PageId){
        const {
            screen: {page},
            globalConfig,
            globalVariables,
        } = this;
        
        console.log(`I am on the ${pageId} page`);

        globalVariables.currentScreen = pageId;
        
        await navigateToPage(page, pageId, globalConfig)
    }
)