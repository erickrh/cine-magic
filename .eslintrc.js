// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@html-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    'semi': [
      'error',
      'always'
    ],
    '@html-eslint/quotes': [
      'error',
      'single',
    ],
    '@html-eslint/indent': [
      'error',
      2
    ],
    'react/react-in-jsx-scope': 'off',  
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prop-types': 0
  },
  'overrides': [
    {
      'files': ['*.html'],
      'parser': '@html-eslint/parser',
      'extends': ['plugin:@html-eslint/recommended'],
    },
  ],
};