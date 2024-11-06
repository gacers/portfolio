/* eslint-disable sort-keys */
module.exports = {
  plugins: {
    'postcss-composes-enhanced': {},
    'postcss-flexbugs-fixes': {},
    'postcss-prepend-imports': {
      // files: ['utils.css', 'text.css', 'headings.css'],
      // path: 'styles/utils',
    },
    'postcss-import': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: true,
      },
      features: {
        'custom-media-queries': true,
        'custom-properties': true,
        'nesting-rules': true,
      },
      importFrom: [
        'styles/variables.css',
      ],
      preserve: 'computed',
      stage: 2,
    },
    rfs: {
      baseValue: '18px',
      factor: 100,
      remValue: 18,
    },
    'postcss-nested': {},
    'postcss-mixins': {},
  },
}
