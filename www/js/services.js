angular.module('starter.services', [])

.factory('Spots', function($http) {



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
var spots=[{"spotId":1,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1,"img":"21st.png"},{"spotId":2,"address1":"10 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"800","description":"Great Spot","carSize":1,"img":"guerrero.png"},{"spotId":3,"address1":"1 Landmark","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"800","description":"Great Spot","carSize":1,"img":"treat.png"},{"spotId":4,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":5,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":6,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":7,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":8,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":9,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":10,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":11,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":12,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":13,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":14,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":15,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":16,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":17,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":18,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":19,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":20,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":21,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":22,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":23,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":24,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":25,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":26,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":27,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":28,"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":29,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":30,"address1":"200 Town","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1},{"spotId":31,"address1":"2 town","address2":"apt 23","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":32,"address1":"2 town","address2":"123","city":"sanfran","state":"ca","zip":"12345","spotType":"sa","rateHr":"12","rateMonthly":"120","description":"asdfg","carSize":1},{"spotId":33,"address1":"2 town","address2":"apt 23","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":34,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":35,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1},{"spotId":36,"address1":"2 towmsend","address2":"234","city":"San Francisco","state":"CA","zip":"94134","spotType":"1","rateHr":"1","rateMonthly":"1","description":"1","carSize":1},{"spotId":37,"address1":"2 town","address2":"apt 111","city":"sanjose","state":"CA","zip":"97878","spotType":"garage","rateHr":"2","rateMonthly":"200","description":"destination","carSize":1}];

  // Some fake testing data
  /*var spots = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];*/

  return {
    all: function() {
return spots;
  /*
   return  $http.get('http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/getAllSpots').then(function(resp) {
    alert("HTTP get call");
    data= JSON.stringify(resp.data);
    obj = eval(data);
    spots=obj[0];
    console.log("alerting spots");
    console.log(spots);
   return spots;
  }, function(err) {
    console.error('ERROR retreivig data', err);
    // err.status will contain the status code
  })*/

},
    remove: function(spot) {
      spots.splice(spots.indexOf(spot), 1);
    },
    get: function(spotId) {
      for (var i = 0; i < spots.length; i++) {
        if (spots[i].spotId === parseInt(spotId)) {
          return spots[i];
        }
      }
      return null;
    }
  };
});





