import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettierLint from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  prettierLint,
  {
    ignores: [
      'build',
      'node_modules',
      'public',
      'server.js',
      'tailwind.config.js',
    ],
  },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
  },
  {
    rules: {
      'no-irregular-whitespace': 'off',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  }
)