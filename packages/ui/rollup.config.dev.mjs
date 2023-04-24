import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert { type: "json" };

const isProduction = false;

const outputConfig = [
  {
    file: packageJson.module,
    format: "esm",
    sourcemap: !isProduction,
  },
];

const ROLLUP_CONFIG = [
  {
    input: "src/index.ts",
    output: outputConfig,

    external: ["react"],

    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: !isProduction,
        inlineSources: !isProduction,
      }),
      resolve(),
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
    ],
  },
];

export default ROLLUP_CONFIG;
