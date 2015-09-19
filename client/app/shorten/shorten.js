var utils = require('../../../server/config/utils.js');

angular.module('shortly.shorten', ['shortly.shorten.utils'])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  // $scope.link.links = [];
  $scope.addLink = function (link) {
    $scope.link.url = link;
    // $scope.link.links.push(link);
    Links.linkPoster($scope.link);
  };

  $scope.isUrl = utils.isValidUrl;

});
