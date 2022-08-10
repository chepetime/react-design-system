export interface TokenEngine {
  tokenFormat: "FigmaTokens" | "FigmaStyles";
  figmaFileId: string;
  inputFile: string;
  transformerOutput: string;
  outputDir: string;
  platforms: string;
}

export function runTokenEngine(opts: TokenEngine) {
  console.log({ runTokenEngine: opts });
}

/**
 * Base template for config file
 * @returns
 */
export function generateTemplate(): TokenEngine {
  return {
    tokenFormat: "FigmaTokens",
    figmaFileId: "",
    inputFile: "",
    transformerOutput: "",
    outputDir: "./src/styles/tokens",
    platforms: "css,cssAutocomplete,scss,scssMap,less,js,ts,json",
  };
}
