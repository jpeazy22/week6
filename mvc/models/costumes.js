//represents our data.  an array of objects.

var allCostumes = [];

//object constructor
var Costume = function(costumeData){
	console.log(costumeData)
	this.name 				= costumeData.name;
	this.inappropriateness 	= costumeData.inappropriateness;
	this.missingAccessories = costumeData.missingAccessories.split(', ');
	allCostumes.push(this)
}


module.exports = {
	allCostumes : allCostumes,
	Costume 	: Costume
}