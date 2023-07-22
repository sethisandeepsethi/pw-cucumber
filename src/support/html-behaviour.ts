import { Page } from "playwright";
import { ElementLocator } from "../env/global";

export const clickElement = async (page: Page, elementLocator: ElementLocator): Promise<void> => {
    await page.click(elementLocator);
    //await page.locator(elementLocator).click(); //TODO test it
}