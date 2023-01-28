import fs from "fs";
import path from "path";
import { generateTemplateFilesCommandLine } from "generate-template-files";

const UI_PROJECT_DIR_NAME = "ui";
const BASE_DIR = "./../..";
const COMPONENT_NAME = "__componentName__(pascalCase)";
const STORY_OUT = `${BASE_DIR}/apps/docs/stories`;
const COMPONENTS_EXPORT = `${BASE_DIR}/packages/${UI_PROJECT_DIR_NAME}/src/index.ts`;
const COMPONENTS_OUT = `${BASE_DIR}/packages/${UI_PROJECT_DIR_NAME}/src/components/${COMPONENT_NAME}`;

generateTemplateFilesCommandLine([
  {
    option: "Create Component",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/component",
    },
    stringReplacers: ["__componentName__"],
    output: {
      path: COMPONENTS_OUT,
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
    onComplete: (res) => {
      const exportDirectory = path.normalize(COMPONENTS_EXPORT);
      const componentName = res.output.path.split("/").reverse()[0];
      const appendExportString =
        `\nexport { Button, type ButtonProps } from "./components/Button/Button";`.replaceAll(
          "Button",
          componentName
        );
      fs.appendFileSync(exportDirectory, appendExportString);
    },
  },
  {
    option: "Create Component Story",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/componentstory",
    },
    stringReplacers: ["__componentName__"],
    output: {
      path: STORY_OUT,
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
]);
