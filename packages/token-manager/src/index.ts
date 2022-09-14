import * as dotenv from "dotenv";

dotenv.config();

import { TokenEngineConfigType } from "./types";

import { printAppName } from "./utils/title";
import { generateTemplate } from "./utils/config";

import { start } from "./figma-api";

export async function runTokenEngine(opts: TokenEngineConfigType) {
  printAppName();
  await start();
}

/* This will only run in development environment */
runTokenEngine(generateTemplate());
