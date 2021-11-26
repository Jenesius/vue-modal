module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.ts?$': 'ts-jest',
  },

}
