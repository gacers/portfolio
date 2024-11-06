import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/.next',
      '**/.storybook',
      '**/*stories.tsx',
      '**/*stories.js',
      '*/**/*.stories.\\{js,ts,tsx}',
      '**/panel/',
      '**/next.config.js',
      '**/jest.config.js',
      '**/dist/',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'airbnb',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'prettier',
      'plugin:prettier/recommended',
    ),
  ),
  {
    languageOptions: {
      ecmaVersion: 2020,

      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      sourceType: 'module',
    },

    plugins: {
      prettier: fixupPluginRules(prettier),
      react: fixupPluginRules(react),
      'sort-destructure-keys': sortDestructureKeys,
      'sort-keys-fix': sortKeysFix,
    },

    rules: {
      '@typescript-eslint/explicit-function-return-type': 0,

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          mdx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],

      'no-underscore-dangle': 'off',

      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      'react/jsx-curly-newline': 'off',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],

      'react/jsx-newline': [
        2,
        {
          prevent: false,
        },
      ],

      'react/jsx-one-expression-per-line': 'off',

      'react/jsx-props-no-spreading': [
        'error',
        {
          custom: 'ignore',
        },
      ],

      "react/function-component-definition": [true, {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }],

      'react/jsx-wrap-multilines': 'off',
      'react/prop-types': 'off',
      'sort-destructure-keys/sort-destructure-keys': [
        2,
        {
          caseSensitive: false,
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: false,
          minKeys: 2,
          natural: false,
        },
      ],

      'sort-keys-fix/sort-keys-fix': [
        'error',
        'asc',
        {
          caseSensitive: false,
          natural: false,
        },
      ],
    },

    settings: {
      'import/resolver': {
        typescript: {},
      },

      react: {
        version: 'detect',
      },
    },
  },
]
