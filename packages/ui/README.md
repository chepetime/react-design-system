<div align="center">
    <img src="./../../docs/General_Electric_logo.svg" alt="Logo" alt="Logo" width="100" height="100">

# DEX React Library

[![CI](https://github.com/frog/ge-dls/workflows/ci/badge.svg)](https://github.com/frog/ge-dls/actions/workflows/ci.yml) [![Storyboook](https://img.shields.io/badge/Storybook-main-ff69b4)](https://main--625dd7127091b6003ac35573.chromatic.com) [![Chromatic](https://img.shields.io/badge/Chromatic-main-fc5220)](https://chromatic.com/library?appId=625dd7127091b6003ac35573&branch=main)

</div>

<br/><br/>

## 📚 About Dex React

This project has an React-based approach of building UI Toolkits. It uses Rollup for bundling, Jest for testing and SCSS.

<br/>

## 📦 Install

This repository uses the Long Term Support (LTS) version of Node, which is defined in the `.nvmrc` file. At the moment that version is `v18.4.0`. Ensure the team is using the same Node version using [nvm](https://github.com/nvm-sh/nvm) (node version manager).

Follow the next steps to run the local development server and the production build:

1. Install Node dependencies.

```sh
npm i
```

2. Start Development server with Storybook.

```sh
npm run start
```

3. Build the project for distribution.

```sh
npm run build
```

<br/>

## ➕ Add a new component

Interative tool for creating the scappfolding for a single Component:

```sh
npm run generate:component --name=DexCard
npm run generate:component --name=DexNavigation
npm run generate:component --name=DexPage
```

Then add the new component in the entry file:

```sh
code ./src/index.ts
```

> Note: Add the prefix `Dex` when creating a new component

<br/>

## 🎨 Chromatic (WIP)

<br/><br/>

---

General Electric Digital - 2022
