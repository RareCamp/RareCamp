module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'prettier',
    'prettier/react',
  ],
  plugins: ['testing-library', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
  },
};
