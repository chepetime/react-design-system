# Maintenance Tasks

## Update Node Dps

```sh
npm outdated
```

```sh
npx npm-check-updates -u
```

## Pretty format the packages

```sh
npx prettier-package-json --write ./package.json
npx npm-check-updates -u

cd ./apps/web
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./apps/storybook
npx prettier-package-json --write ./package.json
npx sb@next upgrade
npx npm-check-updates -u
cd ./../../

cd ./apps/documentation
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./config/eslint-config-custom
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./config/tsconfig
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./packages/icons
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./packages/tokens
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./packages/ui
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

cd ./tools/generator
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
cd ./../../

pnpm i
pnpm run build
pnpm run test

cd ./packages/icons
npm run generate
cd ./../../

```
