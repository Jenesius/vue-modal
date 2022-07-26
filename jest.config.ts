import vue from "vue";
import type {Config} from "@jest/types";

const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "ts", "vue"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.vue?$': '@vue/vue3-jest',
  },
  verbose: true,
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node"],
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
}
export default config;