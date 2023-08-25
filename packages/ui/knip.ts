import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/index.ts"],
  project: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.scss"],
  ignore: ["**/*.d.ts"],
  ignoreExportsUsedInFile: {
    interface: true,
    type: true,
  },
};

export default config;
