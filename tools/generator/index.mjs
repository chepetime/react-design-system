import fs from "fs";
import path from "path";
import { generateTemplateFilesCommandLine } from "generate-template-files";

const UI_PROJECT_DIR_NAME = "ui";
const BASE_DIR = "./../..";
const COMPONENT_NAME = "[componentName](pascalCase)";
const STORY_OUT = `${BASE_DIR}/apps/storybook/stories`;
const DOCUMENTATION_OUT = `${BASE_DIR}/apps/documentation/pages/components`;
const COMPONENTS_EXPORT = `${BASE_DIR}/packages/${UI_PROJECT_DIR_NAME}/src/index.ts`;
const COMPONENTS_OUT = `${BASE_DIR}/packages/${UI_PROJECT_DIR_NAME}/src/components/${COMPONENT_NAME}`;

generateTemplateFilesCommandLine([
  {
    option: "create-component",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/component",
    },
    stringReplacers: ["[componentName]"],
    output: {
      path: COMPONENTS_OUT,
      pathAndFileNameDefaultCase: "(lowerCase)",
      overwrite: true,
    },
    onComplete: (res) => {
      const exportDirectory = path.normalize(COMPONENTS_EXPORT);
      const componentName = res.output.path.split("/").reverse()[0];
      const appendExportString =
        `\nexport { Button, type ButtonProps } from "./components/Button";`.replaceAll(
          "Button",
          componentName
        );
      fs.appendFileSync(exportDirectory, appendExportString);
    },
  },
  {
    option: "create-component-story",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/componentstory",
    },
    stringReplacers: ["[componentName]"],
    output: {
      path: STORY_OUT,
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
  {
    option: "create-component-documentation",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/componentdocumentation",
    },
    stringReplacers: ["[componentName]"],
    output: {
      path: DOCUMENTATION_OUT,
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
]);
