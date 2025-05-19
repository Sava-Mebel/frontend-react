import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginSortImports from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        NodeJS: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      prettier: pluginPrettier,
      import: pluginImport,
      'simple-import-sort': pluginSortImports,
      'unused-imports': pluginUnusedImports,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        },
        typescript: {},
        webpack: {
          config: './webpack.config.ts',
        },
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': ['error', { ignoreTranspilerName: true }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'unused-imports/no-unused-imports': 'warn',
      'import/no-absolute-path': 'error',

      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],

      // Убираем simple-import-sort
      'simple-import-sort/imports': 'off',
      'simple-import-sort/exports': 'off',
      'import/no-unresolved': 'off',
    },
  },

  // Отключаем react/display-name в сторибуках
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}', '**/storybook/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/display-name': 'off',
    },
  },
];
