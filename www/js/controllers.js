angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})
/*{
        var i=0;var data;var Spots;
        $http.get('http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/getAllSpots').then(function(resp) {
    //alert("test inside");i=1;
    data= JSON.stringify(resp.data);
    obj = eval(data);
    Spots=obj[0];
	for(i=0;i<obj[0].length;i++){
		console.log(obj[0][i]);
	}

    console.log('Success:', data.length);
    console.log('data logging',Spots);

  }, function(err) {
    console.error('ERR', err);
    i=2;
    // err.status will contain the status code
  })
//	alert("dash");
})*/

.controller('SpotsCtrl', function($scope, Spots, $http) {
  


     /* navigator.geolocation.getCurrentPosition(function(position) {
        alert("inside navigator");
      //  console.log(lat, long);
        console.log(position.coords.latitude, position.coords.longitude);
       }, function(e) {
        alert("error inside navigator");
            console.log("Error retrieving position " + e.code + " " + e.message)
        });*/

 // var myDataPromise = Spots.all();
   //alert("promise is"+myDataPromise);

    /*Spots.all().$promise.then(function(result) {  // this is only run after $http completes
      alert("result"+result);
       $scope.Spots = result;
       console.log("Spots::"+$scope.Spots);
    });*/

/*var Spot=$http.get('http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/getAllSpots').then(function(resp) {
    alert("HTTP get call");
    data= JSON.stringify(resp.data);
    obj = eval(data);
    Spots=obj[0];
    console.log("alerting Spots");
    console.log(Spots);
   return Spots;
  }, function(err) {
    console.error('ERROR retreivig data', err);
    // err.status will contain the status code
  });*/

/*Spot.then(function(result){
$scope.Spots=result;
});*/

$scope.spots = Spots.all();

  $scope.remove = function(spot) {
    spots.remove(spot);
  }
})

.controller('SpotDetailCtrl', function($scope, $stateParams, Spots) {
  
  $scope.spot = Spots.get($stateParams.spotId);
   $scope.book=function () {
            alert("Test Duh!");
        }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
