import { Page } from 'playwright';
import { ElementKey, ElementLocator, GlobalConfig, GlobalVariables } from '../env/global'
import { getCurrentPageId } from './navigation-behaviour';

export const getElementLocator = (
    page: Page,
    elementKey: ElementKey,
    //globalVariables: GlobalVariables,
    globalConfig: GlobalConfig,
): ElementLocator => {
    
    const { pageElementMappings } = globalConfig;
    //const currentPage = globalVariables.currentScreen;
    const currentPage = getCurrentPageId(page, globalConfig);

    return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey];

}