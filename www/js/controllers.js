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

.controller('getSpotsCtrl', function($scope, $http,Spots) {
  
Spots.all().then(function(data) {
                    // promise fulfilled
                    $scope.spots = data;

                });

  //$scope.spots = Spots.all();
  
  // $http.get('http://localhost:8080/sparking/spot/getAllSpots').
  //   success(function(data, status, headers, config) {
  //   //  alert("get data:"+JSON.stringify(data));
  // //var spotslist=[{"spotId":1,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38.0,"y1":-122.0,"image":"http://res.cloudinary.com/dsejtrwis/image/upload/v1435036703/21st_ixx3ip.png"},{"spotId":7,"address1":"2 townsend","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":35.0,"y1":-122.0,"image":null},{"spotId":8,"address1":"2 townsend","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38.0,"y1":-122.0,"image":null}];
  // var spotdata=eval(JSON.stringify(data));
     
  //     $scope.spots=spotdata;
  //     console.log("Spots list:"+spotslist);
  //     console.log("Spots data:"+spotdata);
  //   }).
  //   error(function(data, status, headers, config) {
  //     alert("no get api data");
  //   });
})

.controller('SpotsCtrl', function($scope, $http) {
  


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

/*$scope.spots = Spots.all();

  $scope.remove = function(spot) {
    spots.remove(spot);
  }*/

  $http.get('http://localhost:8080/sparking/spot/getAllSpots').then(function(resp) {
    alert("HTTP get call");
    data= JSON.stringify(resp.data);
    alert("data:"+data);
   console.log(data);
    /*obj = eval(data);
    alert("obj"+obj);
    spots=obj[0];
    console.log("alerting spots");
    console.log(spots);
    alert("spots:"+spots);
     alert("data 0:"+data[0]);*/
   $scope.spots=data;
  }, function(err) {
    console.error('ERROR retreivig data', err);
    // err.status will contain the status code
  })

})

.controller('userPostCtrl' ,  function($scope ,$http, $stateParams, Spots,$state){
 $scope.showForm = true;
  $scope.spot = Spots.get($stateParams.spotId);
  console.log('Trying POST');
  $scope.User = {};

  $scope.submit = function() {    
    if(!$scope.User.firstName) {
      alert('Info required name is'+ $scope.User.firstName);
      return;
    }

    $scope.User.spotId=$stateParams.spotId;
    
    var request = $http({
            method: 'post',
            url: 'http://ec2-52-8-236-47.us-west-1.compute.amazonaws.com:8080/sparking/spot/saveUser',
            data: JSON.stringify($scope.User),
            headers : {"Content-Type": 'application/json'}

        }).success(function (data, status, headers, config) {
            console.log("Success",data);
        }).error(function (data, status, headers, config) {
            console.log("Failed",data,status);
        });

    console.log('----------Trying USER POST----------Data:'+JSON.stringify($scope.User)+"request:"+eval(request));
    window.location = "maps:daddr=2126+Madera+Way+Mountain+View";

}
})

.controller('SpotDetailCtrl', function($scope, $stateParams, Spots) {
  $scope.spot = Spots.get($stateParams.spotId);
   

})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
