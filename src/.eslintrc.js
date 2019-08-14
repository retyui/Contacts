module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'import', 'simple-import-sort', 'flowtype'],
  rules: {
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': 'error',

    'flowtype/define-flow-type': 'warn',
    'flowtype/newline-after-flow-annotation': ['error', 'never'],
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',

    'arrow-body-style': ['error', 'as-needed'],
    'callback-return': 'off',
    curly: ['error', 'all'],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-restricted-globals': ['error', 'event', 'name'],
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
  },
};
