/* eslint-disable */

const CopyWebpackPlugin = require('copy-webpack-plugin') ;
const path = require("path")


module.exports = {

    pages: {
        docs: {
            entry: './src/pages/documentation/main.js',
        },

        index: {
            entry: "./src/pages/index/main.js"
        }

    }
};

