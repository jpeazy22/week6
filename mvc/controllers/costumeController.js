// server side controller, not an angular controller.
var costumeModel = require('../models/costumes.js');

// Export so we can access methods in app.js
module.exports = {

	createCostume : function(req, res){
		// use req.body to create a new costume
		var costume = new costumeModel.Costume(req.body)  
		console.log(costumeModel.allCostumes)

		res.send(costumeModel.allCostumes) //sending the full array of all the costumes.
	}, // dont forget this comma.

	getCostumes : function(req, res){
		res.send(costumeModel.allCostumes)
	} // retrieving data from the model 
}