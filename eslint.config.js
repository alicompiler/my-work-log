import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tsEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tsEslint.config(
    { 
      ignores: ['dist'] 
    },
    {
        extends: [js.configs.recommended, ...tsEslint.configs.recommended, eslintConfigPrettier],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'prettier/prettier': [
              'error',
              {
                singleQuote: true,
                trailingComma: 'all',
                printWidth: 120,
                tabWidth: 4,
                semi: true,
              },
            ],
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-unused-vars': 'off',
        },
    }
);
