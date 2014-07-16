(function(){

  angular.module('app').controller('FriendController', function($scope, $http){

    $scope.test = "HELLO WORLD!";
    $scope.searchTerm = "";
    $scope.locationTerm = "";

    $http.get('friend-data.json').then(function(responseFromServer){
      $scope.friends = responseFromServer.data;
    });

  });

})();