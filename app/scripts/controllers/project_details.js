'use strict';

angular.module('bettertweetApp')
  .controller('ProjectDetailsCtrl', function ($scope, Project, $routeParams) {
    Project.get({id: $routeParams.id}, function(project) {
      $scope.project = project;
    });

    $scope.getPlatformLink = function() {
      for(var i = 0; i < $scope.project.links.length; i++) {
        if($scope.project.links[i]["rel"] == "platform") {
          return $scope.project.links[i]["href"];
        }
      }
    }
  }).filter('truncate', function() {
    return function(value, length) {
      length = length || 15;
      var div = document.createElement("div");
      div.innerHTML = value;
      return div.innerText.substring(0, length - 3)+" &hellip;"
    }
  });
