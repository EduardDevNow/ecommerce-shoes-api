module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script",
        "ecmaFeatures": {
            "jsx": false,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "node": true,
        "commonjs": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "global-require": [
            "error"
        ],
        "handle-callback-err": [
            "error"
        ]
    }
}