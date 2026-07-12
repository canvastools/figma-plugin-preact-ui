import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    'scripts',
    'rollup.config.dts.js',
    'vite.config.js',
    'storybook-static',
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  storybook.configs['flat/recommended'],
  {
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    // Extracted CSF stories imported by *.stories.tsx; meta lives on the parent file.
    files: ['**/*.story.tsx'],
    rules: {
      'storybook/default-exports': 'off',
    },
  },
  {
    // Storybook `render:` functions are not components — hooks there are a
    // documented Storybook pattern, and stories never ship in the build
    files: ['**/*.stories.tsx', '**/*.story.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
])
