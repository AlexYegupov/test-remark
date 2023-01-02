module.exports = {
  // prettier is used when `--fix` is passed
  // prettier: {
  //   // hard wrap lines to 120 characters
  //   printWidth: '120'
  // },

  remark: {
    // plugins for remark-lint
    plugins: [
      // print errors when there're lines longer that 120 characters
      // [require('remark-lint-maximum-line-length'), 120],
      //
      // // disable rule `no-inline-padding`
      // [require('remark-lint-no-inline-padding'), false],
      //
      // // set `*` as the only allowed marker for unordered list
      // [require('remark-lint-unordered-list-marker-style'), '*']

      //[require('remark-lint-no-dead-urls', {gotOptons: {baseUrl: 'http://localhost:5000'}})],
      [require('./remark-lint-no-dead-internal-urls', {aa: 'AA'})]

    ],

    // settings for remark-stringify which is used when `--fix` is passed
    stringifySettings: {
      // automatically replace list markers to `*`
      bullet: '*'
    }
  },

  // typograf: {
  //   // rules API — https://github.com/typograf/typograf/blob/dev/docs/api_rules.md
  //   // list of ruls — https://github.com/typograf/typograf/blob/dev/docs/RULES.en-US.md
  //   locale: ['ru', 'en-US'],
  //   enableRules: [],
  //   disableRules: [
  //     // these rules have to be turned off to make it possible to use typograph
  //     'common/space/delTrailingBlanks',
  //     'common/space/trimLeft',
  //     'common/space/trimRight'
  //   ],
  //   rulesSettings: []
  // }
};
