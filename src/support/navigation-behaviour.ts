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