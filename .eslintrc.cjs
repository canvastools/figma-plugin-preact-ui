module.exports = {
  root: true,
  env: { browser: true, es2017: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "esbuild.js", "node_modules", "storybook-static", "**/*.stories.tsx"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
}
