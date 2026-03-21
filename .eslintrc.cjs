module.exports = {
  root: true,
  env: { browser: true, es2017: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    'dist',
    'node_modules',
    'scripts',
    '.eslintrc.cjs',
    'rollup.config.dts.js',
    'vite.config.js',
    'storybook-static',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
    },
    {
      // Extracted CSF stories imported by *.stories.tsx; meta lives on the parent file.
      files: ['**/*.story.tsx'],
      rules: {
        'storybook/default-exports': 'off',
      },
    },
  ],
}
