'use strict';

angular.module('bettertweetApp', ['betterplaceServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:id', {
        templateUrl: 'views/project_details.html',
        controller: 'ProjectDetailsCtrl'
      })
      .when('/donation-success', {
        templateUrl: 'views/tweet.html',
        controller: 'TweetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

