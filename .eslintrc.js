module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 6,
    souceType: 'module',
  },
  plugins: ['node', 'promise', 'prettier'],
  extends: [
    'pluin:prettier/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
  ],
  rules: {},
}
