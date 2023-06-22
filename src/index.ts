import dotenv from 'dotenv'
import { env, getJsonFromFIle } from './env/parseEnv'
import { GlobalConfig, HostsConfig,PagesConfig } from './env/global';

dotenv.config({path: env('COMMON_CONFIG_FILE')})

const hostsConfig: HostsConfig = getJsonFromFIle(env('HOSTS_URL_PATH'))
const pagesConfig: PagesConfig = getJsonFromFIle(env('PAGES_URL_PATH'))
console.log("index.ts ::: hostsConfig=", hostsConfig)

const worldParameters:GlobalConfig = {
    hostsConfig,
    pagesConfig,
}

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar`;

const smoke = `${common} --tags @smoke`;
const regression = `${common} --tags @regression`;

export {smoke, regression}
