module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-boolean-value': 'off',
    'react/prop-types': [0],
    'react/no-danger': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 0,
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'import/named': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};
