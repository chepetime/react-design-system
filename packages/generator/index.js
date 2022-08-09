const { generateTemplateFilesCommandLine } = require("generate-template-files");

const REACT_COMPONENTS_TEMPLATE =
  "./../ui/src/components/__componentName__(pascalCase)";

generateTemplateFilesCommandLine([
  {
    option: "Create Component",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/component",
    },
    stringReplacers: ["__componentName__"],
    output: {
      path: REACT_COMPONENTS_TEMPLATE,
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
]);
