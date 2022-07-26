module.exports = {
	"env": {
		"test": {
			"plugins": ["@babel/plugin-transform-modules-commonjs", "@babel/transform-runtime"]
		},
		
		"development": {
			"plugins": ["@babel/transform-runtime"]
		}
	},
	presets: [
		'@vue/cli-plugin-babel/preset',
		['@babel/preset-env', {targets: {node: 'current'}}]
	]

}
