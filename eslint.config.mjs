import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
      "semi": ["error", "always"]
    }
  }
]);