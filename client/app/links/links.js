angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function () {
    Links.linkGetter().then(function (dataLinks) {
      $scope.data.links = dataLinks;
    });
  };

  $scope.getLinks();
});
