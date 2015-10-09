angular.module('contestApp', [])

angular.module('contestApp').controller('iceCreamTroller', ['$scope', '$http', function($scope, $http){

	$http.get('/getallcontestants').then(function(serverResponse){
		// server responds by sending contestantDatabase
		$scope.allContestants = serverResponse.data
	})

	$scope.submitContestants = function(){
		// console.log('where are the new contestants ' ,$scope.newContestant)
		// console.log('submiting newEntry to server')
		// console.log($scope.newEntry)
		$http.post('/postcontestant', $scope.newEntry)

		.then(function(serverResponse){
			// console.log('return data ', serverResponse.data)
			$scope.allContestants = serverResponse.data;
		})
	}
}])