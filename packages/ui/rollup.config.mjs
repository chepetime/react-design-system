// This plugin prevents packages listed in peerDependencies from being bundled with our component library
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// efficiently bundles third party dependencies we've installed and use in node_modules
import resolve from "@rollup/plugin-node-resolve";

// enables transpilation into CommonJS (CJS) format
import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import cleanup from "rollup-plugin-cleanup";
import { visualizer } from "rollup-plugin-visualizer";

import packageJson from "./package.json" assert { type: "json" };

const ROLLUP_CONFIG = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],

    external: ["react", "react/jsx-runtime"],

    plugins: [
      peerDepsExternal(),

      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: false,
        inlineSources: false,
      }),

      resolve(),
      commonjs(),
      postcss({
        extract: false,
        modules: true,
        minimize: true,
        use: ["sass"],
      }),

      terser({
        format: {
          comments: false,
        },
        compress: true,
      }),
      cleanup({ comments: "istanbul", extensions: ["js", "ts", "jsx", "tsx"] }),
      visualizer(),
    ],
  },
  {
    input: "./dist/esm/config/tsconfig/dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm", sourcemap: false }],
    plugins: [dts.default()],
    external: [/\.(css|scss)$/],
  },
];

export default ROLLUP_CONFIG;
