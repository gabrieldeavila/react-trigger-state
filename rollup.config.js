import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        sourcemapExcludeSources: true, // This is optional, but recommended for security reasons
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        sourcemapExcludeSources: true, // This is optional, but recommended for security reasons
      },
    ],
    external: ["react", "react-dom", "lodash"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      babel({
        presets: ["@babel/preset-env"],
      }),
      uglify(),
    ],
    treeshake: true,
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
