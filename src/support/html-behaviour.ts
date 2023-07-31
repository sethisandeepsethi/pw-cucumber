import { Page } from "playwright";
import { ElementLocator } from "../env/global";

export const clickElement = async (page: Page, elementLocator: ElementLocator): Promise<void> => {
    await page.click(elementLocator);
    //await page.locator(elementLocator).click(); //TODO test it
}

export const inputValue = async (page:Page, elementIdentifier: ElementLocator, inputString: string): Promise<void> => {
    await page.focus(elementIdentifier);
    await page.fill(elementIdentifier, inputString);
}

export const selectOption = async ( page: Page, elementIdentifier: ElementLocator, dropdownOption: string): Promise<void> => {
    await page.focus(elementIdentifier);
    await page.selectOption(elementIdentifier, dropdownOption);
}

export const checkElement = async ( page: Page, elementIdentifier: ElementLocator):Promise <void> => {
    await page.check(elementIdentifier);
}