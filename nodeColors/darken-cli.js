var darkenColors = require('./colorutil.js')
	var result = darkenColors.darken(process.argv[2], process.argv[3], process.argv[4])
	console.log(result)