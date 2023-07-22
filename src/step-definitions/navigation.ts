import { Given, Then } from "@cucumber/cucumber";
import { GlobalConfig, PageId } from "../env/global";
import { navigateToPage, currentPathMatchesPageId } from '../support/navigation-behaviour'
import { ScenarioWorld } from "./setup/world";
import { waitFor } from "../support/wait-for-behaviour";

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld ,pageId: PageId){
        const {
            screen: {page},
            globalConfig,
            //globalVariables,
        } = this;
        
        console.log(`I am on the ${pageId} page`);

        //globalVariables.currentScreen = pageId;
        
        await navigateToPage(page, pageId, globalConfig)

        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
    }
)

Then(
    /^I am navigated to the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const { screen : { page }, globalConfig: GlobalConfig} = this;
        console.log(`I am navigated to the ${pageId} page`)
        await waitFor(() => currentPathMatchesPageId(page, pageId, this.globalConfig));
    }
)
