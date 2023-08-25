module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset',
		["@babel/preset-env", {targets: {node: 'current'}}],
	],
	"plugins": [
		"@babel/plugin-transform-runtime",
	]
}
