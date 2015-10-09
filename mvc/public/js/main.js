// controls between js and client side. 

angular.module('HalloweenApp', [])

angular.module('HalloweenApp')
	.controller('pumpkinTroller', ['$scope', '$http', function($scope, $http){
		$scope.greeting = "Happy Halloween"
		// this refers to the route in app.js to get the costumes.
		$http.get('/getcostumes') 
			.then(function(returnData){  // callback function.  
				$scope.costumes = returnData.data // this represents the response. 
			})

		$scope.createCostume = function(){
			console.log($scope.newCostume)

			//POST data to server
			$http.post('/createcostume', $scope.newCostume) // stringifying the JSON and sending it to server.
			//http.post is pushing to the server
			//data we want to send to the server ($scope.newCostume)
				.then(function(returnData){
					console.log( returnData.data )  // will return whatever was sent back. so costumeModel.allCostumes.

					$scope.costumes = returnData.data;
				})
		}

	}])