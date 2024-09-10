import js from "@eslint/js";
import solid from "eslint-plugin-solid/configs/typescript";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: "latest",
      },
    },
  },
];
