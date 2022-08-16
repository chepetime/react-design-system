const { generateTemplateFilesCommandLine } = require("generate-template-files");

const REACT_COMPONENTS_TEMPLATE =
  "./../dex-react/src/components/__componentName__(pascalCase)";

const REACT_STORY_TEMPLATE = "./../../apps/docs-react/stories";

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
  {
    option: "Create Component Story",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/componentstory",
    },
    stringReplacers: ["__componentName__"],
    output: {
      path: REACT_STORY_TEMPLATE,
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
  /*   {
    option: "Create Story",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./templates/component-story/",
    },
    stringReplacers: ["__componentName__"],
    output: {
      path: REACT_STORY_TEMPLATE,
      pathAndFileNameDefaultCase: "(lowerCase)",
      overwrite: true,
    },
  }, */
]);
