const { defineConfig } = require("eslint/config");
const eslintExpoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  ...eslintExpoConfig,
  {
    ignores: ["dist/*"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      import: require("eslint-plugin-import"),
    },
    rules: {
      "import/no-unresolved": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
]);
