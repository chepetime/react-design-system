//efficiently bundles third party dependencies we've installed and use in node_modules
import resolve from "@rollup/plugin-node-resolve";

// //enables transpilation into CommonJS (CJS) format
import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";

import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

const outputConfig = [
  {
    file: packageJson.main,
    format: "cjs",
    sourcemap: false,
  },
];

const rollupConfig = [
  {
    input: "src/index.ts",
    output: outputConfig,

    external: ["react", "react-dom"],

    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: false,
        inlineSources: false,
      }),
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
    ],
  },
];

export default rollupConfig;
