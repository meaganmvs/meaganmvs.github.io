angular.module('meaganApp')
  .controller('SearchCtrl', function ($scope, $http, $sce, $timeout, $mdSidenav) {
    $scope.search = {};
    $scope.testing = 'elephant';
    $scope.search.phrase = null;
    $scope.apiKey = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
    var trustedUrl = $sce.trustAsResourceUrl('https://api.giphy.com/v1/gifs/search');
    
    $scope.searchGiphy = function () {
        $http.get(trustedUrl+'?api_key='+$scope.apiKey+'&q='+$scope.search.phrase)
            .then(function success (response) {
                $scope.gifs = response.data.data;
        }, function error (response) {
            console.log(response);
        });
    };
    
    $scope.toggleNav = function () {
        return $mdSidenav('right').toggle();
    };

  });