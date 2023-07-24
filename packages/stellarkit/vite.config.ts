import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    cssMinify: "esbuild",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "StellarKit",
      fileName: "stellarkit",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
