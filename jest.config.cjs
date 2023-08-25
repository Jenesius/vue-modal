module.exports = {
  coverageProvider: 'v8',
  "moduleFileExtensions": [
    "js",
    "json",
    "ts",
    "vue"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.vue?$': '@vue/vue3-jest',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
}
