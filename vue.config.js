/* eslint-disable */

module.exports = {
    outputDir: "./web/dist",
    pages: {
        docs: {
            entry: './web/src/pages/documentation/main.js',
        },

        index: {
            entry: "./web/src/pages/index/main.js"
        },

        test: {
            entry: "./web/src/pages/test/main.ts"
        },
        stage: {
            entry: "./web/src/pages/stage/main.js"
        }

    }
};

