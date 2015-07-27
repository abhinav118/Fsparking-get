angular.module('starter.services', [])

.factory('Spots', function($http,$q) {



  // Might use a resource here that returns a JSON array
var spot;
  /* var i=0;var data;var obj;
       $http.get('http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/getAllSpots').then(function(resp) {
    //alert("test inside");i=1;
    data= JSON.stringify(resp.data);
    obj = eval(data);
    window.spot=obj[0];
    console.log("alerting spot");
   console.log(window.spot);
  }, function(err) {
    console.error('ERROR retreivig data', err);
    // err.status will contain the status code
  })*/
    //var spots=window.spot;      
var spots1=[{"spotId":1,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1,"img":"21st.png"},{"spotId":2,"address1":"10 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"800","description":"Great Spot","carSize":1,"img":"guerrero.png"},{"spotId":3,"address1":"1 Landmark","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"800","description":"Great Spot","carSize":1,"img":"treat.png"},{"spotId":4,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":5,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":6,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":7,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":8,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":9,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":10,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":11,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":12,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":13,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":14,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":15,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":16,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":17,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":18,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":19,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":20,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":21,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":22,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":23,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":24,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":25,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":26,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":27,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":28,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":29,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":30,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":31,"address1":"2 town","address2":"apt 23","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":32,"address1":"2 town","address2":"123","city":"sanfran","state":"ca","zip":"12345","spotType":"sa","rateHr":"12","rateMonthly":"120","description":"asdfg","carSize":1},{"spotId":33,"address1":"2 town","address2":"apt 23","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":34,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":35,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":36,"address1":"2 towmsend","address2":"234","city":"San Francisco","state":"CA","zip":"94134","spotType":"1","rateHr":"1","rateMonthly":"1","description":"1","carSize":1},{"spotId":37,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1}];
//=[{"spotId":1,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38.0,"y1":-122.0,"image":"http://res.cloudinary.com/dsejtrwis/image/upload/v1435036703/21st_ixx3ip.png"},{"spotId":7,"address1":"2 townsey","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":35.0,"y1":-122.0,"image":null},{"spotId":8,"address1":"2 townsend","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38.0,"y1":-122.0,"image":null}];
  var spots=null;
  function getSpots(){
    alert("getSpots");
 $http.get('http://localhost:8080/sparking/spot/getAllSpots').
    success(function(data, status, headers, config) {
      alert("get data:"+JSON.stringify(data));
  //var spotslist=[{"spotId":1,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38.0,"y1":-122.0,"image":"http://res.cloudinary.com/dsejtrwis/image/upload/v1435036703/21st_ixx3ip.png"},{"spotId":7,"address1":"2 townsend","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":35.0,"y1":-122.0,"image":null},{"spotId":8,"address1":"2 townsend","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1,"x1":38.0,"y1":-122.0,"image":null}];
  var spotdata=eval(JSON.stringify(data));
     
      spots=spotdata;
      return spots;
    }).
    error(function(data, status, headers, config) {
      alert("no spot data in services");
      return $q.reject(data);
    });
    return null;
}


  return {
    all: function() {
                // the $http API is based on the deferred/promise APIs exposed by the $q service
                // so it returns a promise for us by default
                //return $http.get('http://ec2-52-8-236-47.us-west-1.compute.amazonaws.com:8080/sparking/spot/getAllSpots')
              // return spots1;   

return $http.jsonp('http://ec2-52-8-236-47.us-west-1.compute.amazonaws.com:8080/sparking/spot/getAllSpots?callback=JSON_CALLBACK')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            spots= eval(JSON.stringify(response.data));
                            console.log("spots",spots);
                            return spots;
                        } else {
                            
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });
//actual

//                   return $http.jsonp('http://localhost:8080/sparking/spot/getAllSpots?callback=JSON_CALLBACK')
//                     .success(function(data, status, headers, config) {
//                          alert("spots:"+JSON.stringify(data)); 
//                         // var spotdata=eval(JSON.stringify(data));
//                         // alert("spotdata:"+spotdata);
// console.log("spots:"+data);
// console.log("spots json:"+JSON.stringify(data));
// console.log("spots:"+eval(JSON.stringify(data)));


//                         // if (typeof response.data === 'object') {
//                              spots= eval(JSON.stringify(data));
//                             return spots;
//                         // } else {
                            
//                         //     return $q.reject(response.data);
                        

//                     }).
//                      error(function(data, status, headers, config) {
//                         // something went wrong
//                         return $q.reject(response.data);
//                     });
  //actual
            },


    //function() {
      



  
    /* $http.get('http://localhost:8080/sparking/spot/getAllSpots').then(function(resp) {
    alert("HTTP get call");
    data= JSON.stringify(resp.data);
    alert("data:"+data);
   console.log('spots:',data);
    obj = eval(data);
    alert("obj"+obj);
    spots=obj[0];
    console.log("alerting spots");
    console.log(spots);
    alert("spots:"+spots);
     alert("data 0:"+data[0]);
   return spots;
  }, function(err) {
    console.error('ERROR retreivig data', err);
    // err.status will contain the status code
  })*/

//},
    remove: function(spot) {
      spots.splice(spots.indexOf(spot), 1);
    },
    get: function(spotId) {
      //getSpots();
      alert(spotId);

      for (var i = 0; i < spots.length; i++) {
        if (spots[i].spotId === parseInt(spotId)) {
          return spots[i];
        }
      }
      return null;
    }
  };
});





