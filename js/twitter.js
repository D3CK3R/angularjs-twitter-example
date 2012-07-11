angular.module('Twitter', ['ngResource']);

function TwitterController($scope, $resource) {
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
    }
  };
}
