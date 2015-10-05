module.exports = {};
module.exports.luminosity = function(r,g,b){
	return 0.2126*r + 0.7152*g + 0.0722*b
};

module.exports.darken = function(r,g,b){
	 var colorHolders = [r,g,b];
	 for(var i = 0; i < 3; i++){
	 	colorHolders[i] *= 0.80;
	 }
	 return colorHolders;
};