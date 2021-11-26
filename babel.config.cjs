module.exports = {
	"env": {
		"test": {
			"plugins": ["@babel/plugin-transform-modules-commonjs", "@babel/transform-runtime"]
		},
		
		"development": {
			"plugins": ["@babel/transform-runtime"]
		}
	},

}
