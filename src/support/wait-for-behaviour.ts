import { envNumber } from "../env/parseEnv";

export const waitFor = async <T>(
    predicate: () => T | Promise<T>,
    options?: {timeout?: number, wait?: number}
): Promise<T> => {
    console.log('Started method waitFor()....');

    const { timeout = 20000 , wait = 2000 } = options || {};

    const sleep = (ms: number) => new Promise( resolve => setTimeout(resolve, ms));
    const startDate = new Date();

    while(new Date().getTime() - startDate.getTime() < timeout) {
        const result = await predicate();
        if(result)
            return result;

       console.log(`Waiting for ${wait} ms ...`);
       await sleep(wait);
    }

    throw new Error(`Timeout of ${timeout} exceeded.`);
}   