#cucumber tag
tag=$1

export COMMON_CONFIG_FILE=env/common.env

#run tests
npm run cucumber -- --profile $tag || npm run postcucumber