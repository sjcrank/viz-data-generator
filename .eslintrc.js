module.exports = {
    "extends": ["airbnb", "plugin:ava/recommended"],
    "env": {
        "browser": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "ava"
    ],
    "rules": {
        "max-len": ["off"],
        "keyword-spacing": ["error", {
            "after": false,
            "overrides": {
                "return": { "after":true },
                "import": { "after":true },
                "from": { "after":true }
            }
        }],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/require-extension": ["off"],
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-single"],
        "react/jsx-filename-extension": ["off"],
        "react/jsx-space-before-closing": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "class-methods-use-this": ["off"],
        "import/no-unresolved": ["off"]
    }
};