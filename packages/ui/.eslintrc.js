module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'testing-library', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
}
