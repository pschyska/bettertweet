'use strict';

angular.module('bettertweetApp')
  .controller('ProjectsCtrl', function ($scope, Projects) {
    $scope.loadProjects = function(query) {
      Projects.query({q: query || ''}, function(result) { $scope.results = result.data });    
    };
    $scope.loadProjects();
  });
