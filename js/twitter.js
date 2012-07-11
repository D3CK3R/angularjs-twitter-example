angular.module('Twitter', ['ngResource']);

function TwitterController($scope, $resource, $location) {
  $scope.$watch('$location.hash()', function() {
    $scope.username = $location.hash();
    $scope.fetch();
  });
  

  $scope.twitter = $resource(
    'https://api.twitter.com/1/users/:action',
    {action:'show.json', callback:'JSON_CALLBACK'},
    {get:{method:'JSONP'}}
  );

  $scope.fetch = function() {
    if (angular.isDefined($scope.username) && $scope.username != '')
    {
      $scope.userData = $scope.twitter.get({screen_name:$scope.username});
      $scope.screenName = $scope.username;

      // Change the hash in the URL.
      $location.hash($scope.username);
    }
  };
}
