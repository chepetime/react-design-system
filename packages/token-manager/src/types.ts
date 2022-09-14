import type { Author } from "parse-author";
import type { PackageJson as PackageJsonTF } from "type-fest";

export { Author };

export type PackageJson = PackageJsonTF & { $schema?: string };
export type PackageJsonKey = keyof PackageJson;

/** Union of all specific app arguments */
export type TokenEngineConfigType = FigmaTokensArgs | FigmaStylesArgs;

export type TokenFormat = "FigmaTokens" | "FigmaStyles";

type Platform =
  | ""
  | "css"
  | "cssAutocomplete"
  | "scss"
  | "scssMap"
  | "less"
  | "js"
  | "ts"
  | "json";

/* export type PlatformTuple = typeof ALL_PLATFORMS;
export type Platform = PlatformTuple[number]; */

interface AppArgs {
  brandPrefix?: string;
  inputFile: string;
  outputDir: string;
  platforms?: Array<Platform>;
  tokenFormat: TokenFormat;
}

export interface FigmaTokensArgs extends AppArgs {
  excludes?: string[];
  sets?: string[];
  transformerOutput: string;
}

export interface FigmaStylesArgs extends AppArgs {
  figmaFileId: string;
}
