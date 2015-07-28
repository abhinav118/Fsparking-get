angular.module('starter.controllers', ['ionic','ngCordova'])

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



// Spots.all().then(function(data) {
//                     // promise fulfilled
//                     //alert("data:"+eval(data));
//                     var temp=JSON.stringify(data);
//                     console.log("temp data",temp);
//                     console.log(temp["data"]);
//                      console.log(temp.data);
//                      console.log(angular.toJson(data))
//                     // console.log(JSON.stringify(temp.data));
//                     // alert("temp:"+temp);
//                     // alert("temp data:"+eval(temp.data));
// var sdata='[{"spotId":9,"address1":"2 townsend","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38,"y1":-122,"image":null,"spotBooked":""}]';
// var spots1=[{"spotId":1,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1,"img":"21st.png"},{"spotId":2,"address1":"10 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"800","description":"Great Spot","carSize":1,"img":"guerrero.png"},{"spotId":3,"address1":"1 Landmark","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"800","description":"Great Spot","carSize":1,"img":"treat.png"},{"spotId":4,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":5,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":6,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":7,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":8,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":9,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":10,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":11,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":12,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":13,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":14,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":15,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":16,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":17,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":18,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":19,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":20,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":21,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":22,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":23,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":24,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":25,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":26,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":27,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":28,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":29,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":30,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":31,"address1":"2 town","address2":"apt 23","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":32,"address1":"2 town","address2":"123","city":"sanfran","state":"ca","zip":"12345","spotType":"sa","rateHr":"12","rateMonthly":"120","description":"asdfg","carSize":1},{"spotId":33,"address1":"2 town","address2":"apt 23","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":34,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":35,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":36,"address1":"2 towmsend","address2":"234","city":"San Francisco","state":"CA","zip":"94134","spotType":"1","rateHr":"1","rateMonthly":"1","description":"1","carSize":1},{"spotId":37,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1}];

//                     var a = angular.toJson(data);
//                      obj=JSON.parse(a);
//                      alert(JSON.stringify(obj.data));
//                     $scope.spots = spots1;
//                     //JSON.stringify(obj.data);
//                     console.log("all spots");
//                     console.log($scope.spots);
//                 });
//console.log(Spots.all());

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

.controller('userPostCtrl' ,  function($scope ,$http, $stateParams, Spots,$state, $location){
 $scope.showForm = true;
  $scope.spot = Spots.get($stateParams.spotId);
  console.log('Trying POST');
  $scope.User = {};

  $scope.submit = function() {    
    if(!$scope.User.firstName) {
      alert('Info required name is'+ $scope.User.firstName);
      return;
    }
    if(!$scope.User.lastName) {
      alert('Info required name is'+ $scope.User.lastName);
      return;
    }
    if(!$scope.User.email) {
      alert('Info required name is'+ $scope.User.email);
      return;
    }
    if(!$scope.User.phone) {
      alert('Info required name is'+ $scope.User.phone);
      return;
    }

    $scope.User.spotId=$stateParams.spotId;
    
    var request = $http({
            method: 'POST',
            url: 'http://localhost:8080/sparking/spot/saveUser',
            //url: 'http://ec2-52-8-236-47.us-west-1.compute.amazonaws.com:8080/sparking/spot/saveUser',
            data: JSON.stringify($scope.User),
            withCredentials: true,
            headers : {'Content-Type': 'application/json;charset=UTF-8' }

        }).success(function (data, status, headers, config) {
            console.log("Success",data);
        }).error(function (data, status, headers, config) {
            console.log("Failed",data,status);
        });

    console.log('----------Trying USER POST----------Data:'+JSON.stringify($scope.User)+"request:"+eval(request));
  

  var location="templates/tab-dash.html";

  ionic.Platform.ready(function(){
   console.log("device  is ready");
   var isIOS = ionic.Platform.isIOS();
   var isAndroid = ionic.Platform.isAndroid();
   
    console.log("is iOS"+isIOS);
   console.log("is android"+isAndroid);

if (isIOS) {
  location = 'maps:daddr=2126+Madera+Way+Mountain+View';
} else if (isAndroid) {
  location = 'geo:0,0?q=2126+Madera+Way+Mountain+View';
}
window.location = location;

$location.path("/dash");
  
 })

    

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
