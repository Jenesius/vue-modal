module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },

}
