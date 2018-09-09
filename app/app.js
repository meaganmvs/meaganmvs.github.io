/**
 * Personal Website
 * Created By Meagan Sievers
 */
angular
  .module('meaganApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'templates/meagan.html'
      })
     .when('/gifs', {
        templateUrl: 'templates/search.html'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html'
    })
    .when('/photos', {
        templateUrl: 'templates/photos.html'
    })
      .otherwise({
        redirectTo: '/'
      });
     $locationProvider.html5Mode(true);
  })
.directive('meagan', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/meagan.html'
        }
    });



