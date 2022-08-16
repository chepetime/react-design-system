import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import packageJson from "./package.json";

const outputConfig = [
  {
    file: packageJson.main,
    format: "cjs",
    sourcemap: true,
  },
  {
    file: packageJson.module,
    format: "esm",
    sourcemap: true,
  },
];

const rollupConfig = [
  {
    input: "src/index.ts",
    output: outputConfig,

    external: ["react", "react-dom"],

    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),

      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|scss)$/],
  },
];

export default rollupConfig;
