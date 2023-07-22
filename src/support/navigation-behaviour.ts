import { Page } from "playwright";
import { GlobalConfig, PageId } from "../env/global";

export const navigateToPage = async (page:Page, pageId:PageId, {hostsConfig, pagesConfig}:GlobalConfig): Promise<void> => {
    console.log(`navigateToPage ::: `)
    console.log(`navigateToPage ::: hostsConfig=`,hostsConfig)

    const {
        UI_AUTOMATION_HOST: hostName = 'localhost',
    } = process.env

    console.log(`navigateToPage ::: hostName=${hostName}`)

    const hostPath = hostsConfig[`${hostName}`]
    console.log(`navigateToPage ::: hostPath = ${hostPath}`)

    const url = new URL(hostPath)
    console.log(`navigateToPage ::: url=${url}`)

    const pagesConfigItem = pagesConfig[`${pageId}`]
    console.log(`navigateToPage ::: pagesConfigItem=${pagesConfigItem}`)

    url.pathname = pagesConfigItem.route;
    console.log(`navigateToPage ::: url.pathname=${url.pathname}`)
    console.log(`navigateToPage ::: url.href=${url.href}`)
    await page.goto(url.href)
}

export const currentPathMatchesPageId = (page: Page, pageId: PageId, globalConfig: GlobalConfig) : boolean => {
    const {pathname: currentPath} = new URL(page.url());
    return pathMatchesPageId(currentPath, pageId, globalConfig);
}

const pathMatchesPageId = (path: string, pageId: PageId, {pagesConfig}: GlobalConfig): boolean => {
    const pageRegexString = pagesConfig[pageId].regex;
    const pageRegex =new RegExp(pageRegexString);
    return pageRegex.test(path);
}

export const getCurrentPageId = ( page: Page, globalConfig: GlobalConfig ) : PageId => {
    const { pagesConfig } = globalConfig;   
    console.log("getCurrentPageId - pagesConfig:::", pagesConfig)

    const pagesConfigPageIds = Object.keys(pagesConfig);
    console.log("getCurrentPageId - pagesConfigPageIds::: ", pagesConfigPageIds)

    const { pathname: currentPagePath } = new URL(page.url());
    console.log("getCurrentPageId - currentPagePath::: ", currentPagePath)

    const currentPageId = pagesConfigPageIds.find( pageId => 
        pathMatchesPageId(currentPagePath, pageId, globalConfig) );
    console.log("getCurrentPageId - currentPageId::: ", currentPageId)
    
    if(!currentPageId){
        throw Error(`Failed to get page name from current route ${currentPagePath}, \
                            possible pages: ${JSON.stringify(pagesConfig)}`);
    }
        
    return currentPageId;
}
 