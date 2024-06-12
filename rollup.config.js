import typescript from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  plugins: [typescript(), terser()],
  output: [
    {
      file: "./build/postcss-debug-borders.esm.js",
      format: "esm",
    },
    {
      file: "./build/postcss-debug-borders.js",
      format: "cjs",
    },
  ],
};