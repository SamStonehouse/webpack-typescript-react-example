module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended'],
  overrides: [
    // typescript
    {
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
      },
      env: {
        browser: true,
      },
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', "react-hooks", "prettier"],
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        // 'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        'react/jsx-filename-extension': [2, { 'extensions': ['.tsx'] }],
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
        ],
        "jsx-quotes": ["error", "prefer-single"],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.spec.ts", "**/*.spec.tsx"] }]
      },
      settings: {
        "react": {
          "pragma": "React",
          "version": "detect"
        },
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        },
      },
    },
    {
      files: ['**/*.js',],
      env: {
        node: true,
      },
    },
  ],

}