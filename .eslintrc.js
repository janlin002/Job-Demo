// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//           'semi': ["error", "never"],
//         //   'semi': 'off',
//           'react/react-in-jsx-scope': 'off', // 縮排限制
//           'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
//           'indent': [
//             'error',
//             2
//           ], // 縮排限制
//           'object-curly-spacing': ['error', 'always'], // 大括號空白
//           'no-multiple-empty-lines': [1, { 'max': 1 }], // 空行最多0行
//           'no-unused-vars':'off', //未使用提示關閉
//           //   "react/jsx-no-undef": [
//           //     2,
//           //     {
//           //         "allowGlobals": true
//           //     }
//           // ],
//           'react/jsx-no-undef': [2, { 'allowGlobals': true }],
//           // 'jsx-quotes': ["error", "prefer-single"]
//       },
// };

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "eslint-config-prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    semi: ["error", "always"],
    //   'semi': 'off',
    "react/react-in-jsx-scope": "off",
    // 縮排限制
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    indent: ["error", 2],
    // 縮排限制
    "object-curly-spacing": ["error", "always"],
    // 大括號空白
    "no-multiple-empty-lines": [
      1,
      {
        max: 1,
      },
    ],
    // 空行最多0行
    "no-unused-vars": "off",
    //未使用提示關閉
    //   "react/jsx-no-undef": [
    //     2,
    //     {
    //         "allowGlobals": true
    //     }
    // ],
    "react/jsx-no-undef": [
      2,
      {
        allowGlobals: true,
      },
    ],
    // 'jsx-quotes': ["error", "prefer-single"]
  },
};
