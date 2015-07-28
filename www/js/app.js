
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ionic.service.core',
  'ionic.service.deploy',
  'starter.controllers',
  'starter.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

  ionic.Platform.ready(function(){
   console.log("device ready");
   var isIOS = ionic.Platform.isIOS();
    var deviceInformation = ionic.Platform.device();

  var isWebView = ionic.Platform.isWebView();
  var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();
  var isWindowsPhone = ionic.Platform.isWindowsPhone();

  var currentPlatform = ionic.Platform.platform();
  var currentPlatformVersion = ionic.Platform.version();

   console.log("is iOS"+isIOS);
   console.log("is android"+isAndroid);
   console.log("is deviceInformation"+deviceInformation);
    
   console.log("is isWindowsPhone"+isWindowsPhone);
   
console.log("is currentPlatform"+currentPlatform);
   console.log("is currentPlatformVersion"+currentPlatformVersion);
   
  })

  });
})


.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '124f2d59',
    // The public API key all services will use for this app
    api_key: '9e34a32f1e350b4556c0031892df23215d5fdf37eb502115',
    // Set the app to use development pushes
    dev_push: true
  });
}])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
   
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.spots', {
      url: '/spots',
      views: {
        'tab-spots': {
          templateUrl: 'templates/tab-spots.html',
          controller: 'getSpotsCtrl'
        }
      }
    })
    .state('tab.spot-detail', {
      url: '/spots/:spotId',
      views: {
        'tab-spots': {
          templateUrl: 'templates/spot-detail.html',
          controller: 'SpotDetailCtrl'
        }
      }
    })
    .state('spot-booking', {
                url: '/spot-booking/:spotId',
                templateUrl: 'templates/spot-booking.html',
                controller: 'userPostCtrl'
            })
/*
.state('spot-booking', {
      url: 'spot-booking',
      views: {
        'tab-spots': {
          templateUrl: 'templates/spot-booking.html',
          controller: 'spotDetailCtrl'
        }
      }
    })*/
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/spots');
});

