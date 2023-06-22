import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
Then(
    /^the "([^"]*)" should contains text "(.*)"$/,
    async function (elementKey: string, expectedText: string) {
        const {
            screen: {page},
        } = this;

        console.log(`the ${elementKey} should contains text ${expectedText}`);
        const content = await page.textContent("[data-id='contacts']");
        expect(content).toBe(expectedText)

    }
)
