/*eslint-disable*/
import vuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} Jenesius
  * @license MIT
  */`

/*

	"unpkg": "plugin-dist/jenesius-vue-modal.iife.js",
	"module": "plugin-dist/jenesius-vue-modal.es.js",

* */

const name = pkg.name

const outputDir = "plugin-dist/"

const outputConfig = {
	cjs: {
		file: pkg.main,
		format: `cjs`,
	},
/*
	'esm-bundler': {
		file: pkg.module,
		format: `es`,
	},
	global: {
		file: pkg.unpkg,
		format: `iife`,
	},
	esm: {
		file: pkg.browser || pkg.module.replace('bundler', 'browser'),
		format: `es`,
	},
*/

}

function createOutputs(config) {
	return Object.values(config).map(v => {
		return {
			file: `${outputDir}${name}.${v.format}.js`,
			format: v.format
		}
	})
}



function createConfig(format, output) {
	if (!output) {
		console.log(require('chalk').yellow(`invalid format: "${format}"`))
		process.exit(1)
	}

	output.banner = banner

	output.globals = {
		vue: 'Vue',
	}


	const isGlobalBuild = format === 'global'


	if (isGlobalBuild) output.name = 'JenesiusVueModal'

	const external = ['vue']

	return {
		input: "./plugin/index.js",
		external,
		plugins: [
			vuePlugin({
				preprocessStyles: true
			}),
			postcss(),
			babel({ babelHelpers: 'bundled' }),
			commonjs()

		],
		output,

	}
}



function createProductionConfig(format) {
	return createConfig(format, {
		file: `dist/${name}.${format}.prod.js`,
		format: outputConfig[format].format,
	})
}

const packageConfigs = Object.keys(outputConfig).map(format =>
	createConfig(format, outputConfig[format])
)
export default packageConfigs

/*
export default {
	input: "./plugin/index.js",
	output: createOutputs(outputConfig),

	plugins: [
		vuePlugin({
			preprocessStyles: true
		}),
		postcss(),
		babel({ babelHelpers: 'bundled' }),
		commonjs()

	]
}

 */