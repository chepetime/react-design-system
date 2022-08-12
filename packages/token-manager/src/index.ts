import * as dotenv from "dotenv";
dotenv.config();
export interface TokenEngine {
  tokenFormat: "FigmaTokens" | "FigmaStyles";
  figmaFileId: string;
  inputFile: string;
  transformerOutput: string;
  outputDir: string;
  platforms: string;
}

export function runTokenEngine(opts: TokenEngine) {
  const FIGMA_API = process.env.FIGMA_API || "";
  console.log({ runTokenEngine: { ...opts, FIGMA_API } });
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
