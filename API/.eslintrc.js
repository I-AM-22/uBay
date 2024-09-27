module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    'node_modules',
    // Ignore compiled JS files
    // Update the patterns as necessary if your project includes production-grade JS files
    '*.js',
    '*.d.ts',
    // Include dotfiles in the linting process as they are excluded by default
    '!.*.js',
    '!*.config.js',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/newline-after-import': ['error', { count: 1 }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-console': 'warn',
  },
};
