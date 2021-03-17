module.exports = {
    moduleFileExtensions: [
        "js",
        "ts"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    moduleNameMapper: {
        "^@models$": "<rootDir>/model",
        "^@config$": "<rootDir>/config",
        "^@database$": "<rootDir>/database",
        "^@middlewares$": "<rootDir>/middlewares"
    },
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    }
}