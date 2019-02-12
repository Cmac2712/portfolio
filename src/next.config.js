const withSass = require('@zeit/next-sass');
const config = {
	distDir: '../build'
}

module.exports = withSass(config)
