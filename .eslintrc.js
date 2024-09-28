module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'tailwindcss'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
};
