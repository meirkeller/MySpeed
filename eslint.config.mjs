// import tseslint from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    // files: ['**/*.js'],
    files: ['**/server/**/*.js'],
    // ignores: ['eslint.config.ts'],
    languageOptions: {
    //   parser: tsParser,
      parserOptions: {
        // project: ['./tsconfig.json', './test/tsconfig.json'],
        ecmaVersion: 2024,
        // sourceType: 'module',
        sourceType: 'commonjs',
      },
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
    //   '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
    //   ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
];
