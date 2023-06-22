export const env = (key: string): string => {
    let value = process.env[key]
    if(!value) {
        throw Error(`No environment variable found for ${key}`)
    }
    return value;
}

export const getJsonFromFIle = <T = Record<string, string>>(path:string): T => {
    return require(`${process.cwd()}${path}`);
}