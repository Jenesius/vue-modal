/*eslint-disable*/
import vuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript';


const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} Jenesius
  * @license MIT
  */`

const name = pkg.name

const outputDir = "dist/"

const outputConfig = {
	cjs: {
		file: pkg.main,
		format: `cjs`,
	},
	
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
		input: "./plugin/index.ts",
		external,
		plugins: [
			
			
			typescript({ tsconfig: './tsconfig.json' }),
			vuePlugin({
				preprocessStyles: true
			}),
			
			postcss(),
			babel({ babelHelpers: 'bundled' }),
			commonjs(),
			
		],
		output,

	}
}



const packageConfigs = Object.keys(outputConfig).map(format =>
	createConfig(format, outputConfig[format])
)
export default packageConfigs

