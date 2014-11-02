
angular.module('mcodeit', ['ionic','mcodeit.controllers', 'mcodeit.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  
  $stateProvider

    // .state('splash', {
    //   url: "/",
    //   templateUrl: "templates/splash.html"
    // })

    .state('code', {
      url: "/code",
      templateUrl: "templates/code.html",
      controller: 'CodeCtrl as code'
      
    })

    .state('result', {
      url: '/result',
      templateUrl: 'templates/result.html',
      controller: 'ResultCtrl as result'
      
    });

    // show code and result pane on single view
    // .state('combined', {
    //   url: '/combined',
    //   templateUrl: 'templates/combined.html',
    //   controller: 'CombinedCtrl as combo'
    // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/code');

});