//This plugin prevents packages listed in peerDependencies from being bundled with our component library
import peerDepsExternal from "rollup-plugin-peer-deps-external";

//efficiently bundles third party dependencies we've installed and use in node_modules
import resolve from "@rollup/plugin-node-resolve";

// //enables transpilation into CommonJS (CJS) format
import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

const isProduction = true;

const outputConfig = [
  {
    file: packageJson.main,
    format: "cjs",
    sourcemap: !isProduction,
  },
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

    external: ["react", "react-dom"],

    plugins: [
      peerDepsExternal(),

      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: !isProduction,
        inlineSources: !isProduction,
      }),

      resolve(),
      commonjs(),
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),

      terser(),
    ],
  },
  {
    input: "./dist/cjs/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm", sourcemap: false }],
    plugins: [dts.default()],
    external: [/\.(css|scss)$/],
  },
];

export default ROLLUP_CONFIG;
