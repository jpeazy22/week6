//represents our data.  an array of ojbects
var allContestants = [];

// object constructor
var Contestants = function(iceCreamData){
	console.log('ice cream data: ', iceCreamData)
	this.name = iceCreamData.name;	
	this.url = iceCreamData.url;	
	this.title = iceCreamData.title;	
	this.description = iceCreamData.description;
	allContestants.push(this)		
}

module.exports = {
	allContestants : allContestants,
	Contestants    : Contestants
}