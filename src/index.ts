import dotenv from 'dotenv'
import { env, getJsonFromFIle } from './env/parseEnv'
import { GlobalConfig, HostsConfig,PagesConfig, PageElementMappings } from './env/global';
import * as fs from "fs";

dotenv.config({path: env('COMMON_CONFIG_FILE')})

const hostsConfig: HostsConfig = getJsonFromFIle(env('HOSTS_URL_PATH'))
const pagesConfig: PagesConfig = getJsonFromFIle(env('PAGES_URL_PATH'))

const mappingfiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)
const pageElementMappings: PageElementMappings = mappingfiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json','')
        const elementMappings = getJsonFromFIle(`${env('PAGE_ELEMENTS_PATH')}${file}`);
        return { ...pageElementConfigAcc, [key]: elementMappings}
    },
    {}
)


const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    pageElementMappings,
}

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar \
                --parallel ${env('PARALLEL')} \
                --retry ${env('RETRY')}`;

const smoke = `${common} --tags @smoke`;
const reg = `${common} --tags @reg`;
const wip = `${common} --tags @wip`;

export {smoke, reg, wip}
