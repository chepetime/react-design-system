#!/bin/bash

# Set the -e option
set -e


pwd
cd ./../..
echo "Start maintenance service"
pwd

npx prettier-package-json --write ./package.json
npx npm-check-updates -u

cd ./apps/web
echo "Start apps/web"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with apps/web"
cd ./../../

cd ./apps/storybook
echo "Start apps/storybook"
npx prettier-package-json --write ./package.json
npx sb@next upgrade
npx npm-check-updates -u
echo "Done with apps/storybook"
cd ./../../

cd ./apps/documentation
echo "Start apps/documentation"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with apps/documentation"
cd ./../../

cd ./config/eslint-config-custom
echo "Start config/eslint-config-custom"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with config/eslint-config-custom"
cd ./../../

cd ./config/tsconfig
echo "Start config/tsconfig"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with config/tsconfig"
cd ./../../

cd ./packages/icons
echo "Start packages/icons"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with packages/icons"
cd ./../../

cd ./packages/tokens
echo "Start packages/tokens"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with packages/tokens"
cd ./../../

cd ./packages/ui
echo "Start packages/ui"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with packages/ui"
cd ./../../

cd ./tools/generator
echo "Start tools/generator"
npx prettier-package-json --write ./package.json
npx npm-check-updates -u
echo "Done with tools/generator"
cd ./../../


echo "Intalling dependencies"
pnpm i
echo "Build library"
pnpm run build
echo "Testing library"
pnpm run test

cd ./packages/icons
echo "Generate icons"
npm run generate
cd ./../..

echo "Completed"
