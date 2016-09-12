module.exports = {
    "extends": ["airbnb", "plugin:ava/recommended"],
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "ava"
    ],
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/require-extension": ["off"],
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-single"],
        "react/jsx-filename-extension": ["off"],
        "react/jsx-space-before-closing": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "import/no-unresolved": ["off"]
    }
};