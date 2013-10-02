'use strict';

angular.module('bettertweetApp')
  .controller('ProjectDetailsCtrl', function ($scope, Project, $routeParams) {
    Project.get({id: $routeParams.id}, function(project) {
      $scope.project = project;
    });
  });
